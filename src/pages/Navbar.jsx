import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Discover</a></li>
        <li><a href="/">My library</a></li>
        <li><a href ="/">More</a></li>
        <li><input type="text" placeholder="Search..." className="search-bar" /></li>
        <li><a href="/cart">Your Cart</a></li>
        <li><a href ="/">Sign in</a></li>
      </ul>
    </nav>
  );
}