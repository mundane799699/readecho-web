import axios from "axios";
import { getToken } from "@/utils/user-token";

const instance = axios.create({
  baseURL: "http://localhost:8080",
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
  const { data } = res;
  return data as any;
});

export default instance;
