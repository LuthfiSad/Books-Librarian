import Card from "@/features/global/components/Card";
import { Link } from "react-router-dom";

const ListBooks = ({ list }) => {
  return list.length > 0 ? (
    <div className="grid py-3 max-sm:grid-cols-2 max-lg:grid-cols-3 max-2xl:grid-cols-4 grid-cols-5 gap-5 items-center justify-center">
      {list.map((item, index) => (
        <Card
          as={Link}
          to={`/books/${item.id}`}
          key={index}
          booksCount={item.booksCount}
          borrowCount={item.borrowCount}
          src={item.image}
          penulis={item.author}
        >
          {item.title}
        </Card>
      ))}
    </div>
  ) : (
    <p className="text-center bg-white py-3 my-10 rounded-lg text-xl">Tidak ada buku</p>
  );
};

export default ListBooks;
