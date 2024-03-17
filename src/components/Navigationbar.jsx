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
          <Navbar.Brand href="/home">Truck Tracking</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/truckPage">TruckPage</Nav.Link>
            <Nav.Link href="/mapPage">MapPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </>
    );
}


export default Navigationbar;