import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-search-container">
      <nav className="navbar-container bg-primary">
        <div className="navbar-info flex-center mlr2">
          <Link to="/">
            <h1 className="navbar-info__title">
              <FontAwesomeIcon icon={faVideoCamera} className="navbar-info__icon" />
              Pinch Punch
            </h1>
          </Link>

          <div className="search-bar flex-center">
            <label htmlFor="serch__movie" />
            <input id="search-bar__input" type="text" placeholder="Movie" className="btn bg-tertiary "></input>
            <button className="btn search-bar__btn bg-tertiary color-primary">
              <FontAwesomeIcon className="loop-icon" icon={faMagnifyingGlass} />
            </button>
          </div>

          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
