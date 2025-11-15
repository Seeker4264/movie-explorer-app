import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col justify-center items-center w-full mt-8">
        <SearchBar />
      </section>
    </main>
  );
};

export default Search;
