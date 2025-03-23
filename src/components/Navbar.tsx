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
        <Link className={`${linkClasses}`} to="/" onClick={() => window.scrollTo(0, 0)}>
          <p className={`${iconClasses} bi-house`}/><p className={`${textClasses}`}>{`Home`}</p>
        </Link>
      </div>
      <div><Link className={`${linkClasses}`} to="/dotnet" onClick={() => window.scrollTo(0, 0)}>
        <p className={`${iconClasses} bi-microsoft`}/><p className={`${textClasses}`}>{`.NET`}</p>
      </Link></div>
      <div><Link className={`${linkClasses}`} to="/gamedev" onClick={() => window.scrollTo(0, 0)}>
        <p className={`${iconClasses} bi-controller`}/><p className={`${textClasses}`}>{`Game Dev`}</p>
      </Link></div>
      <div><Link className={`${linkClasses}`} to="/webdev" onClick={() => window.scrollTo(0, 0)}>
        <p className={`${iconClasses} bi-browser-chrome`}/><p className={`${textClasses}`}>{`Web Dev`}</p>
      </Link></div>
    </div>
  )
}
export default Navbar;