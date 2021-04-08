import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { deconnexion } from "../redux/authReducer";

function NavBar(props) {
  const { pathname } = useLocation();
  const connected = useSelector((state) => state.auth.connected);
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>TODO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link active={pathname === "/"} as="nav">
              To DO
            </Nav.Link>
          </Link>
          {connected ? (
            <Nav.Link onClick={() => dispatch(deconnexion())}>
              Deconnexion
            </Nav.Link>
          ) : (
            <Link to="/connexion">
              <Nav.Link active={pathname === "/connexion"}>Connexion</Nav.Link>{" "}
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
