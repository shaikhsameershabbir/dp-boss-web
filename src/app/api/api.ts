import apiClient from "@/lib/http/axios";

export interface ApiError extends Error {
  status?: number;
  data?: unknown;
}

export const getTodayLuckyNumber = async () => {
  const response = await apiClient.get("/today-lucky-number");
  return response.data;
};

// Server-side API client
// const apiClient = {
//   get: async (url: string) => {
//     const response = await fetch(
//       `${
//         process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:1432/api"
//       }${url}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "X-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
//         },
//       }
//     );
//     return response.json();
//   },
// };

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
