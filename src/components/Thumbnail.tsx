interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Thumbnail = ({ Title, Year, Poster }: IMovie) => {
  return (
    <article className="group relative flex justify-center items-center gap-4 hover:scale-105 duration-100 cursor-pointer">
      <div
        style={{ backgroundImage: `url(${Poster})` }}
        className="w-full h-128 bg-cover bg-center brightness-50 lg:group-hover:brightness-50 lg:brightness-100 duration-100 rounded-lg"
      />
      <p className="absolute bottom-4 left-4 w-[80%] text-xl font-bold text-white opacity-100 lg:group-hover:opacity-100 lg:opacity-0 duration-100">
        {Title} ({Year})
      </p>
    </article>
  );
};

export default Thumbnail;
