import About from "@/features/about/view";
import Books from "@/features/books/view";
import Borrow from "@/features/borrow/view";
import DetailBook from "@/features/detailBook/view";
import Donation from "@/features/donation/view";
import RootView from "@/features/global/views/RootView.jsx";
import Home from "@/features/home/view";
import { createBrowserRouter } from "react-router-dom";

export const Menus = [
  { name: "Home", to: "/" },
  { name: "Populer", to: "/#popular" },
  { name: "Buku", to: "/books" },
  { name: "Pinjam", to: "/borrow" },
  { name: "Donasi", to: "/donate" },
  { name: "Tentang", to: "/about" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView Menus={Menus} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/donate",
        element: <Donation />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/books/:id",
        element: <DetailBook />,
      },
      {
        path: "/borrow",
        element: <Borrow />,
      },
    ],
  },
]);
