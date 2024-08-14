import axios from "./ajax";

export async function notesService(bookId: string, token: any): Promise<any> {
  return await axios.get(`/wxread/notes/noteslist`, {
    params: {
      bookId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
