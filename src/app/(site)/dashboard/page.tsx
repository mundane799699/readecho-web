import { Metadata } from "next";
import BookList from "@/components/DashBoard/BookList";
import NoteList from "@/components/DashBoard/NoteList";
import TabComponent from "@/components/DashBoard/TabComponent";

export const metadata: Metadata = {
  title: "数据面板",
};

const DashBoardPage = () => {
  return (
    <div className="container pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <TabComponent
        Bookshelf={<BookList />}
        Underline={<NoteList bookId="" />}
      />
    </div>
  );
};

export default DashBoardPage;
