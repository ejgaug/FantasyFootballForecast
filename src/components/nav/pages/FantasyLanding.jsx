import { Col, Container, Modal, Row, Button, CloseButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactGA from 'react-ga';
ReactGA.initialize('G-CE4KYHDZN3');
import fff3 from '../../../assets/Fantasy Football Forecaster 3.svg'

export default function FantasyLanding(props) {

    const [width, setWidth] = useState(window.innerWidth);
    const [modalVisible, setModalVisible] = useState(true);

    const columnFormat = {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        margin: '0px',
    };
    const headerStyle = {
        paddingTop: '0px',
        fontSize: '40px',
        color: '#eFeFeF',
        marginTop: '60px'
    };
    const welcomeText = {
        width: '85%',
        color: '#eFeFeF',
        paddingBottom: '20px'
    };
    const pukaText = {
        width: '95%',
        color: '#eFeFeF',
        fontSize: '15px'
    };
    const playerImage = {
        width: '100%',
        height: 'auto', 
        marginBottom: '5px',
        
    };
    const modalStyle = {
        borderRadius: '20px',
    };

    useEffect(() => {
        // Set custom page title for Google Analytics tracking
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, []);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const closeModal = () => {
        setModalVisible(false);
    };

    const screenCutOff = 767;

    return <div>
        <br/>
        <Container fluid={true}>
            <Row style={{ ...columnFormat, gridTemplateColumns: width > screenCutOff ? '60% 40%' : '1fr'}}>
                <Col style={{ ...welcomeText, width: width > screenCutOff ? '85%' : '100%'}}> 
                    <h1 className="headerFont" style={headerStyle}>elcome to The Fantasy Football Forecast 2024!</h1>
                    <p style={{fontSize: '15px'}}> 
                        Here you can get free access to rookie analysis to prepare you for your fantasy football drafts. The site is currently being updated 
                        with our post-draft analysis and player rankings. As the NFL and prospect landscape changes, so will The Forecast.
                    </p>
                    <p style={{fontSize: '15px'}}> 
                        Check out the Draft Rankings page to see how we'd draft a 3-round rookie draft for dynasty leagues today. This includes rankings 
                        for the 4 primary league formats (1-QB PPR, 2-QB PPR, 1-QB Non-PPR, and 2-QB Non-PPR). You can also build your own rankings to prepare for 
                        your draft. Keep in mind that for shallower leagues, high upside is more valuable than a solid floor. 
                    </p>
                    <p style={{fontSize: '15px'}}>
                        For more in-depth analysis on each of these players, take a look at the Rookie Preview tab. Here you'll find a player analysis 
                        as well relevant statistics from the 2023 season and the most predictive combine measurements of NFL success for that position.
                        If there is a "N/A" on a player's profile, this means that there wasn't a measurement for that statistic at the time of 
                        the last update. 
                    </p>
                    <p style={{fontSize: '15px'}}> 
                        The Landing Spots page gives a rankings format to how we'd feel if a player of a given position landed on a specific
                        NFL roster. This is based on team need for that position and the overall production that could be seen in that offense.
                    </p>
                    {/* <img 
                        src={fff3}
                        alt="Fantasy Forecast Football Snow Mounds"
                        style={{ width: '400px', height: 'auto', marginLeft: '50%', marginRight: '50%'}}
                    /> */}
                </Col>
                <Col> 
                    <img
                        src="https://s.yimg.com/ny/api/res/1.2/tUBPfX5faZYJL557_NyQwQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ0OQ--/https://media.zenfs.com/en/los_angeles_rams_wire_usa_today_sports_articles_716/f99a8d638d47d78eda2a5dbac0117fe6"
                        alt="Picture of Kyren Williams and Puka Nacua"
                        style={{ ...playerImage, paddingTop: width > screenCutOff ? '69px' : '40px', borderTop: width > screenCutOff ? '' : '0.01rem solid lightgray'}}
                    />
                    <p style={pukaText}>
                        Our two greatest successes this past year were using our last two roster spots on Puka Nacua and Kyren Williams in 
                        an eight-team dynasty league. They helped make our extremely young team into a contender.
                    </p>
                </Col>
            </Row> 
        </Container>

        <Modal 
            show={modalVisible} 
            onHide={closeModal} 
            centered
            contentClassName="rounded-4"
        >
            <Modal.Header closeButton={false} style={{ border: 'none', backgroundColor: '#1F1F1F', color: '#bFbFbF'}}>
                <Modal.Title>2025 Update Notice</Modal.Title>
                <CloseButton  variant="white" onClick={closeModal}/>
            </Modal.Header>
            <Modal.Body className="text-center py-4" style={{backgroundColor: '#1F1F1F', color: '#bFbFbF'}}>
                <h4>We're sorry!</h4>
                <p>
                    The Fantasy Football Forecast has not yet been updated for the 2025 class.
                    We're currently working on analyzing the new prospects and updating our rankings.
                </p>
                <p>
                    Please check back soon for our 2025 rookie rankings and analysis.
                </p>
            </Modal.Body>
            <Modal.Footer style={{ border: 'none', backgroundColor: '#1F1F1F', color: '#bFbFbF' }}>
                <Button 
                    variant="outline-light" 
                    onClick={closeModal}
                    className="px-4 mx-auto"
                    style={{ 
                        backgroundColor: '#bFbFbF', 
                        color: '#1F1F1F',
                        borderColor: '#bFbFbF'
                    }}
                >
                    Got it
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}
// 1) edit logo -- same font as headers? 
// 2) maybe an image gallery like flexslider of multiple pics of my guys stories? would provide more interactivity and shtuff. see me for more ideas on this
// 3) reposition main logo so it's not stuck in the middle like dat 
// 4) maybe remove football piles IF you don't want them to look like poop piles