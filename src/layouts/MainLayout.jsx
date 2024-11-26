import { Link, NavLink, Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="container">
      <header className="header">
        <Link to='/'>
        <img src="teamBlogo.png" alt="Logo" className="logo" />
        </Link>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>
            <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/products"> Products </NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact </NavLink>
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        {" "}
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
