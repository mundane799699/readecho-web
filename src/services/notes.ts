import axios from "./ajax";

export async function notesService(bookId: string, token: any): Promise<any> {
  return await axios.get(`/wxread/notes/list/${bookId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
