import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import fff2 from '../../assets/Fantasy Football Forecaster 2.svg'
import fff4 from '../../assets/Fantasy Football Forecaster 4.svg'
import { useEffect, useState } from "react";
import '../../slidingNavbar.css';

export default function FantasyNavbar(props) {

    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
           window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (open && !event.target.closest(".slide-menu") && !event.target.closest(".navbar-toggler")) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    const handleMenuItemClick = () => {
        setOpen(false);
        // Additional logic for handling menu item clicks
    };
    
    return (
        <div>
            <Navbar style={{width: '100%', height: '70px', backgroundColor: 'green', position: 'fixed'}} variant="dark" sticky="top" expand="md" collapseOnSelect>    
                {(width > 767) ? (
                    <Container>
                        <Navbar.Brand as={NavLink} activeclassname="activeLink" to="/">
                            <img
                                alt="Fantasy Forecast Logo"
                                src={fff2}
                                style={{ width: '110px', height: '95px', marginRight: '25px' }}
                            />{' '}
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                            <Nav>
                                <Nav.Link className="headerFont" style={{ fontSize: '25px', marginRight: '16px' }} as={NavLink} to="/" activeclassname="activeLink" onClick={handleMenuItemClick}>
                                    Home
                                </Nav.Link>
                                <Nav.Link className="headerFont" style={{ fontSize: '25px', marginRight: '16px' }} as={NavLink} to="/draft-rankings" activeclassname="activeLink" onClick={handleMenuItemClick}>
                                    Draft Rankings
                                </Nav.Link>
                                <Nav.Link className="headerFont" style={{ fontSize: '25px', marginRight: '16px' }} as={NavLink} to="/rookie-preview" activeclassname="activeLink" onClick={handleMenuItemClick}>
                                    Rookie Preview
                                </Nav.Link>
                                {/* <Nav.Link className="headerFont" style={{ fontSize: '25px', marginRight: '16px' }} as={NavLink} to="/landing-spots" activeclassname="activeLink" onClick={handleMenuItemClick}>
                                    Landing Spots
                                </Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                ) : (
                    <Col style={{ marginTop: '0px', paddingTop: '0px'}}>
                        <div className="d-flex justify-content-between align-items-start" style={{ width: '100%' }}>
                            <Navbar.Toggle onClick={() => setOpen(!open)} aria-controls="responsive-navbar-nav" style={{ marginTop: '6px', marginLeft: '12px' }}/>
                            <Navbar.Brand as={NavLink} activeclassname="activeLink" to="/" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '0px' }}>
                                <img
                                    alt="Fantasy Forecast Logo"
                                    src={fff4}
                                    style={{ width: '90px', height: 'auto' }}
                                />
                            </Navbar.Brand>
                            <div className={`slide-menu ${open ? 'open' : ''}`} style={{paddingLeft: '0px'}}>
                                <nav className="headerFont">
                                    <Link to="/" onClick={handleMenuItemClick}>Home</Link>
                                    <Link to="/draft-rankings" onClick={handleMenuItemClick}>Draft Rankings</Link>
                                    <Link to="/rookie-preview" onClick={handleMenuItemClick}>Rookie Preview</Link>
                                    <Link to="/landing-spots" onClick={handleMenuItemClick}>Landing Spots</Link>
                                </nav>
                            </div>
                        </div>
                    </Col>
                )}  
            </Navbar>
        </div>
    );
}



