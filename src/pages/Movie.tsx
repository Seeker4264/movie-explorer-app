import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const Movie = () => {
  const { movieId } = useParams<{ movieId: string }>();

  console.log("Movie ID:", movieId);

  return (
    <main>
      <Navbar />
      <section className="flex flex-col justify-center items-center w-full mt-8">
        <h1>Search: {movieId}</h1>
      </section>
    </main>
  );
};

export default Movie;
