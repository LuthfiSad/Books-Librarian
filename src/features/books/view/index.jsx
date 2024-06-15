// import Footer from "@/features/global/components/Footer"
import Section from "@/features/global/container/Section";
import TopSection from "@/features/global/container/TopSection";
import FilterBooks from "../components/FilterBooks";
import ListBooks from "@/features/global/container/ListBooks";
import datas from "@/core/utils/books.json";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const [data, setData] = useState(datas);
  const [isActive, setIsActive] = useState("semua");
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  useEffect(() => {
    let sortedData = [...datas];

    if (search.length >= 3) {
      sortedData = sortedData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    console.log(search.length);

    if (isActive === "new") {
      sortedData = sortedData.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (isActive === "pop") {
      sortedData = [
        ...sortedData
          .filter((item) => item.borrowCount !== item.booksCount)
          .sort((a, b) => b.borrowCount - a.borrowCount),
        ...sortedData.filter((item) => item.borrowCount === item.booksCount),
      ];
    }

    setData(sortedData);
  }, [isActive, search]);

  const handleActive = (value) => {
    setIsActive(value);
  };

  return (
    <TopSection>
      <Section className="py-10">
        <FilterBooks isActive={isActive} setIsActive={handleActive} />
        <ListBooks list={data} />
      </Section>
      {/* <Footer /> */}
    </TopSection>
  );
};

export default Books;
