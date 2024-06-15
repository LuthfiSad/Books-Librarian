import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import datas from "@/core/utils/books.json";
import axios from "axios";
import { APP_CONFIG } from "@/core/configs/app";
import { updateBook } from "@/core/services/books";

const Detail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const maxBorrow = 3;
  const navigator = useNavigate();

  useEffect(() => {
    const book = datas.find((b) => b.id === Number(id));
    if (!book) {
      alert("Book not found.");
      navigator("/books");
    }
    setBook(book);

    const localBorrowedBooks =
      JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setBorrowedBooks(localBorrowedBooks);
  }, [id]);

  const handleBorrow = async () => {
    if (!confirm("Are you sure you want to borrow this book?")) {
      return;
    }
    if (borrowedBooks.length >= maxBorrow) {
      alert("You can borrow a maximum of 3 books.");
      return;
    }
    if (borrowedBooks.includes(book.id)) {
      alert("You already borrowed this book.");
      return;
    }

    const updatedBook = { ...book, borrowCount: book.borrowCount + 1 };

    try {
      setBook(updatedBook);
      const newBorrowedBooks = [...borrowedBooks, book.id];
      localStorage.setItem("borrowedBooks", JSON.stringify(newBorrowedBooks));
      setBorrowedBooks(newBorrowedBooks);

      await updateBook(book.id, updatedBook);
    } catch (error) {
      setBook(book);
      localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
      setBorrowedBooks(borrowedBooks);
      console.error("Error updating book:", error);
      alert("Failed to borrow the book. Please try again later.");
    }
  };

  const handleReturn = async () => {
    if (!confirm("Are you sure you want to return this book?")) {
      return;
    }
    const newBorrowedBooks = borrowedBooks.filter(
      (bookId) => bookId !== book.id
    );

    try {
      const updatedBook = { ...book, borrowCount: book.borrowCount - 1 };
      setBook(updatedBook);

      setBorrowedBooks(newBorrowedBooks);
      localStorage.setItem("borrowedBooks", JSON.stringify(newBorrowedBooks));

      await updateBook(book.id, updatedBook);
    } catch (error) {
      setBook(book);
      setBorrowedBooks(borrowedBooks);
      localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));

      console.error("Error updating book:", error);
      alert("Failed to return the book. Please try again later.");
    }
  };

  if (!book)
    return (
      <div className="bg-white shadow-md rounded-lg my-10 p-6">
        <p className="text-3xl font-bold text-center">Loading...</p>
      </div>
    );

  const isOutOfStock = book.borrowCount >= book.booksCount;

  return (
    <>
      <div className="bg-white shadow-md rounded-lg my-10 gap-10 p-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 relative flex justify-center mb-6 md:mb-0">
          <img
            src={book.image}
            alt={book.title}
            className="max-w-full h-auto object-cover rounded-md"
          />
          {isOutOfStock && (
            <span className="text-red-500 bg-black p-2 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
              (Habis)
            </span>
          )}
        </div>
        <div className="md:w-1/2 max-md:text-center">
          <h2 className="text-3xl font-bold">
            {book.title}{" "}
            {isOutOfStock && <span className="text-red-500">(Habis)</span>}
          </h2>
          <p className="text-base">Penulis: {book.author}</p>
          <p className="text-xl mb-2">{book.description}</p>
          <p className="text-base">Penerbit: {book.publisher}</p>
          <p className="text-base">Tahun: {book.year}</p>
          <p className="text-base">Genre: {book.genre}</p>
          <p className="text-base">Jumlah Halaman: {book.pageCount}</p>
          <p className="text-base">Jumlah Buku: {book.booksCount}</p>
          <p className="text-base">Jumlah Pinjaman: {book.borrowCount}</p>
          <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={handleBorrow}
              disabled={isOutOfStock || borrowedBooks.includes(book.id)}
              className={`w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg ${
                isOutOfStock || borrowedBooks.includes(book.id)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              Borrow
            </button>
            <button
              onClick={handleReturn}
              disabled={!borrowedBooks.includes(book.id)}
              className={`w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-lg ${
                !borrowedBooks.includes(book.id)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-700"
              }`}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
