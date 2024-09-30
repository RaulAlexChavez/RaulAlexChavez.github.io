import { Link } from "react-router-dom"
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const linkClasses = "no-link-nav d-flex nav-item align-items-center text-start";
  const textClasses = "hidden-text nav-item-text";
  const iconClasses = "nav-item-icon";
  return (
    <div>
      <div className="position-relative">
        <Link className={`${linkClasses}`} to="/">
          <p className={`${iconClasses} bi-house`}/><p className={`${textClasses}`}>{`Home`}</p>
        </Link>
      </div>
      <div><Link className={`${linkClasses}`} to="/dotnet">
        <p className={`${iconClasses} bi-microsoft`}/><p className={`${textClasses}`}>{`.NET`}</p>
      </Link></div>
      <div><Link className={`${linkClasses}`} to="/gamedev">
        <p className={`${iconClasses} bi-controller`}/><p className={`${textClasses}`}>{`Game Dev`}</p>
      </Link></div>
      <div><Link className={`${linkClasses}`} to="/webdev">
        <p className={`${iconClasses} bi-browser-chrome`}/><p className={`${textClasses}`}>{`Web Dev`}</p>
      </Link></div>
    </div>
  )
}
export default Navbar;