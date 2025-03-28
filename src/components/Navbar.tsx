import { Link, useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";
import "./Navbar.css";

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

enum NavbarSection {
  Home = 0,
  DotNet = 1,
  GameDev = 2,
  WebDev = 3,
  Tutoring = 4,
  AI = 5,
  Studies = 6,
  MoreSkills = 7,
  AboutMe = 8,
  Contact = 9
}

enum OnClickNavbarBehavior {
  ScrollToTop = 0,
  HandleScroll = 1,
}

interface NavbarItemProps {
  index: number;
  icon: string;
  text: string;
  link: string;
  dontTranslate?: boolean;
  onClickBehavior: OnClickNavbarBehavior;
  onClickGoHome?: boolean;
}

const Navbar = () => {
  const linkClasses = "no-link-nav d-flex nav-item align-items-center text-start";
  const textClasses = "hidden-text nav-item-text";
  const iconClasses = "nav-item-icon";
  const selectedItemStyle: React.CSSProperties = {color: "#1ddbc5"}

  const [selectedIndex, setSelectedIndex] = useState(NavbarSection.Home);
  
  const location = useLocation();

  useEffect(() => {
    if (selectedIndex === NavbarSection.Contact || selectedIndex === NavbarSection.Studies) {
      return;
    }
    switch (location.pathname) {
      case "/":
        setSelectedIndex(NavbarSection.Home);
        break;
      case "/dotnet":
        setSelectedIndex(NavbarSection.DotNet);
        break;
      case "/gamedev":
        setSelectedIndex(NavbarSection.GameDev);
        break;
      case "/webdev":
        setSelectedIndex(NavbarSection.WebDev);
        break;
      case "/tutoring":
        setSelectedIndex(NavbarSection.Tutoring);
        break;
      case "/ai":
        setSelectedIndex(NavbarSection.AI);
        break;
      default:
        break;
    }
  }, [location, selectedIndex]);

  const NavbarItem = (props: NavbarItemProps) : JSX.Element => {
    return (
      <div translate={props.dontTranslate ? "no" : "yes"}>
        <Link className={`${linkClasses}`} to={props.link}
          style={selectedIndex === props.index ? selectedItemStyle : {}}
          onClick={
            props.onClickBehavior === OnClickNavbarBehavior.ScrollToTop ?
            () => {setSelectedIndex(props.index); window.scrollTo(0, 0)} :
            (e) => {setSelectedIndex(props.index); handleScroll(e, props.text.toLowerCase(), !props.onClickGoHome)}
          }
        >
          <p className={`${iconClasses} ${props.icon}`}/><p className={`${textClasses}`}>{props.text}</p>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <NavbarItem
        index={NavbarSection.Home}
        icon="bi-house"
        text="Home"
        link="/"
        onClickBehavior={OnClickNavbarBehavior.ScrollToTop}
      />

      <NavbarItem
        index={NavbarSection.DotNet}
        icon="bi-microsoft"
        text=".NET"
        link="/dotnet"
        onClickBehavior={OnClickNavbarBehavior.ScrollToTop}
      />

      <NavbarItem
        index={NavbarSection.GameDev}
        icon="bi-controller"
        text="Game Dev"
        link="/gamedev"
        onClickBehavior={OnClickNavbarBehavior.ScrollToTop}
        dontTranslate
      />

      <NavbarItem
        index={NavbarSection.WebDev}
        icon="bi-browser-chrome"
        text="Web Dev"
        link="/webdev"
        onClickBehavior={OnClickNavbarBehavior.ScrollToTop}
        dontTranslate
      />

      <NavbarItem
        index={NavbarSection.Tutoring}
        icon="bi-book"
        text="Tutoring"
        link="/tutoring"
        onClickBehavior={OnClickNavbarBehavior.ScrollToTop}
      />

      <NavbarItem
        index={NavbarSection.AI}
        icon="bi-cpu-fill"
        text="AI"
        link="/ai"
        onClickBehavior={OnClickNavbarBehavior.ScrollToTop}
      />

      <NavbarItem
        index={NavbarSection.Studies}
        icon="bi-mortarboard-fill"
        text="Studies"
        link="/"
        onClickBehavior={OnClickNavbarBehavior.HandleScroll}
        onClickGoHome
      />

      <NavbarItem
        index={NavbarSection.Contact}
        icon="bi-telephone-fill"
        text="Contact"
        link="/"
        onClickBehavior={OnClickNavbarBehavior.HandleScroll}
      />
    </div>
  )
}
export default Navbar;