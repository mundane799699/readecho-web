import axios from "./ajax";
export async function loginService(loginData: any): Promise<any> {
  return await axios.post("/login233", loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function registerService(finalData: any): Promise<any> {
  return await axios.post("/register", finalData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function fetchUserInfoService(): Promise<any> {
  return await axios.get("/getInfo");
}
