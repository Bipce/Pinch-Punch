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
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollMax, setScrollMax] = useState(0);
  const [nextPage, setNextPage] = useState(2);

  const slideElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollLeft != 0) slide(1);
  }, [movies]);

  useEffect(() => {
    (async () => {
      setMovies(await getMovies(genre.id));
    })();
  }, []);

  useEffect(() => {
    if (slideElement.current != null) {
      setScrollMax(slideElement.current.scrollWidth - slideElement.current.clientWidth);
    }
  }, [slideElement.current, movies]);

  const slide = (delta: number) => {
    slideElement.current?.scrollTo({
      behavior: "smooth",
      left: slideElement.current.scrollLeft + slideElement.current.offsetWidth * delta,
    });
  };

  const loadNextMovies = async () => {
    const res = await getMovies(genre.id, nextPage);

    const tmp: IMovie[] = [...(movies || []), ...res];
    tmp.concat(res);

    setMovies(tmp);

    setNextPage((prev) => prev + 1);
  };

  return (
    <div className="">
      <div key={genre.id} className="genre-box ">
        <Link to={`./genres/${genre.name}`}>
          <h2 className="second-title">{genre.name} :</h2>
        </Link>

        <div className="flex-row flex-beet movie-box mrl2">
          <div
            className="movies-box__arrow movies-box__left movies-box__hover "
            style={{
              visibility: scrollLeft == 0 ? "collapse" : "visible",
              backgroundColor: scrollLeft == 0 ? "transparent" : "rgba(102, 102, 102, 0.176)",
            }}
          >
            <button className="slide" onClick={() => slide(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} size="5x" className="slide-arrow__left" />
            </button>
          </div>

          <div
            className="flex-row movies-box__movie"
            ref={slideElement}
            onScroll={(e) => {
              setScrollLeft(e.currentTarget.scrollLeft);
            }}
          >
            {movies?.map((movie) => {
              return (
                <div key={movie.id} className="image-box">
                  <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                  <h3 className="movie-title">{movie.title}</h3>
                </div>
              );
            })}
          </div>

          <div
            className="movies-box__arrow movies-box__right"
            style={{
              // visibility: scrollLeft >= scrollMax ? "collapse" : "visible",
              backgroundColor: scrollLeft >= scrollMax ? "transparent" : "rgba(102, 102, 102, 0.176)",
            }}
          >
            <button
              className="slide"
              onClick={async () => {
                if (scrollLeft >= scrollMax) {
                  await loadNextMovies();
                } else {
                  slide(1);
                }
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} size="5x" className="slide-arrow__right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesListGenre;
