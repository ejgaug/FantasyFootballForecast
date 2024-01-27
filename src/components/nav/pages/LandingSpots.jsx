import { Button, Card, CardFooter, Col, Row, Modal } from "react-bootstrap";
import React, { useState } from "react";

import { playerInfo, nflTeams } from "../../../rankings";
import footballL from '../../../assets/Fantasy Football Forecaster Football Left.svg';
import footballR from '../../../assets/Fantasy Football Forecaster Football Right.svg';

export default function LandingSpots(props) {

    const [teamStates, setTeamStates] = useState({});
    const [isHovering, setIsHovering] = useState(null);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [selectedPos, setSelectedPos] = useState(null);

    // const toggleAnalysis = (teamMascot) => {
    //     setTeamStates((prevState) => ({
    //         ...prevState,
    //         [teamMascot]: !prevState[teamMascot],
    //     }));
    // };

    const analysisStyle = {
        margin: '5px',
        borderTop: '0.01rem solid lightgray',
        paddingTop: '10px',
        fontSize: '14px'
    };
    const rankedItems = {
        justifyContent: 'center',  // Center horizontally
        borderBottom: '1.5px dotted #000',
        marginTop: '0px',
        marginBottom: '0px',
        padding: '2px',
        display: 'grid',
        gridTemplateColumns: '8% 42% 10% 40%',
        fontSize: '13px'
    };
    const rankNum = {
        paddingRight: '2px',
        fontWeight: 'bold',
        textAlign: 'center'
    };
    const teamName = {
        borderLeft: '1.5px dotted #000',
        paddingRight: '2px',
        paddingLeft: '2px',
        cursor: 'pointer',
    };
    const teamGrade = {
        borderLeft: '1.5px dotted #000',
        paddingRight: '2px',
        paddingLeft: '2px',
        textAlign: 'center',
        // cursor: 'pointer',
    };
    const teamDivision = {
        borderLeft: '1.5px dotted #000',
        paddingRight: '2px',
        paddingLeft: '2px',
        // cursor: 'pointer',
    };
    const modalAnalysis = {
        marginTop: '4px',
        borderTop: '0.01rem solid lightgray',
        fontSize: '14px',
        paddingTop: '3px',
        // color: '#DEAB2A'
    };
    const modalRank = {        
        marginTop: '10px',
        borderTop: '0.01rem solid lightgray',
        fontSize: '14px',
        paddingTop: '3px',
        marginBottom: '0px'
        // color: '#DEAB2A'
    };
    const modalPPG = {        
        fontSize: '14px',
        marginBottom: '0px',
        marginTop: '0px'
        // color: '#DEAB2A'
    };
    const modalGrade = {
        fontSize: '14px',
        marginBottom: '0px'
        // color: '#DEAB2A'
    };
    const lastEdited = {
        textAlign: 'right',
        marginBottom: '1px',
        marginTop: '1px',
        paddingTop: '1px',
        fontSize: '12px',
        color: '#C79A25'
    };

    const handleCloseModal = () => {
        setShowTeamModal(false);
    };

    const openTeamModal = (selectedTeam, pos) => {
        nflTeams.forEach((team) => {
            if (team.mascot === selectedTeam.mascot) {
                // console.log(team.mascot);
                setSelectedTeam(team);
                setSelectedPos(pos)
            }
        });
        setShowTeamModal(true);
    };

    function position(pos) {
        if (pos === 'QB') {return 'Quarterback';}
        if (pos === 'RB') {return 'Running Back';}
        if (pos === 'WR') {return 'Wide Receiver';}
        if (pos === 'TE') {return 'Tight End';}
    }

    function rankTeams(pos) {
        return nflTeams.sort((teamA, teamB) => teamA.posLandingRank[pos] - teamB.posLandingRank[pos]);;
    }

    function TeamModal(team) {
        return <>
            <div style={{paddingLeft: '120px', paddingRight: '120px'}}>
                <img 
                    src={team.logoUrl}
                    alt={team.mascot + "logo"}
                    style={{ width: '100%', height: '150px', borderRadius: '8px', marginBottom: '5px', }}
                />
            </div>
            {/* {console.log(selectedTeam.posLandingAnalysis['QB'])} */}
            <p style={{ ...modalRank, color: team.secCol }}>Positional Landing Spot Rank: {team.posLandingRank[selectedPos]}</p>
            <p style={{ ...modalGrade, color: team.secCol }}>Positional Landing Spot Grade: {team.posLandingGrade[selectedPos]}</p>
            <p style={{ ...modalPPG, color: team.secCol }}>2023 Points Per Game: {team.ppg}</p>
            <p style={{ ...modalAnalysis, color: team.secCol }}>
                {team.posLandingAnalysis[selectedPos]}
            </p>
            <p style={{ ...lastEdited, color: team.secCol}}>Last Edited: {team.lastEditTime}</p>
        </>
    }
    
    function generateCard(pos) {
        return (
            <Col
                xs={6}
                md={6}
                lg={3}
                xxl={3}
                key={pos}
            >
            <Card style={{ borderRadius: '8px', borderWidth: '5px', borderColor: 'black', backgroundColor: '#eFeFeF', marginBottom: '40px' }}>
                <h6 style={{ marginTop: '3px', borderBottom: '5px solid #000', paddingBottom: '3px', marginBottom: '0px', textAlign: 'center' }}>Top {position(pos)} Landing Spots</h6>
                    {rankTeams(pos).map(team => (
                        <Col key={team.mascot}>
                            <p style={rankedItems}>
                                <span style={rankNum}>{team.posLandingRank[pos]}</span>
                                <span
                                    style={{
                                        ...teamName,
                                        fontWeight: isHovering === team.mascot ? 'bold' : 'normal',
                                    }}
                                    onClick={() => {setSelectedTeam(team); setSelectedPos(pos); openTeamModal(team, pos)}}
                                    onMouseOver={() => setIsHovering(team.mascot)}
                                    onMouseOut={() => setIsHovering(null)}>
                                        {team.mascot}
                                </span>
                                <span style={teamGrade}>
                                        {team.posLandingGrade[pos]}
                                </span>
                                <span
                                    style={{
                                        ...teamDivision,
                                        fontWeight: isHovering === team.division ? 'bold' : 'normal',
                                    }}
                                    // onClick={() => openTeamModal(team)}
                                    onMouseOver={() => setIsHovering(team.division)}
                                    onMouseOut={() => setIsHovering(null)}>
                                        {team.division}
                                </span>
                            </p>
                        </Col>
                    ))}
                </Card>
            </Col>
        );
    }

    function modalFormat() {
        return <Modal show={showTeamModal} onHide={handleCloseModal}>
            <Modal.Header closeButton style={{backgroundColor: selectedTeam.primCol, color: selectedTeam.secCol}}>
                <Modal.Title style={{backgroundColor: selectedTeam.primCol}}>{selectedTeam && selectedTeam.location + " " + selectedTeam.mascot + " (" + selectedPos + ") "}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: selectedTeam.primCol}}>
                {selectedTeam && TeamModal(selectedTeam)}
            </Modal.Body>
        </Modal>
    }

    return <div style={{alignContent: 'center'}}>
        <Row>
            <h1 style={{textAlign: 'center', marginBottom: '0px', color: '#eFeFeF'}} className="headerFont">
                <img
                    src={footballL} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginRight: '5px', marginBottom: '7px' }}  
                />
                Landing Spots
                <img
                    src={footballR} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '7px' }}  
                />
            </h1> 
            {generateCard('QB')}
            {generateCard('RB')}
            {generateCard('WR')}
            {generateCard('TE')}
        </Row>
        
        {(selectedTeam) ? modalFormat() : ''}
        
    </div>
}

