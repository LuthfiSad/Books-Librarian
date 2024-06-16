import axios from "axios";
import { APP_CONFIG } from "@/core/configs/app";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${APP_CONFIG.BASE_URL}/api/books`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching books");
  }
};

export const updateBook = async (bookId, updatedBook) => {
  try {
    const response = await axios.put(
      `${APP_CONFIG.BASE_URL}/api/books/${bookId}`,
      updatedBook
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating book");
  }
};

export const donateBook = async (bookData) => {
  try {
    const response = await axios.post(
      `${APP_CONFIG.BASE_URL}/api/books/donate`,
      bookData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error donating book");
  }
};
