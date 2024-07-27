import { Metadata } from "next";
import BookList from "@/components/DashBoard/BookList";

export const metadata: Metadata = {
  title: "数据面板",
};

const DashBoardPage = () => {
  return (
    <>
      <BookList />
    </>
  );
};

export default DashBoardPage;
