import { ICast } from "../../models/Credits/ICast";
import { ICrew } from "../../models/Credits/ICrew";
import { IMovie } from "../../models/Movie(s)/IMovie";

import notFound from "../../assets/notFound.webp";
import "./MovieDetails.css";

interface IProps {
  movie: IMovie;
  cast: ICast[];
  crew: ICrew[];
}

const reverseString = (str: string) => {
  const reverse = str.split("-").reverse().join("-");

  return reverse;
};

const MovieDetails: React.FC<IProps> = ({ movie, cast, crew }) => {
  return (
    <div className="scroll-container">
      <h1 className="movie-details__title">{movie.title}</h1>

      <div className="flex-center bg-tertiary margin">
        <div className="movie-details--box flex-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="movie-details--box__img"
          />
          <div className="movie-details--box__info fz2">
            <p>
              <span className="bold">Release Date :</span> {reverseString(movie.release_date!)}
            </p>
            <div className="movie-details--box__genres">
              <p>
                <span className="bold">Genres :</span>
              </p>
              {movie.genres.map((genre) => {
                return <p key={genre.id}>{genre.name}</p>;
              })}
            </div>
            {crew.map((crew) => {
              if (crew.job == "Director") {
                return (
                  <p key={crew.job}>
                    <span className="bold">Director :</span> {crew.name}
                  </p>
                );
              }
            })}
            <div className="movie-details--box__cast">
              <p>
                <span className="bold">Actors :</span>
              </p>
              {cast.map((cast, i) => {
                if (i < 5) {
                  return <p key={cast.cast_id}>{cast.name}</p>;
                }
              })}
            </div>
          </div>
        </div>

        <div className="synopsis-cast--box">
          <div className="synopsis--box flex">
            <div className="sysnopsis fz2">
              <h2 className="synopsis--box__title">Synopsis :</h2>
              <p className="synopsis">{movie.overview}</p>
            </div>
          </div>

          <div className="cast--box">
            <h2 className="casting--box__title fz2">Casting: </h2>
            <div className="casting--box">
              {cast.map((cast, i) => {
                if (i < 10) {
                  return (
                    <div key={cast.cast_id} className="flex casting--box__actors">
                      {cast.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                          alt={cast.name}
                          className="casting--box__img"
                        />
                      ) : (
                        <img src={notFound} alt={cast.name} className="casting--box__img height" />
                      )}

                      <p className="fz2">{cast.name}</p>
                      <p className="casting--box__actors-role">Role: {cast.character}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
