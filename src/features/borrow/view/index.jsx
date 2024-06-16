import Section from "@/features/global/container/Section";
import TopSection from "@/features/global/container/TopSection";
import ListBooks from "@/features/global/container/ListBooks";
import { useEffect, useState } from "react";
import { getBooks } from "@/core/services/books";

const Borrow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const borrowedIds = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    getBooks().then((res) => {
      const borrowedBooksData = res.filter(book => borrowedIds.includes(book.id));
      setData(borrowedBooksData);
    })
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
