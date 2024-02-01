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
            if (open && !event.target.closest(".slide-menu")) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleMenuItemClick = () => {
        setOpen(false);
        // Additional logic for handling menu item clicks
    };
    
    return (
        <Navbar style={{width: '100%', height: '70px', backgroundColor: 'green' }} variant="dark" sticky="top" expand="md" collapseOnSelect>
            <Container>
                
                {(width > 767) ? (
                    <Navbar.Brand as={NavLink} activeclassname="activeLink" to="/">
                        <img
                            alt="Fantasy Forecast Logo"
                            src={fff2}
                            style={{ width: '110px', height: '95px', marginRight: '25px' }}
                        />{' '}
                    </Navbar.Brand>
                ) : (
                    <Col style={{ marginTop: '0px', paddingTop: '0px'}}>
                        <div className="d-flex justify-content-between align-items-start" style={{ width: '100%' }}>
                            <Navbar.Toggle onClick={() => setOpen(!open)} aria-controls="responsive-navbar-nav" style={{ marginTop: '6px' }}/>
                            <Navbar.Brand as={NavLink} activeclassname="activeLink" to="/" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '0px' }}>
                                <img
                                    alt="Fantasy Forecast Logo"
                                    src={fff4}
                                    style={{ width: '90px', height: 'auto' }}
                                />
                            </Navbar.Brand>
                        </div>
                    </Col>
                )}
                
                <div className={`slide-menu ${open ? 'open' : ''}`} style={{paddingLeft: '12px'}}>
                    <Nav>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/" activeclassname="activeLink" onClick={handleMenuItemClick}>
                            Home
                        </Nav.Link>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/draft-rankings" activeclassname="activeLink" onClick={handleMenuItemClick}>
                            Draft Rankings
                        </Nav.Link>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/rookie-preview" activeclassname="activeLink" onClick={handleMenuItemClick}>
                            Rookie Preview
                        </Nav.Link>
                        <Nav.Link className="headerFont" style={{fontSize: '25px', marginRight: '16px'}} as={NavLink} to="/landing-spots" activeclassname="activeLink" onClick={handleMenuItemClick}>
                            Landing Spots
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}
