import axios from "./ajax";

export async function booksService(token: any): Promise<any> {
  return await axios.get("/wxread/books/listAll", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
