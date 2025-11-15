import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = ({ initialSearch = "" }) => {
  const [search, setSearch] = useState(initialSearch);
  const navigate = useNavigate();

  const searchHandler = () => {
    if (search.trim() === "" || search.length < 3) return;
    navigate(`/search/${encodeURIComponent(search.trim())}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler();
      }}
      className="flex flex-row justify-center items-center w-[75%] px-4 py-2 rounded-full bg-[#444]"
    >
      <svg
        className="size-8 text-[#ccc]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="10" cy="10" r="7" />{" "}
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Busca tus películas..."
        className="w-full px-4 py-2 text-xl font-medium outline-none rounded-full text-[#ccc]"
      />
      <button
        className="flex justify-center items-center cursor-pointer m-0 p-0"
        type="submit"
      >
        <svg
          className="size-8 text-[#ccc]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="12" cy="12" r="9" />{" "}
          <line x1="16" y1="12" x2="8" y2="12" />{" "}
          <line x1="16" y1="12" x2="12" y2="16" />{" "}
          <line x1="16" y1="12" x2="12" y2="8" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
