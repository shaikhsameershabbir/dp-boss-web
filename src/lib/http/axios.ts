"use client";
import axios, {
  type AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
} from "axios";

// Log environment variable for debugging

// Create the API client instance
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1432/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Allow credentials
});

// Store for requests that should be retried after token refresh
let isRefreshing = false;
let failedQueue: {
  resolve: Function;
  reject: Function;
  config: AxiosRequestConfig;
}[] = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });

  failedQueue = [];
};

// Add an interceptor to set the appropriate headers
apiClient.interceptors.request.use((config) => {
  // Ensure the 'credentials' option is set to 'include'
  config.withCredentials = true;

  // Add API key to headers
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (apiKey) {
    config.headers["X-API-Key"] = apiKey;
  }

  // No need to set these manually - they're handled by the browser and server
  // Removing these lines as they can interfere with CORS
  // config.headers["Access-Control-Allow-Origin"] = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1432/api"
  // config.headers["Access-Control-Allow-Credentials"] = "true"

  // Log the request URL for debugging
  const baseUrl = config.baseURL || apiClient.defaults.baseURL || "";
  const url = config.url || "";
  console.log(
    "API Request URL:",
    `${baseUrl}${url}`,
    "Method:",
    config.method?.toUpperCase()
  );

  if (config.params) {
    console.log("Request params:", config.params);
  }

  return config;
});

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response, // Return the response normally if there's no error
  async (error) => {
    const originalRequest = error.config;

    // If the error is due to an expired token (401) and we haven't already tried to refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If we're already refreshing, add this request to the queue
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        })
          .then(() => {
            return apiClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call refresh token endpoint
        await apiClient.post("/auth/refresh-token");

        // Process any requests in the queue
        processQueue(null);
        isRefreshing = false;

        // Retry the original request
        return apiClient(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, process queue with error
        processQueue(refreshError as AxiosError);
        isRefreshing = false;

        // Redirect to login page for authentication failures
        console.error("Failed to refresh token:", refreshError);
        alert("Your session has expired. Please log in again.");
        window.location.href = "/";

        return Promise.reject(refreshError);
      }
    }

    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
