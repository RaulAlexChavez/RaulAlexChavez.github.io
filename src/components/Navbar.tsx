import { Link } from "react-router-dom"
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const linkClasses = "no-link-nav d-flex nav-item align-items-center text-start";
  const textClasses = "hidden-text nav-item-text";
  const iconClasses = "nav-item-icon";

  const handleScroll = (e:any, id:string, noDouble?: boolean) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (noDouble) {
          e.preventDefault();
          return;
      } 
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        };
      }, 300);
  };

  // (e) => handleScroll(e, "contact")

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

      <div><Link className={`${linkClasses}`} to="/" onClick={(e) => handleScroll(e, "studies")}>
        <p className={`${iconClasses} bi-mortarboard-fill`}/><p className={`${textClasses}`}>{`Studies`}</p>
      </Link></div>
      {/* <div><Link className={`${linkClasses}`} to="/" onClick={(e) => handleScroll(e, "more-skills")}>
        <p className={`${iconClasses} bi-laptop`}/><p className={`${textClasses}`}>{`More Skills`}</p>
      </Link></div>
      <div><Link className={`${linkClasses}`} to="/" onClick={(e) => handleScroll(e, "about-me")}>
        <p className={`${iconClasses} bi-stars`}/><p className={`${textClasses}`}>{`About Me`}</p>
      </Link></div> */}
      <div><Link className={`${linkClasses}`} to="/" onClick={(e) => handleScroll(e, "contact", true)}>
        <p className={`${iconClasses} bi-telephone-fill`}/><p className={`${textClasses}`}>{`Contact`}</p>
      </Link></div>
    </div>
  )
}
export default Navbar;