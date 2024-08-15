import axios from "./ajax";

export async function notesService(
  bookId: string,
  bookName: string,
  token: any,
): Promise<any> {
  return await axios.get(`/wxread/notes/noteslist`, {
    params: {
      bookId,
      bookName,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
