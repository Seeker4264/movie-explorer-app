export const fetchMovieSearch = async (search: string) => {
  return await fetch(`http://www.omdbapi.com/?apikey=ba2a1f2d&s=${search}`);
};

export const fetchMovieData = async (imdbID: string) => {
  return await fetch(`http://www.omdbapi.com/?apikey=ba2a1f2d&i=${imdbID}`);
};
