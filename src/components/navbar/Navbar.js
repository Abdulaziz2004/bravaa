import { Container } from "../../Wrapper";
import { Nav } from "./Navbar.styled";

function Navbar() {
  return (
    <Nav>
      <Container>
        <div className="navigation">
          <div className="nav-logo">
            <a href="#">
              Bra<span>Vaa</span>
            </a>
          </div>

          <div className="nav-links">
            <a style={{ textDecoration: "underline" }} href="#">
              Home
            </a>
            <a href="#">About Us </a>
            <a href="#">Service</a>
          </div>
        </div>
      </Container>
    </Nav>
  );
}

export default Navbar;
