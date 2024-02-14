import { Link } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
const apiToken = import.meta.env.VITE_API_TOKEN;

const MovieDetails = ({ movieId }) => {
  const endPointSearch = `https://api.themoviedb.org/3/movie/${movieId}?&language=es-es&api_key=${apiToken}`;
  const { data, loading, error } = useDataApi(endPointSearch);
  // sacamos los generos
  const generos = data?.genres.map((genre) => genre.name);
  const generosJoin = generos?.join(", ");
  // const imageUrl = `https://image.tmdb.org/t/p/${data.poster_path}`;
  return (
    <>
      <div className="bg-gray-800 p-4">
        {loading && <Spinner />}
        {error && <p className="text-2xl">Error loading ...</p>}
        {data && (
          <>
            <div className="flex flex-col w-3/6 text-center mx-auto">
              <img
                className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt=""
              />
              <img
                className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="bg-gray-800 text-gray-50 max-w-md mx-auto rounded-xl shadow overflow-hidden md:max-w-screen-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
              <div className="md:flex justify-between">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                    {data.title}
                  </div>
                  <p className="block mt-2 text-xl leading-tight font-medium text-white">
                    {data.tagline}
                  </p>
                  <p className="block mt-5 text-xl leading-tight font-medium text-white">
                  {generosJoin}
                  </p>
                  <p className="block mt-2 text-xl leading-tight font-medium text-white">
                  {data.release_date}
                  </p>
                  <p className="mt-10 text-gray-400">
                    {data.overview}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2 space-x-4">
                  <Link to="/" className="text-xl text-red-500 hover:text-white m-5">
                    Volver</Link>
                </div>
              </div>
              
            </div>
          </>
        )}
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetails;
