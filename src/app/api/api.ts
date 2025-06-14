// import apiClient from "@/lib/http/axios";

export interface ApiError extends Error {
  status?: number;
  data?: unknown;
}

// Server-side API client
const apiClient = {
  get: async (url: string) => {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1432/api"
      }${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          // "X-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
          "X-API-Key":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInR5cGUiOiJhcGkta2V5IiwiaWF0IjoxNzQ5ODgzNzU5fQ.zKC_6qXIf7StKNYqSeENjaIyIyWx8TNKg891EiZAq0U",
        },
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
