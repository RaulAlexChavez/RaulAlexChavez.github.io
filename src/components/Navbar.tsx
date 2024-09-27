import { Link } from "react-router-dom"
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=""><Link to="/">Home</Link></div>
      <div className=""><Link to="/dotnet">.Net</Link></div>
      <div className=""><Link to="/gamedev">Game Dev</Link></div>
    </div>
  )
}
export default Navbar;