import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NCNavbar() {
    return (
        <>
            <Navbar expand="lg" id="navbar">
                <Container>
                    <Navbar.Brand href="/">NC News</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NCNavbar;
