import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Thumbnail from "../components/Thumbnail";
import { fetchMovieSearch } from "../lib/fetch";

interface IAPIResponse {
  Search: IMovie[];
  totalResults: string;
  Response: string;
}

interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const SearchResult = () => {
  const searchQuery = useParams<{ query: string }>().query || "";
  const [loading, setLoading] = useState<boolean>(true);
  const [movieResults, setMovieResults] = useState<IMovie[] | null>(null);

  useEffect(() => {
    fetchMovieSearch(searchQuery)
      .then((res) => res.json() as Promise<IAPIResponse>)
      .then((data) => setMovieResults(data.Search))
      .then(() => setLoading(false));
  }, [searchQuery]);

  return (
    <main>
      <Navbar />
      <section className="flex flex-col justify-center items-center w-full mt-8">
        <SearchBar initialSearch={searchQuery} />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full p-16">
        {!loading &&
          movieResults &&
          movieResults.map((movie) => (
            <NavLink to={`/movie/${movie.imdbID}`}>
              <Thumbnail key={movie.imdbID} {...movie} />
            </NavLink>
          ))}
      </section>
    </main>
  );
};

export default SearchResult;
