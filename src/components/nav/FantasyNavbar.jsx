
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import fff2 from '../../assets/Fantasy Football Forecaster 2.svg'
import { useEffect, useState } from "react";

export default function FantasyNavbar(props) {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
    }, []);

    return (
        <Navbar style={{width: '100%', height: '65px', backgroundColor: 'green' }} variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                
                {(width > 575) ? (
                    <Navbar.Brand as={NavLink} activeclassname="activeLink" to="/">
                        <img
                            alt="Fantasy Forecaster Logo"
                            src={fff2}
                            style={{ width: '110px', height: '95px', marginRight: '25px' }}
                        />{' '}
                    </Navbar.Brand>
                ) : (
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                )}
                
                <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                    <Nav>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/" activeclassname="activeLink">
                            Home
                        </Nav.Link>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/draft-rankings" activeclassname="activeLink">
                            Draft Rankings
                        </Nav.Link>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/rookie-preview" activeclassname="activeLink">
                            Rookie Preview
                        </Nav.Link>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/landing-spots" activeclassname="activeLink">
                            Landing Spots
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
