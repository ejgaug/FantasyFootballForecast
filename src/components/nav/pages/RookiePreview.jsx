import { Button, Card, CardFooter, Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import { playerInfo, ppr1QB, ppr2QB, nPpr1QB, nPpr2QB } from "../../../rankings_2025";
import footballL from '../../../assets/Fantasy Football Forecaster Football Left.svg';
import footballR from '../../../assets/Fantasy Football Forecaster Football Right.svg';
import ReactGA from 'react-ga';
ReactGA.initialize('G-CE4KYHDZN3');

export default function RookiePreview(props) {

    const [playerStates, setPlayerStates] = useState({});
    const [width, setWidth] = useState(window.innerWidth);

    const toggleAnalysis = (playerName) => {
        setPlayerStates((prevState) => ({
            ...prevState,
            [playerName]: !prevState[playerName],
        }));
    };
    
    const trackButtonClick = (playerName) => {
        // console.log(playerName);
        ReactGA.event({
            category: 'Button Click',
            action: 'Show Analysis Button Clicked', // Event action
            label: playerName, // Event label
        });
    };

    useEffect(() => {
        // Set custom page title for Google Analytics tracking
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, []);

    const description = {
        textAlign: 'center',
        marginBottom: '11px',
        color: '#eFeFeF',
    };
    const modalBelowText = {
        margin: '5px',
        fontSize: '14.2px'
    };
    const lastEdited = {
        textAlign: 'right',
        marginBottom: '1px',
        marginTop: '3px',
        fontSize: '12px',
        paddingRight: '7px', 
    };
    const metricsStyle = {
        display: 'grid',
        gridTemplateColumns: '48% 52%',
        gridGap: '5px',
        fontSize: '15.5px'
    };
    const analysisStyle = {
        margin: '5px',
        borderTop: '0.01rem solid lightgray',
        paddingTop: '10px',
        fontSize: '14px'
    };
    const imgCreditsStyle = {
        textAlign: 'right',
        fontSize: '10px',
        paddingRight: '8px',
        marginTop: '10px',
        marginBottom: '0px'
    }

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const screenCutOff = 767;

    function getPreDraftRank(selectedPlayer) {
        
        return (parseInt(selectedPlayer.preDraftRank['ppr1QB']) + parseInt(selectedPlayer.preDraftRank['ppr2QB']) + parseInt(selectedPlayer.preDraftRank['nPpr1QB']) + parseInt(selectedPlayer.preDraftRank['nPpr2QB'])) / 4;
    }

    function WhichMetrics(selectedPlayer) {
        return <>
            <Row>
                <Col style={metricsStyle}>
                    <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                    <p style={modalBelowText}>Team: {selectedPlayer.nflTeam}</p>
                    <p style={modalBelowText}>Draft Age: {selectedPlayer.age}</p>
                    <p style={modalBelowText}>Draft Capital: {selectedPlayer.draftCap}</p>
                    <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                    <p style={modalBelowText}>Average Pre-Daft Rank: {getPreDraftRank(selectedPlayer)}</p>

                    {selectedPlayer.pos === "QB" && (
                        <>
                            <p style={modalBelowText}>Passing Yards: {selectedPlayer.passYrds}</p>
                            <p style={modalBelowText}>TD/INT: {selectedPlayer.td2Int}</p>
                            <p style={modalBelowText}>Completion %: {selectedPlayer.compPerc}</p>
                            <p style={modalBelowText}>Yards/Att: {selectedPlayer.yrdsPerAtt}</p>
                            <p style={modalBelowText}>Rushing: {selectedPlayer.rush}</p>
                            <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                        </>
                    )}
                    {selectedPlayer.pos === "RB" && (
                        <>
                            <p style={modalBelowText}>Rushing: {selectedPlayer.rushing}</p>
                            <p style={modalBelowText}>Yards/Rush: {selectedPlayer.ydsPerRush}</p>
                            <p style={modalBelowText}>Receptions: {selectedPlayer.recTdRec}</p>
                            <p style={modalBelowText}>Receiving Yards: {selectedPlayer.recYrds}</p>
                            <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                            {/* <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p> */}
                            <p style={modalBelowText}>Vertical: {selectedPlayer.vert}</p>
                        </>
                    )}
                    {(selectedPlayer.pos === "WR" || selectedPlayer.pos === "TE") && (
                        <>
                            <p style={modalBelowText}>Receptions: {selectedPlayer.recTdRec}</p>
                            <p style={modalBelowText}>Receiving Yards: {selectedPlayer.recYrds}</p>
                            <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                            <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p>
                            <p style={modalBelowText}>Broad Jump: {selectedPlayer.broadJump}</p>
                            <p style={modalBelowText}>Vertical: {selectedPlayer.vert}</p>
                        </>
                    )}
                    
                </Col>
            </Row>
            <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>
        </>
    }
    
    
    return <div>
        <Row>
            <h1 style={{textAlign: 'center', marginBottom: '0px', marginTop: '70px', color: '#eFeFeF'}} className="headerFont">
                <img
                    src={footballL} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginRight: '5px', marginBottom: '7px' }}  
                />
                Rookie Preview
                <img
                    src={footballR} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '7px' }}  
                />
            </h1> 
            <p style={{ ...description, 
                    paddingLeft: width > screenCutOff ? '100px' : '10px', 
                    paddingRight: width > screenCutOff ? '60px' : '10px',
                    fontSize: width > screenCutOff ? '15px' : '12px'
            }}>
                This is our full analysis on every player we see relevant in this years draft. Under each player's picture are their 2023 stats 
                and metrics most predictive of success for their position. Because this is every player we see relevant, there are a few deep 
                sleepers that won't be in the Draft Rankings. 
            </p>
            {playerInfo.map((player) => (
                <Col
                    xs={12}
                    md={6}
                    lg={4}
                    xxl={4}
                    key={player.name}
                >
                    <Card style={{margin: "0.4rem", borderRadius: "15px", borderColor: "black", backgroundColor: '#eFeFeF', marginBottom: '20px'}}  >
                        <img src={player.img} alt={"A picture of " + player.name} style={{margin: "0.35rem", borderRadius: "15px"}} />
                        <h3 style={{fontSize: "1.5rem", textAlign: "center"}} >{player.name}</h3>
                        <div>{WhichMetrics(player)}</div>
                        <div style={{margin: "0.35rem"}}> 
                            {playerStates[player.name] && (
                                    <>
                                        <p style={analysisStyle}> <b> Post-Draft Analysis: </b> <br/>{player.postDraftAnalysis}</p>
                                        <p style={analysisStyle}> <b> Pre-Draft Analysis: </b> <br/>{player.analysis}</p>

                                        <p style={lastEdited}>Last Edited: {player.lastEditTime}</p>
                                    </>
                            )}
                        </div>
                        <CardFooter>
                            <Button variant="success" onClick={() => {
                                    toggleAnalysis(player.name); 
                                    trackButtonClick(player.name);
                                }}>
                                    {playerStates[player.name] ? "Hide Analysis" : "Show Analysis"}
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
}