export interface ApiError extends Error {
  status?: number;
  data?: unknown;
}

// Server-side API client
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

const apiClient = {
  get: async (url: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1430/api"
      }${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        // Force fresh request without triggering CORS preflight
        cache: "no-store",
      }
    );
    return response.json();
  },
};
export const getTodayLuckyNumber = async () => {
  const response = await apiClient.get("/today-lucky-number");
  
  return response.data;
};

// get bajar result
export const getMarketResult = async () => {
  const response = await apiClient.get("/getMarketResult");
  return response.data;
};

// get starline result
export const getStarlineResult = async () => {
  const response = await apiClient.get("/getStarlineResult");
  return response.data;
};

// get starline result by id
export const getStarlineResultById = async (starlineId: string) => {
  const response = await apiClient.get(`/getStarlineResultById/${starlineId}`);
  return response.data;
};

// get jodi result
export const getJodiResult = async (marketId: string) => {
  const response = await apiClient.get(`/getJodiResult/${marketId}`);

  return response.data;
};
