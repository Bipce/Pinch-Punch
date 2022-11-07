import { ICast } from "../../models/Credits/ICast";
import { ICrew } from "../../models/Credits/ICrew";
import { IMovie } from "../../models/Movie(s)/IMovie";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import notFound from "../../assets/notFound.webp";
import "./CastingDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  movie: IMovie;
  cast: ICast[];
  crew: ICrew[];
}

const CastingDetails: React.FC<IProps> = ({ movie, cast, crew }) => {
  const slideElement = useRef<HTMLDivElement>(null);

  const goTop = () => {
    slideElement.current?.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <div className="scroll-container" ref={slideElement}>
      <div className="title-anchors">
        <Link to={`/movie/${movie.id}`} className="casting-tile">
          <h1 className="hover">{movie.title}</h1>
        </Link>

        <ul className="fz2 anchor-list">
          <li>
            <a href="#cast">Casting</a>
          </li>
          <li>
            <a href="#crew">Crew</a>
          </li>
        </ul>
      </div>

      <h2 id="cast" className="casting--details__title fz2">
        Actors :
      </h2>
      <div className="casting--box details">
        {cast.map((cast) => {
          return (
            <div key={cast.id} className="flex casting--box__actors details">
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  className="casting--box__img details"
                />
              ) : (
                <img src={notFound} alt={cast.name} className="casting--box__img height details" />
              )}
              <p className="fz2">{cast.name}</p>
              <p className="casting--box__actors-role">Role: {cast.character}</p>
            </div>
          );
        })}
      </div>

      <h2 id="crew" className="casting--details__title fz2">
        Crew :
      </h2>
      <div className="casting--box details">
        {crew.map((crew) => {
          return (
            <div key={crew.credit_id} className="flex casting--box__actors details">
              {crew.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${crew.profile_path}`}
                  alt={crew.name}
                  className="casting--box__img details"
                />
              ) : (
                <img src={notFound} alt={crew.name} className="casting--box__img height details" />
              )}
              <p className="fz2">{crew.name}</p>
              <p className="casting--box__actors-role">Role: {crew.job}</p>
            </div>
          );
        })}
      </div>

      <div className="casting--icon">
        <button onClick={goTop} className="color-primary up-button hover">
          <FontAwesomeIcon icon={faArrowUpFromBracket} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default CastingDetails;
