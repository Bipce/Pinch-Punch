import { Link } from "react-router-dom";
import { IMovie } from "../../models/IMovie";

import "./MoviesGenre.css";

interface IProps {
  movies: IMovie[];
}

const MoviesGenre: React.FC<IProps> = ({ movies }) => {
  return (
    <div className="moviesGenre-box flex-row flex-beet">
      {movies.map((movie) => {
        return (
          <Link to="./movie/:id" key={movie.id} className="moviesGenre-box__link">
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="moviesGenre-box__image" />
            <h3 className="movie-title moviesGenre-box__title">{movie.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default MoviesGenre;
