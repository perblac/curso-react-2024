import { useState } from "react";
import useDataApi from "../hooks/useDataApi";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

const apiToken = import.meta.env.VITE_API_TOKEN;
const apiEndPoint =
  "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" +
  apiToken;

const MovieSearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMovie, setFilterMovie] = useState([]);

  const { data, error, loading } = useDataApi(apiEndPoint);
//   console.log(data);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    if (!value) {
      setFilterMovie([]);
    } else {
      const filteredResults = data?.results.filter((movie) =>
        movie.title.toLowerCase().includes(value.trim()),
      );
      setFilterMovie(filteredResults || []);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center my-4">
        <form
          className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center"
          // onSubmit={}
        >
          <input
            type="text"
            name=""
            id=""
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            placeholder="Buscar películas..."
          />
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6">
            { loading && <Spinner/> }
            { error && <h1 className="text-2xl font-bold">ERROR accediendo a MovieDB</h1> }
            { ( searchQuery ? filterMovie:data?.results || []).map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieSearchForm;
