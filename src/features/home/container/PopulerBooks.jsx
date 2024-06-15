import books from "@/core/assets/buku1.png";
import Card from "@/features/global/components/Card";
import ListBooks from "@/features/global/container/ListBooks";
import datas from "@/core/utils/books.json";
import useResponsive from "@/features/global/hooks/useResponsive";
import { useEffect, useState } from "react";

const PopulerBooks = () => {
  const [limit, setLimit] = useState(8);
  const { isLaptop, isMobile, isTablet } = useResponsive();
  const sortedData = [
    ...datas
      .filter((item) => item.borrowCount !== item.booksCount)
      .sort((a, b) => b.borrowCount - a.borrowCount),
    ...datas.filter((item) => item.borrowCount === item.booksCount),
  ];
  useEffect(() => {
    if (isMobile) {
      setLimit(4);
    } else if (isLaptop) {
      setLimit(6);
    } else {
      setLimit(8);
    }
  }, [window.innerWidth]);

  const limitedData = sortedData.slice(0, limit);
  return (
    <div
      className="flex flex-col items-center py-16 justify-center gap-16"
      id="popular"
    >
      <h1 className="text-3xl font-bold">Buku Terpopuler</h1>
      <ListBooks list={limitedData} />
    </div>
  );
};

export default PopulerBooks;
