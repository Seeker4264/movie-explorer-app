import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const SearchResult = () => {
  const searchQuery = useParams<{ query: string }>().query || "";

  return (
    <main>
      <Navbar />
      <section className="flex flex-col justify-center items-center w-full mt-8">
        <SearchBar initialSearch={searchQuery} />
      </section>
    </main>
  );
};

export default SearchResult;
