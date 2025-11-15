import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col justify-center items-center w-full h-64 gap-8 mt-16 bg-[#383838]">
        <h1 className="text-6xl text-white">
          Tu próxima película está a sól una búsqueda
        </h1>
        <p className="text-xl text-[#ccc]">
          Busca el nombre de tu película favorita y encuentra toda la
          información que necesitas. Desde su sinopsis hasta el elenco, todo en
          un solo lugar.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center w-full mt-8">
        <SearchBar />
      </section>
    </main>
  );
};

export default Home;
