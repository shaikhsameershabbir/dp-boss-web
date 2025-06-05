import apiClient from "@/lib/http/axios";

export interface ApiError extends Error {
  status?: number;
  data?: any;
}

const getTodayLuckyNumber = async () => {
  const response = await apiClient.get("/today-lucky-number");
  return response.data;
};

export { getTodayLuckyNumber };
