import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Meu Site</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="container">
        <Outlet /> {/* Renderiza as páginas filhas aqui */}
      </div>
      <footer>
        <p>© 2024 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;