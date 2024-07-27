"use client";

const NoteList = ({ bookId }: { bookId: string }) => {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <h1 className="text-center text-3xl font-semibold">书籍id: {bookId}</h1>
      </div>
    </section>
  );
};

export default NoteList;
