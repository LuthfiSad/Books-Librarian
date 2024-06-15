import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterBooks = ({ isActive, setIsActive }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [inputSearch, setInputSearch] = useState(search);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search.length < 3 && search !== "") return alert("Minimal 3 karakter");
    setSearchParams({ search });
  };

  return (
    <div className="flex flex-col gap-10">
      <form onSubmit={handleSearch}>
        <div className="flex gap-1 items-center">
          <input
            placeholder="Cari..."
            className="px-3 rounded-l-xl outline-none w-full py-2 shadow-lg border border-black"
            type="search"
            id="search"
            name="search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-default hover:opacity-80 hover:scale-105 rounded-r-xl text-black px-5 py-2 shadow-lg border border-black"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex gap-1">
        <button
          className={`hover:opacity-80 hover:scale-105 rounded-xl text-black px-5 py-1 shadow-lg border border-black ${
            isActive === "semua" ? "bg-default" : "bg-white"
          }`}
          onClick={() => setIsActive("semua")}
        >
          Semua
        </button>
        <button
          className={`hover:opacity-80 hover:scale-105 rounded-xl text-black px-5 py-1 shadow-lg border border-black ${
            isActive === "pop" ? "bg-default" : "bg-white"
          }`}
          onClick={() => setIsActive("pop")}
        >
          Terpopuler
        </button>
        <button
          className={`hover:opacity-80 hover:scale-105 rounded-xl text-black px-5 py-1 shadow-lg border border-black ${
            isActive === "new" ? "bg-default" : "bg-white"
          }`}
          onClick={() => setIsActive("new")}
        >
          Terbaru
        </button>
      </div>
    </div>
  );
};

export default FilterBooks;
