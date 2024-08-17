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

export async function exportNotesService(bookName: string) {
  try {
    const response = await axios({
      method: "POST",
      url: "/wxread/notes/download",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        bookName,
      },
      responseType: "blob",
    });

    const contentDisposition = response.headers["content-disposition"];
    let filename = "file.xlsx";
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename=(.*)/i);
      if (filenameMatch && filenameMatch[1]) {
        filename = decodeURIComponent(filenameMatch[1].replace(/['"]/g, ""));
      }
    }
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("下载文件时发生错误:", error);
  }
}
