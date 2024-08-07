import { Link } from "react-router-dom";
import { LOCATION_LOGO } from "../utils/constants";
import logo from "../assets/logo.png";
import { useState } from "react";
import SignIn from "./SignIn";

export const Header = () => {
  const [signIn, setSignIn] = useState(false);

  const handleOpen = () => {
    setSignIn(true);
  };
  const handleClose = () => {
    setSignIn(false);
  };
  return (
    <div className="sticky top-0 z-[1000] bg-white p-2 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img className="rounded-full w-16 h-16" src={logo} />
          <img className=" w-8 h-8 ml-4" src={LOCATION_LOGO} />
        </div>
        <div>
          <ul className="flex m-0 p-0">
            <Link className="no-underline" to="/">
              <li className="p-5">Home</li>
            </Link>
            <li className="p-5">
              <button className="no-underline" onClick={handleOpen}>Sign In</button>
            </li>
            <Link className="no-underline">
              <li className="p-5">Cart</li>
            </Link>
          </ul>
        </div>
        <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] transition-opacity duration-300 ${
          signIn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose} // Optionally close the panel when clicking outside
      />

      {/* Sign-in panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          signIn ? "translate-x-0" : "translate-x-full"
        } w-4/12 z-[1000]`}
      >
        <SignIn handleClose={handleClose} />
      </div>
      </div>
    </div>
  );
};
export default Header;
