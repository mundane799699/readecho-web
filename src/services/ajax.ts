import axios from "axios";
import { getToken } from "@/utils/user-token";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// 只有在客户端才添加token
if (typeof window !== "undefined") {
  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

instance.interceptors.response.use((res) => {
  if (res.config.responseType === "blob") {
    return res;
  }
  const { data } = res;
  return data as any;
});

export default instance;
