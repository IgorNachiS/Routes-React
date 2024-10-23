import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
      <h1>BioShock: Explorando as Profundezas e os Céus</h1>
      <p>Uma jornada pelos mundos de Rapture e Columbia</p>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="container">
        <Outlet /> 
      </div>
      <footer>
        <p>There is always a lighthouse, there's always a man, there's always a city.</p>
      </footer>
    </div>
  );
};

export default Layout;