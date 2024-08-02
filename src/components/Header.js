import { Link } from "react-router-dom";
import { HEADER_LOGO, LOCATION_LOGO } from "../utils/constants";

export const Header = () => {
  return (
    <div className="nav-header">
      <div className="header">
        <div className="header-container">
          <img className="app-logo" src={HEADER_LOGO} />
          <img className="location" src={LOCATION_LOGO} />
        </div>
        <div className="nav-paths">
          <ul>
            <li>Home</li>
            <li>Sign In</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
