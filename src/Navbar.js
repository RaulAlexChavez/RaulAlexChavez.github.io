import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/dotnet">.Net</Link>
                  <Link to="/gamedev">Game Dev</Link>
            </div>
      )
}
export default Navbar;