import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./MovieList.css";

const MovieList = () => {
  return (
    <div className="main">
      <div className="search-sort flex-row">
        <div className="search center">
          <input
            id="search__movie"
            type="text"
            placeholder="Movie"
            className="btn fs-text bkg-primary "
          />
          <button className="btn bkg-dark fs-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <select className="sort-select">
          <option></option>
        </select>
      </div>

      <div>
        <div>
          <h2 className="second-title">Horreur :</h2>
          {/* Movie */}
          {/* Movie */}
          {/* Movie */}
        </div>
        <h2 className="second-title">Action :</h2>
        {/* Movie */}
        {/* Movie */}
        {/* Movie */}
      </div>
    </div>
  );
};

export default MovieList;
