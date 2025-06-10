import apiClient from "@/lib/http/axios";

export interface ApiError extends Error {
  status?: number;
  data?: any;
}
export const getTodayLuckyNumber = async () => {
  const response = await apiClient.get("/today-lucky-number");
  return response.data;
};

// Server-side API client
const serverApiClient = {
  get: async (url: string) => {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1432/api"
      }${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
      }
    );
    return response.json();
  },
};

// get bajar result
export const getMarketResult = async () => {
  const response = await serverApiClient.get("/getMarketResult");
  return response;
};

// get starline result
export const getStarlineResult = async () => {
  const response = await serverApiClient.get("/getStarlineResult");
  return response;
};

// get jodi result
export const getJodiResult = async (marketId: string) => {
  const response = await serverApiClient.get(`/getJodiResult/${marketId}`);
  return response;
};
