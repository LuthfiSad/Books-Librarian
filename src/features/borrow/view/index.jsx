import Section from "@/features/global/container/Section";
import TopSection from "@/features/global/container/TopSection";
import ListBooks from "@/features/global/container/ListBooks";
import datas from "@/core/utils/books.json";
import { useEffect, useState } from "react";

const Borrow = () => {
  const [data, setData] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Ambil ID buku yang dipinjam dari localStorage
    const borrowedIds = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    
    // Filter data buku berdasarkan ID yang dipinjam
    const borrowedBooksData = datas.filter(book => borrowedIds.includes(book.id));
    
    setData(borrowedBooksData);
    setBorrowedBooks(borrowedIds);
  }, []);

  return (
    <TopSection>
      <Section className="py-10">
        <ListBooks list={data} />
      </Section>
    </TopSection>
  );
};

export default Borrow;
