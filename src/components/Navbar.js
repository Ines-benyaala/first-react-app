import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li> <Link to="/"  className="Navbar-link">Home</Link> </li>
        <li> <Link to="/products" id='link'>Products</Link> </li>
        <li>Contact us</li>
        <li>About us</li>
      </ul>
    
    </div>
  );
}

export default Navbar;
