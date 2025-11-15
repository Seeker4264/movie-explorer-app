import { useParams } from "react-router";

const Movie = () => {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <div>
      <h1>Movie Works! {movieId}</h1>
    </div>
  );
};

export default Movie;
