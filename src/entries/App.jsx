import { RouterProvider } from "react-router-dom";
import { router } from "@/core/utils/routes.jsx";

function App() {
  document.title = "LibrarianApp";
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
