import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IGenre } from "../../models/IGenre";
import { IMovie } from "../../models/IMovie";
import { getMovies } from "../../services/backend";

import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./MoviesListGenre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  genre: IGenre;
}

const MoviesListGenre: React.FC<IProps> = ({ genre }) => {
  const [movies, setMovies] = useState<IMovie[]>();

  const slideElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      setMovies(await getMovies(genre.id));
    })();
  }, []);

  const slide = (delta: number) => {
    slideElement.current?.scrollTo({
      behavior: "smooth",
      left: slideElement.current.scrollLeft + slideElement.current.offsetWidth * delta,
    });
  };

  return (
    <div key={genre.id} className="genre-box">
      <Link to={`./genres/${genre.name}`}>
        <h2 className="second-title">{genre.name} :</h2>
      </Link>

      <div className="flex-row flex-beet">
        <div className="movies-box__arrow">
          <button className="slide" onClick={() => slide(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} size="5x" className="slide-arrow" />
          </button>
        </div>

        <div className="flex-row movies-box__movie" ref={slideElement}>
          {movies?.map((movie) => {
            return (
              <div key={movie.id} className="image-box">
                <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                <h3 className="movie-title">{movie.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="movies-box__arrow">
          <button className="slide" onClick={() => slide(1)}>
            <FontAwesomeIcon icon={faChevronRight} size="5x" className="slide-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

// return (
//   <div key={genre.id} className="genre-box">
//     <Link to={`./genres/${genre.name}`}>
//       <h2 className="second-title">{genre.name} :</h2>
//     </Link>

//     <div className="flex-row movies-box horizontal-scroll-wrapper">
//       {movies?.map((movie) => {
//         if (movie.genre_ids.includes(genre.id)) {
//           return (
//             <div key={movie.id} className="image-box">
//               <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
//               <h3 className="movie-title">{movie.title}</h3>
//             </div>
//           );
//         }
//       })}
//       <FontAwesomeIcon icon={faChevronRight} size="5x" className="slide-arrow" />
//     </div>
//     <div className="m0">
//       <span className="line"></span>
//     </div>
//   </div>
// );

export default MoviesListGenre;
