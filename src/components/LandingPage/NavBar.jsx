import Button from "../Button";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import classNames from "classnames";

function NavBar() {
  let [showNavBar, setShowNavBar] = useState(false);

  const handleClick = () => {
    setShowNavBar((prevValue) => !prevValue);
  };

  return (
    <nav>
      <div className="text-white p-2 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-3xl p-1">FantasyCrypto</p>
        </div>
        <div className="sm:hidden" onClick={handleClick}>
          <FiMenu className="text-white h-10 w-16 p-0" />
        </div>
        <div className="gap-3 flex  justify-center max-sm:hidden">
          <div>
            <p className="text-2xl pt-1 text-white">Home</p>
          </div>

          <div>
            <Link to="/dashboard">
              <Button primary>Log In</Button>
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              <Button secondary>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>

      {showNavBar && (
        <div className="gap-3 flex  justify-center sm:p-2 sm:hidden">
          <div>
            <p className="text-2xl pt-1 text-white">Home</p>
          </div>

          <div>
            <Link to="/dashboard">
              <Button primary>Log In</Button>
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              <Button secondary>Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
