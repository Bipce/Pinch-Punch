import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bkg-primary navbar ">
      <div className="flex-row flex-beet">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} size="2x" className="ml2" />
        </Link>
        <h1>Pinch Punch</h1>
        <FontAwesomeIcon icon={faUser} size="2x" className="mr2" />
      </div>
    </nav>
  );
};

export default Navbar;
