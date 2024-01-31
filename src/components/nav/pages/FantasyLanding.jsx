import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import fff3 from '../../../assets/Fantasy Football Forecaster 3.svg'

export default function FantasyLanding(props) {

    const [width, setWidth] = useState(window.innerWidth);

    const columnFormat = {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        margin: '0px',
    };
    const headerStyle = {
        paddingTop: '0px',
        fontSize: '40px',
        color: '#eFeFeF',
        marginTop: '0px'
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
        
    }

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return <div>
        <br/>
        <Container fluid={true}>
            <Row style={{ ...columnFormat, gridTemplateColumns: width > 768.14 ? '60% 40%' : '1fr'}}>
                <Col style={{ ...welcomeText, width: width > 768.14 ? '85%' : '100%'}}> {/* xs={12} sm={12} med={12} lg={6} xl={6} */}
                    <h1 className="headerFont" style={headerStyle}>Welcome to The Fantasy Football Forecast!</h1>
                    <p style={{fontSize: '15px'}}> Here you can get free access to rookie analysis to prepare you for your fantasy football drafts. </p>
                    <p style={{fontSize: '15px'}}> 
                        Checkout the Draft Rankings page to see how we'd draft a 3-round rookie class for dynasty fantasy football leagues 
                        if it were to happen today. This includes rankings for 4 major league formats (1-QB PPR, 2-QB PPR, 1-QB Non-PPR, and 2-QB Non-PPR).
                        Clicking on a position or university will give you filtered rankings that can be canceled using the "reset" button. Also, try 
                        clicking on a player's name to get some more information.     
                    </p>
                    <p style={{fontSize: '15px'}}>
                        For more in-depth analysis on each of these players, take a look at the Rookie Preview tab. Here you'll find a player analysis 
                        as well relevant statistics from the 2023 season and the most predictive combine measurements of NFL success for that position.
                        This also includes a few deep sleepers that won't be in the Draft Rankings for those deeper leauges and empty roster spots. 
                    </p>
                    <p style={{fontSize: '15px'}}> 
                        The Landing Spots page gives rankings format to how I'd feel if a player of a given position landed on any NFL roster.
                        This is based on team need for that position and the overall production that could be seen in that offense. Similar to the Draft 
                        Rankings page, a brief analysis of the grade and ranking of each landing spot can be found by clicking on the team name.
                    </p>
                    {/* <img 
                        src={fff3}
                        alt="Fantasy Forecast Football Snow Mounds"
                        style={{ width: '400px', height: 'auto', marginLeft: '50%', marginRight: '50%'}}
                    /> */}
                </Col>
                <Col> {/* xs={12} sm={12} med={12} lg={6} xl={6} */}
                    <img
                        src="https://s.yimg.com/ny/api/res/1.2/tUBPfX5faZYJL557_NyQwQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ0OQ--/https://media.zenfs.com/en/los_angeles_rams_wire_usa_today_sports_articles_716/f99a8d638d47d78eda2a5dbac0117fe6"
                        alt="Picture of Kyren Williams and Puka Nacua"
                        style={{ ...playerImage, paddingTop: width > 768.14 ? '100px' : '40px', borderTop: width > 768.14 ? '' : '0.01rem solid lightgray'}}
                    />
                    <p style={pukaText}>
                        Our two greatest successess this past year were using our last two roster spots on Puka Nacua and Kyren Williams in 
                        an eight-team dynasty league. They helped make our extremely young team into a contender.
                    </p>
                </Col>
            </Row> 
        </Container>
    </div>
}
// 1) edit logo -- same font as headers? 
// 2) maybe an image gallery like flexslider of multiple pics of success stories? would provide more interactivity and shtuff. see me for more ideas on this
// 3) reposition main logo so it's not stuck in the middle like dat 
// 4) maybe remove football piles IF you don't want them to look like poop piles