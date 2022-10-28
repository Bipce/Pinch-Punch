import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-search-container">
      <nav className="navbar-container">
        <div className="navbar-info">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} size="2x" className="ml2" />
          </Link>
          <h1>Pinch Punch</h1>
          <FontAwesomeIcon icon={faUser} size="2x" className="mr2" />
        </div>
      </nav>

      <div className="search-bar">
        <label htmlFor="serch__movie" />
        <input id="search-bar__input" type="text" placeholder="Movie" className="btn"></input>
        <button className="btn search-bar__btn">
          <FontAwesomeIcon className="loop-icon" icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
