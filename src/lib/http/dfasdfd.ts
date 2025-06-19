"use client";
import axios, {
  type AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
} from "axios";

// Log environment variables for debugging
console.log("API URL:", process.env.NEXT_PUBLIC_SOCKET_URL);
console.log("API Key exists:", !!process.env.NEXT_PUBLIC_API_KEY);

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1430/api";

if (!API_KEY) {
  console.warn(
    "Warning: NEXT_PUBLIC_API_KEY is not set in environment variables"
  );
}

// Create the API client instance
const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY || "", // Set API key in default headers
  },
  withCredentials: true, // Allow credentials
});

// Store for requests that should be retried after token refresh
let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
  config: AxiosRequestConfig;
}[] = [];

const processQueue = (error: AxiosError | null) => {
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

  // Add API key to headers if not already set
  if (!config.headers["X-API-Key"] && API_KEY) {
    config.headers["X-API-Key"] = API_KEY;
  }

  // Log request details for debugging
  console.log("Request URL:", config.url);
  console.log("Headers:", config.headers);

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
