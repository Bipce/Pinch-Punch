import { IMovie } from "../../models/Movie(s)/IMovie";

interface IProps {
  movie: IMovie;
}

const MovieDetails: React.FC<IProps> = ({ movie }) => {
  return (
    <div className="scroll-container">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      {movie.genres.map((genre) => {
        return <h3 key={genre.id}>{genre.name}</h3>;
      })}
    </div>
  );
};

export default MovieDetails;
