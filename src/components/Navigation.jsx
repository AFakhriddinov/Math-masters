import '../App.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <h1>Math Masters</h1>
    <ul className="nav-ul">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quotes">Quotes</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
