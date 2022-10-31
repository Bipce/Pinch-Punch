import { Link } from "react-router-dom";
import { IGenre } from "../../models/IGenre";
import { IMovie } from "../../models/IMovie";

import "./MoviesGenre.css";

interface IProps {
  movies: IMovie[];
  genre: IGenre;
}

const MoviesGenre: React.FC<IProps> = ({ movies, genre }) => {
  return (
    <>
      <h2 className="moviesGenre__title fz2">{genre.name}</h2>
      {movies.map((movie) => {
        return (
          <Link to="./movie/:id" key={movie.id} className="moviesGenre-box__link">
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="moviesGenre-box__image" />
            <h3 className="ellipsis moviesGenre-box__title fz2">{movie.title}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default MoviesGenre;
