import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';     

const Navigationbar = () => {
    return (
       <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Truck Tracking</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/truckPage/">TruckPage</Nav.Link>
            <Nav.Link as={Link} to="/mapPage/">MapPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </>
    );
}

export default Navigationbar;
