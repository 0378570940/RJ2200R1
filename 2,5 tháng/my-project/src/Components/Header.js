import { Link } from "react-router-dom";
import routes from "../commons/routers";
function Header() {
  return (
    <header>
      <nav class="nav bg-dark">
        {
          routes.map((item) => {
            return (
              <Link class="nav-link" to={item.path} key={item.name}>{item.name}</Link>
            )
          })
        }
        {/* <Link className="nav-link" to="/home">Home</Link >
        <Link className="nav-link" to="/Topic">Topic</Link >
        <Link className="nav-link" to="/product">product</Link >
        <Link className="nav-link" to="/products">products</Link > */}
      </nav>
    </header>
  );
}
export default Header;
