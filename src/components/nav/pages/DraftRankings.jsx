import { Button, Card, Col, Row, Modal, CloseButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { playerInfo, ppr1QB, ppr2QB, nPpr1QB, nPpr2QB } from "../../../rankings";
import footballL from '../../../assets/Fantasy Football Forecaster Football Left.svg';
import footballR from '../../../assets/Fantasy Football Forecaster Football Right.svg';

export default function DraftRanks(props) {

    const [isHovering, setIsHovering] = useState(null);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [showPlayerModal, setShowPlayerModal] = useState(false);
    // const [selectedUni, setSelectedUni] = useState(null);
    const [showUniModal, setShowUniModal] = useState(false);
    // const [uniPlayers, setUniPlayers] = useState({});
    const [selectedPositions, setSelectedPositions] = useState({
        'ppr1QB': null,
        'ppr2QB': null,
        'nPpr1QB': null,
        'nPpr2QB': null,
    });
    const [selectedUni, setSelectedUni] = useState({
        'ppr1QB': null,
        'ppr2QB': null,
        'nPpr1QB': null,
        'nPpr2QB': null,
    });

    useEffect(() => {
    }, [selectedPositions, selectedUni]);

    const rankedItems = {
        justifyContent: 'center',  // Center horizontally
        borderBottom: '1.5px dotted #000',
        marginTop: '0px',
        marginBottom: '0px',
        padding: '2px',
        display: 'grid',
        gridTemplateColumns: '8% 40% 12% 40%',
        fontSize: '12px'
    };
    const description = {
        textAlign: 'center',
        marginBottom: '30px',
        paddingLeft: '60px',
        paddingRight: '60px'
    };
    const rankNum = {
        paddingRight: '2px',
        fontWeight: 'bold',
        textAlign: 'center'
    };
    const playerName = {
        borderLeft: '1.5px dotted #000',
        paddingRight: '2px',
        paddingLeft: '2px',
        cursor: 'pointer',
    };
    const playerPos = {
        borderLeft: '1.5px dotted #000',
        paddingRight: '2px',
        paddingLeft: '2px',
        textAlign: 'center',
        cursor: 'pointer',
    };
    const playerUni = {
        borderLeft: '1.5px dotted #000',
        paddingRight: '2px',
        paddingLeft: '2px',
        cursor: 'pointer',
    };
    const modalBelowText = {
        marginBottom: '3px',
        fontSize: '15.5px',
        color: '#DEAB2A'
    };
    const modalAnalysis = {
        marginTop: '3px',
        borderTop: '0.01rem solid lightgray',
        fontSize: '14px',
        color: '#DEAB2A'
    };
    const lastEdited = {
        textAlign: 'right',
        marginBottom: '1px',
        marginTop: '3px',
        fontSize: '12px',
        color: '#DEAB2A'
    };
    const metricsStyle = {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridGap: '5px'
    };
    const imgCreditsStyle = {
        textAlign: 'right',
        fontSize: '10px',
        paddingRight: '8px',
        marginTop: '0px',
        marginBottom: '4px',
        color: '#DEAB2A'
    }

    function ranks(specifier) {
        if (specifier === 'ppr1QB') {return ppr1QB;}
        if (specifier === 'ppr2QB') {return ppr2QB;}
        if (specifier === 'nPpr1QB') {return nPpr1QB;}
        if (specifier === 'nPpr2QB') {return nPpr2QB;}
    }
    
    const openPlayerModal = (selectedPlayer) => {
        playerInfo.forEach((player) => {
            if (player.name === selectedPlayer.name) {
                // console.log(player);
                setSelectedPlayer(player);
            }
        });
        setShowPlayerModal(true);
    };
    
    const handleCloseModal = () => {
        setShowPlayerModal(false);
        setSelectedUni("");
        setShowUniModal(false);
    };

    function positionalRanks(specifier, pos) {
        // console.log(specifier + " - " + pos);
        setSelectedPositions(prevState => ({
            ...prevState,
            [specifier]: pos,
        }));
        // console.log(selectedPositions);
    }

    function uniRanks(specifier, uni) {
        console.log(specifier + " - " + uni);
        setSelectedUni(prevState => ({
            ...prevState,
            [specifier]: uni,
        }));
        // console.log(selectedPositions);
    }
    
    function generateCard(rankings, title, specifier) {
        const filteredRankings = selectedPositions[specifier]
        ? rankings.filter(player => player.pos === selectedPositions[specifier])
        : selectedUni[specifier]
        ? rankings.filter(player => player.uni === selectedUni[specifier])
        : rankings;

        return (
            <Col
                xs={12}
                sm={12}
                md={6}
                lg={3}
                xxl={3}
                key={title + rankings}
            >
                <Card style={{ borderRadius: '8px', borderWidth: '5px', borderColor: 'black', backgroundColor: '#eFeFeF', marginBottom: '40px' }}>
                    <h6 style={{ marginTop: '3px', borderBottom: '5px solid #000', paddingBottom: '3px', marginBottom: '0px', textAlign: 'center' }}>{title}</h6>
                    {filteredRankings.map(player => (
                        <Col key={title + player.id}>
                            <p style={rankedItems}>
                                <span style={rankNum}>{player.id}</span>
                                <span
                                    style={{
                                        ...playerName,
                                        fontWeight: isHovering === player.name ? 'bold' : 'normal',
                                    }}
                                    onClick={() => openPlayerModal(player)}
                                    onMouseOver={() => setIsHovering(player.name)}
                                    onMouseOut={() => setIsHovering(null)}>
                                        {player.name}
                                </span>
                                <span
                                    style={{
                                        ...playerPos,
                                        fontWeight: isHovering === title + player.pos ? 'bold' : 'normal', // should it be +player.id too?
                                    }}
                                    onClick={() => positionalRanks(specifier, player.pos)}
                                    onMouseOver={() => setIsHovering(title + player.pos)} // ^^
                                    onMouseOut={() => setIsHovering(null)}>
                                        {player.pos}
                                </span>
                                <span style={{
                                        ...playerUni,
                                        fontWeight: isHovering === title + player.uni ? 'bold' : 'normal', // ^^
                                    }}
                                    onClick={() => uniRanks(specifier, player.uni)} //openUniModal(player.uni)
                                    onMouseOver={() => setIsHovering(title + player.uni)} // ^^
                                    onMouseOut={() => setIsHovering(null)}>
                                        {player.uni}
                                </span>
                            </p>
                        </Col>
                    ))}
                    <Button  
                        style={{borderRadius: '3px', backgroundColor: 'green', borderColor: '#C79A25'}} 
                        onClick={() => {
                            setSelectedPositions(prevState => ({
                            ...prevState,
                            [specifier]: null,
                            }));
                            setSelectedUni(prevState => ({
                                ...prevState,
                                [specifier]: null,
                            }));
                        }}>Reset</Button>
                </Card>
            </Col>
        );
    }
        

    function WhichMetrics(selectedPlayer) {
        if (selectedPlayer.pos === "QB") {
            return <>
                <img 
                    src={selectedPlayer.imgUrl}
                    alt={selectedPlayer.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2px'}}
                />
                <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgOrgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>

                <Row>
                    <Col style={metricsStyle}>
                        <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                        <p style={modalBelowText}>Passing Yards: {selectedPlayer.passYrds}</p>
                        <p style={modalBelowText}>Age: {selectedPlayer.age}</p>
                        <p style={modalBelowText}>TD/INT: {selectedPlayer.td2Int}</p>
                        <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                        <p style={modalBelowText}>Completion Perctage: {selectedPlayer.compPerc}</p>
                        <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                        <p style={modalBelowText}>Yards/Att: {selectedPlayer.yrdsPerAtt}</p>
                        <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p>
                        <p style={modalBelowText}>Rushing: {selectedPlayer.rush}</p>
                    </Col>
                </Row>
                <p style={modalAnalysis}>{selectedPlayer.analysis}</p>
                <p style={lastEdited}>Last Edited: {selectedPlayer.lastEditTime}</p>
            </>
        } if (selectedPlayer.pos === "RB") {
            return <>
                <img 
                    src={selectedPlayer.imgUrl}
                    alt={selectedPlayer.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '5px'}}
                />
                <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgOrgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>

                <Row>
                    <Col style={metricsStyle}>
                        <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                        <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                        <p style={modalBelowText}>Age: {selectedPlayer.age}</p>
                        <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p>
                        <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                        <p style={modalBelowText}>Vertical: {selectedPlayer.vert}</p>
                        <p style={modalBelowText}>Rushing: {selectedPlayer.rushing}</p>
                        <p style={modalBelowText}>Yards/Rush: {selectedPlayer.ydsPerRush}</p>
                        <p style={modalBelowText}>Receptions: {selectedPlayer.recTdRec}</p>
                        <p style={modalBelowText}>Receiving Yards: {selectedPlayer.recYrds}</p>
                    </Col>
                </Row>
                <p style={modalAnalysis}>{selectedPlayer.analysis}</p>
                <p style={lastEdited}>Last Edited: {selectedPlayer.lastEditTime}</p>
            </>
        } else {
            return <>
                <img 
                    src={selectedPlayer.imgUrl}
                    alt={selectedPlayer.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '5px'}}
                />
                <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgOrgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>

                <Row>
                    <Col style={metricsStyle}>
                        <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                        <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                        <p style={modalBelowText}>Age: {selectedPlayer.age}</p>
                        <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p>
                        <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                        <p style={modalBelowText}>Vertical: {selectedPlayer.vert}</p>
                        <p style={modalBelowText}>Receptions: {selectedPlayer.recTdRec}</p>
                        <p style={modalBelowText}>Receiving Yards: {selectedPlayer.recYrds}</p>
                    </Col>
                </Row>
                <p style={modalAnalysis}>{selectedPlayer.analysis}</p>
                <p style={lastEdited}>Last Edited: {selectedPlayer.lastEditTime}</p>
            </>
        }
    }
    
    return <div>
        <Row>
            <h1 style={{textAlign: 'center', marginBottom: '0px', color: '#eFeFeF'}} className="headerFont">
                <img
                    src={footballL} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginRight: '5px', marginBottom: '7px' }}  
                />
                Draft Rankings
                <img
                    src={footballR} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '7px' }}  
                />
            </h1> 
            {generateCard(ranks('ppr1QB'), 'PPR 1-QB Rankings', 'ppr1QB')}
            {generateCard(ranks('ppr2QB'), 'PPR 2-QB Rankings', 'ppr2QB')}
            {generateCard(ranks('nPpr1QB'), 'Non-PPR 1-QB Rankings', 'nPpr1QB')}
            {generateCard(ranks('nPpr2QB'), 'Non-PPR 2-QB Rankings', 'nPpr2QB')}
        </Row>
s
        <Modal show={showPlayerModal} onHide={handleCloseModal}>
            <Modal.Header style={{backgroundColor: '#1F1F1F', color: '#DDAA2f'}}>
                <Modal.Title style={{backgroundColor: '#1F1F1F'}}>{selectedPlayer && selectedPlayer.name + " (" + selectedPlayer.uni + ")"}</Modal.Title>
                <CloseButton  variant="white" onClick={handleCloseModal}/>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#1F1F1F'}}>
                {selectedPlayer && (WhichMetrics(selectedPlayer))}
            </Modal.Body>
        </Modal>
        
    </div>
}

