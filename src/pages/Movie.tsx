import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import { fetchMovieData } from "../lib/fetch";

interface Rating {
  Source: string;
  Value: string;
}

interface IMovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

const Movie = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);

  useEffect(() => {
    fetchMovieData(movieId || "")
      .then((res) => res.json())
      .then(setMovieDetails)
      .then(() => setLoading(false));
  }, [movieId]);

  return (
    <main>
      <Navbar />
      <section className="flex flex-col md:flex-row justify-center items-center w-full mt-16 gap-2 md:gap-16">
        {!loading && movieDetails && (
          <>
            <div
              style={{ backgroundImage: `url(${movieDetails.Poster})` }}
              className="w-72 sm:w-96 h-96 sm:h-128 bg-cover bg-center brightness-50 lg:group-hover:brightness-50 lg:brightness-100 duration-100 rounded-lg"
            />
            <div className="md:w-lg max-md:p-15">
              <h1 className="text-4xl font-bold text-white">
                {movieDetails.Title} - {movieDetails.Year}
              </h1>
              <p className="text-xl font-bold text-[#aaa] mt-2">
                {movieDetails.Released}
              </p>
              <p className="text-md font-bold text-[#888] mt-1">
                {movieDetails.Rated} - {movieDetails.Runtime} -{" "}
                {movieDetails.Genre}
              </p>
              <p className="text-md font-bold text-[#888]">
                {movieDetails.Director} - {movieDetails.Writer} -{" "}
                {movieDetails.Actors}
              </p>
              <p className="text-2xl font-bold text-[#ddd] my-12">
                {movieDetails.Plot}
              </p>
              <p className="text-xl font-bold text-[#aaa]">Ratings</p>
              <p className="text-md font-bold text-[#888]">
                Imdb: {movieDetails.imdbRating} ({movieDetails.imdbVotes} votes)
              </p>
              <p className="text-md font-bold text-[#888]">
                Metascore: {movieDetails.Metascore}
              </p>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Movie;
