import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton";
import MovieDetails from "../components/MovieDetails";

const MovieDetailsPage = () => {
  // para traer los parámetros que vienen en la url (:idPelicula)
  const {idPelicula} = useParams();
  return (
    <>
      <div>
        <BackButton/>
        <MovieDetails movieId={idPelicula}/>
      </div>
    </>
  )
}

export default MovieDetailsPage