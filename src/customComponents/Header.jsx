import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
    return (
        <>
            <Navbar fixed="top" expand="md" className="bg-body-tertiary custom-navbar">
                <Container>
                    <Navbar.Brand href="/">AD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='custom-nav-links'>
                        <Nav className="me-auto">
                            <Nav.Link href="#Skills">Skills</Nav.Link>
                            <Nav.Link href="#Education">Education</Nav.Link>
                            <Nav.Link href="#Projects">Projects</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                            <Button variant="primary" to="#">Download Resume</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Header