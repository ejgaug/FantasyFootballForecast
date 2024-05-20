import { Button, Card, Col, Row, Modal, CloseButton } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { playerInfo, ppr1QB, ppr2QB, nPpr1QB, nPpr2QB, personal } from "../../../rankings";
import footballL from '../../../assets/Fantasy Football Forecaster Football Left.svg';
import footballR from '../../../assets/Fantasy Football Forecaster Football Right.svg';
import ReactGA from 'react-ga';
ReactGA.initialize('G-CE4KYHDZN3');

export default function DraftRanks(props) {

    const [isHovering, setIsHovering] = useState(null);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [showPlayerModal, setShowPlayerModal] = useState(false);
    const [showUniModal, setShowUniModal] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
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
    const [buttonClick, setButtonClick] = useState(null);
    const [playerRanks, setPlayerRanks] = useState({
        '1': '??', '2': '??', '3': '??', '4': '??', '5': '??', '6': '??', '7': '??', '8': '??', '9': '??', '10': '??', '11': '??', '12': '??',
        '13': '??', '14': '??', '15': '??', '16': '??', '17': '??', '18': '??', '19': '??', '20': '??', '21': '??', '22': '??', '23': '??', '24': '??',
        '25': '??', '26': '??', '27': '??', '28': '??', '29': '??', '30': '??', '31': '??', '32': '??', '33': '??', '34': '??', '35': '??', '36': '??', '37': '??'
    });
    const [lockPersonal, setLockPersonal] = useState(false);
    const [personalRanks, setPersonalRanks] = useState([]);

    useEffect(() => {
    }, [selectedPositions, selectedUni]);

    // Google Analytics trackers
    const trackNameClick = (playerName) => {
        // console.log(playerName);
        ReactGA.event({
            category: 'Button Click',
            action: 'Player Name Clicked (Rankings)', // Event action
            label: playerName, // Event label
        });
    };

    const trackFilterClick = (filter) => {
        // console.log(filter);
        ReactGA.event({
            category: 'Button Click',
            action: 'Position/University Button Clicked', // Event action
            label: filter, // Event label
        });
    };

    useEffect(() => {
        // Set custom page title for Google Analytics tracking
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, []);

    const rankedItems = {
        justifyContent: 'center',  // Center horizontally
        borderBottom: '1.5px dashed #000',
        marginTop: '0px',
        marginBottom: '0px',
        padding: '2px',
        display: 'grid',
        gridTemplateColumns: '8% 42% 10% 40%',
        fontSize: '13.5px'
    };
    const description = {
        textAlign: 'center',
        marginBottom: '15px',
        color: '#eFeFeF',
    };
    const rankNum = {
        paddingRight: '2px',
        fontWeight: 'bold',
        textAlign: 'center'
    };
    const playerName = {
        borderLeft: '1.5px solid #000',
        paddingRight: '0px',
        paddingLeft: '4px',
        cursor: 'pointer',
    };
    const playerPos = {
        borderLeft: '1.5px solid #000',
        paddingRight: '1px',
        paddingLeft: '1px',
        textAlign: 'center',
        cursor: 'pointer',
    };
    const playerUni = {
        borderLeft: '1.5px solid #000',
        paddingRight: '0px',
        paddingLeft: '4px',
        cursor: 'pointer',
    };
    const modalBelowText = {
        marginBottom: '1px',
        fontSize: '14px',
        color: '#bFbFbF' //'#DEAB2A'
    };
    const modalAnalysis = {
        paddingTop: '5px',
        borderTop: '0.01rem solid #bFbFbF',
        fontSize: '14px',
        color: '#bFbFbF' //'#DEAB2A'
    };
    const modalPostDraftAnalysis = {
        paddingTop: '5px',
        marginBottom: '5px',
        marginTop: '5px',
        borderTop: '0.01rem solid #bFbFbF',
        fontSize: '14px',
        color: '#bFbFbF' //'#DEAB2A'
    };
    const lastEdited = {
        textAlign: 'right',
        marginBottom: '1px',
        marginTop: '3px',
        fontSize: '12px',
        color: '#bFbFbF' //'#DEAB2A'
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
        color: '#bFbFbF' //'#DEAB2A'
    };
    const buttonStyles = specifier => ({
        borderRadius: '3px', 
        cursor: 'pointer'
    });

    function ranks(specifier) {
        if (specifier === 'ppr1QB') {return ppr1QB;}
        if (specifier === 'ppr2QB') {return ppr2QB;}
        if (specifier === 'nPpr1QB') {return nPpr1QB;}
        if (specifier === 'nPpr2QB') {return nPpr2QB;}
        if (specifier === 'personal') {
            if (lockPersonal) {
                return personalRanks
            } else {
                return personal; // gonna have to GET from an API that saves them
            }
        } 
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
        // console.log(specifier + " - " + uni);
        setSelectedUni(prevState => ({
            ...prevState,
            [specifier]: uni,
        }));
        // console.log(selectedPositions);
    }

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const screenCutOff = 767;
    
    // Add a useEffect hook to log the updated playerRanks state
    // useEffect(() => {
    //     console.log(playerRanks);
    // }, [playerRanks]);

    function handlePlayerRanks(rank, player) { 

        setPlayerRanks(prevState => ({
            ...prevState,
            [rank]: player
        }));
    };

    function pullDown(rank) {
        const handleSelectChange = (event) => {
            const playerName = event.target.value;
            handlePlayerRanks(rank, playerName);

        };

        // Sort playerInfo array alphabetically by player name
        const sortedPlayerInfo = playerInfo.sort((a, b) => a.name.localeCompare(b.name));

        return (
            <select style={{ width: '97%' }} value={playerRanks[rank]} onChange={handleSelectChange}>
                <option key={"select"} value="select">Select Player</option>
                {sortedPlayerInfo.map(player => {
                    const isSelected = Object.values(playerRanks).includes(player.name);
                    return (
                        <option key={player.name} value={player.name} style={{ backgroundColor: isSelected ? 'lightgray' : 'inherit' }}>
                            {player.name}
                        </option>
                    );
                })}
            </select>
        );

    }

    function makePersonalRanks() { // need to actually map it from the playerInfo array because it has all the info needed

        const filteredPlayers = [];
    
        // Loop through playerRanks to maintain order
        for (const rank of Object.values(playerRanks)) {
            // Find the player in playerInfo with the corresponding name
            const player = playerInfo.find(player => player.name === rank);
            if (player) {
                const playerName = player.name;
                // Add the player to filteredPlayers
                filteredPlayers.push({
                    ...player,
                    id: Math.floor(Math.random() * 10000) // Generate a random id
                });
               
            }
        }
        // console.log(filteredPlayers);

        setPersonalRanks(filteredPlayers);
        generateCard(filteredPlayers, 'Personal Rankings', 'personal');
    }

    function generateCard(rankings, title, specifier) {
        const filteredRankings = selectedPositions[specifier]
            ? rankings.filter(player => player.pos === selectedPositions[specifier])
            : selectedUni[specifier]
            ? rankings.filter(player => player.uni === selectedUni[specifier])
            : rankings;

        let rank = 1;

        return (
            <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xxl={12}
                key={title + rankings}
            >
                <Card style={{ borderRadius: '8px', borderWidth: '5px', borderColor: 'black', backgroundColor: '#eFeFeF', marginBottom: '20px' }}>
                    <h6 style={{ marginTop: '3px', borderBottom: '5px solid #000', paddingBottom: '3px', marginBottom: '0px', textAlign: 'center' }}>{title}</h6>
                    {filteredRankings.map(player => (
                        <Col key={title + player.id}>
                            <p style={rankedItems}>
                                <span style={rankNum}>
                                    {rank++}
                                </span>
                                <span
                                    style={{
                                        ...playerName,
                                        fontWeight: isHovering === player.name ? 'bold' : 'normal',
                                    }}
                                    onClick={() => {
                                        // needs to only do the following if there is a player selected
                                        if (lockPersonal === true) {
                                            trackNameClick(player.name);
                                            openPlayerModal(player);
                                        }
                                    }}
                                    onMouseOver={() => setIsHovering(player.name)}
                                    onMouseOut={() => setIsHovering(null)}>
                                        {(specifier === 'personal' && !lockPersonal) ? pullDown(rank) : player.name}
                                </span>
                                <span
                                    style={{
                                        ...playerPos,
                                        fontWeight: isHovering === title + player.pos ? 'bold' : 'normal', // should it be +player.id too?
                                    }}
                                    onClick={() => {
                                        trackFilterClick(player.pos);
                                        positionalRanks(specifier, player.pos);
                                    }}
                                    onMouseOver={() => setIsHovering(title + player.pos)} // ^^
                                    onMouseOut={() => setIsHovering(null)}>
                                        {player.pos}
                                </span>
                                <span style={{
                                        ...playerUni,
                                        fontWeight: isHovering === title + player.uni ? 'bold' : 'normal', // ^^
                                    }}
                                    onClick={() => {
                                        trackFilterClick(player.uni);
                                        uniRanks(specifier, player.uni);
                                    }} //openUniModal(player.uni)
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
                            if (buttonClick === 'personal' && lockPersonal === false) {
                                const confirmed = window.confirm("Are you sure you want to permanently clear your personal rankings?");
                                if (confirmed) {
                                    for (let i = 0; i < 38; i++) {
                                        setPlayerRanks(prevState => ({
                                            ...prevState,
                                            [i]: "??"
                                        }));
                                    }
                                }
                            } else {
                                setSelectedPositions(prevState => ({ // HAVE TO PUT SOMETHING SIMILAR TO ABOVE WITH LOCK BUTTON
                                    ...prevState,
                                    [specifier]: null,
                                    }));
                                    setSelectedUni(prevState => ({
                                        ...prevState,
                                        [specifier]: null,
                                    })); 
                            }
                        }}>
                            {(buttonClick === 'personal' && lockPersonal === false) ? "Clear Rankings" : "Reset Filters"}
                    </Button> 
                </Card>
            </Col>
        );
    }   

    function WhichMetrics(selectedPlayer) {

        return <>
                <img 
                    src={selectedPlayer.img}
                    alt={selectedPlayer.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2px'}}
                />
                <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>

                <Row>
                    <Col style={metricsStyle}>
                        <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                        <p style={modalBelowText}>NFL Team: {selectedPlayer.nflTeam}</p>
                        <p style={modalBelowText}>Draft Age: {selectedPlayer.age}</p>
                        <p style={modalBelowText}>Draft Capital: {selectedPlayer.draftCap}</p>
                        <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                        <p style={modalBelowText}>Pre-Daft Rank: {selectedPlayer.preDraftRank[buttonClick]}</p>

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
                <p style={modalPostDraftAnalysis}> <b> Post-Draft Analysis: </b> <br/>{selectedPlayer.postDraftAnalysis}</p>
                <p style={modalAnalysis}> <b> Pre-Draft Analysis: </b> <br/>{selectedPlayer.analysis}</p>

                <p style={lastEdited}>Last Edited: {selectedPlayer.lastEditTime}</p>
            </>
    }
    
    return <div  style={{ flex: '1', flexDirection: 'row', textAlign: 'center'}}>
        <Row className="justify-content-center">
            <h1 style={{textAlign: 'center', marginBottom: '0px', marginTop: '70px', color: '#eFeFeF'}} className="headerFont">
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
            <p style={{ ...description, 
                    paddingLeft: width > screenCutOff ? '100px' : '10px', 
                    paddingRight: width > screenCutOff ? '60px' : '10px',
                    fontSize: width > screenCutOff ? '15px' : '12px'
                }}>
                To filter the rankings, try clicking on a position or university. This can be canceled by using the "reset" button. 
                Also, selecting a player's name will give you an in-depth analysis and important statistics for the player. Unofficial
                measurements are denoted by a 'u' following the number. If there are players you'd like us to add to the site, contact 
                us using the email at the bottom of the page.
            </p>
            <div style={{ marginBottom: '15px'}}>
                <Button  
                    style={{
                        ...buttonStyles,
                        backgroundColor: buttonClick === 'ppr1QB' ? 'darkgreen' : 'green', boxShadow: buttonClick === 'ppr1QB' ? 'none' : '1px 1px 1px 0.5px darkgreen',
                        borderColor: '#C79A25', marginLeft: '10px', marginRight: '10px', marginBottom: '4px'
                    }} 
                    onClick={() => {
                        setButtonClick('ppr1QB');
                        setLockPersonal(true);
                    }}>
                    PPR 1-QB Rankings
                </Button>
                <Button  
                    style={{
                        ...buttonStyles,
                        backgroundColor: buttonClick === 'ppr2QB' ? 'darkgreen' : 'green', boxShadow: buttonClick === 'ppr2QB' ? 'none' : '1px 1px 1px 0.5px darkgreen',
                        borderColor: '#C79A25', marginLeft: '10px', marginRight: '10px', marginBottom: '4px'
                    }} 
                    onClick={() => {
                        setButtonClick('ppr2QB');
                        setLockPersonal(true);

                    }}>
                    PPR 2-QB Rankings
                </Button>
                <Button  
                    style={{
                        ...buttonStyles,
                        backgroundColor: buttonClick === 'nPpr1QB' ? 'darkgreen' : 'green', boxShadow: buttonClick === 'nPpr1QB' ? 'none' : '1px 1px 1px 0.5px darkgreen',
                        borderColor: '#C79A25', marginLeft: '10px', marginRight: '10px', marginBottom: '4px'  
                    }} 
                    onClick={() => {
                        setButtonClick('nPpr1QB');
                        setLockPersonal(true);

                    }}>
                    Non-PPR 1-QB Rankings
                </Button>
                <Button  
                    style={{
                        ...buttonStyles,
                        backgroundColor: buttonClick === 'nPpr2QB' ? 'darkgreen' : 'green', boxShadow: buttonClick === 'nPpr2QB' ? 'none' : '1px 1px 1px 0.5px darkgreen',
                        borderColor: '#C79A25', marginLeft: '10px', marginRight: '10px', marginBottom: '4px'
                    }} 
                    onClick={() => {
                        setButtonClick('nPpr2QB');
                        setLockPersonal(true);

                    }}>
                    Non-PPR 2-QB Rankings
                </Button>
                <Button  
                    style={{
                        ...buttonStyles,
                        backgroundColor: buttonClick === 'personal' ? 'darkgreen' : 'green', boxShadow: buttonClick === 'personal' ? 'none' : '1px 1px 1px 0.5px darkgreen',
                        borderColor: '#C79A25', marginLeft: '10px', marginRight: '10px', 
                    }} 
                    onClick={() => {
                        setButtonClick('personal'); // need to check if user is signed in first
                        setLockPersonal(false);

                    }}>
                    Personal Rankings
                </Button>
            </div>
            {buttonClick === 'personal' && (
                <div style={{ marginBottom: '15px'}}>
                    <Button  
                        style={{
                            ...buttonStyles,
                            backgroundColor: 'green', boxShadow: '1px 1px 1px 0.5px darkgreen',
                            borderColor: '#C79A25', marginLeft: '10px', marginRight: '10px', 
                        }} 
                        onClick={() => { 
                            if (!lockPersonal) {
                                makePersonalRanks();
                            }
                            setLockPersonal(!lockPersonal);
                            setSelectedPositions(prevState => ({ 
                                ...prevState,
                                'personal': null,
                            }));
                            setSelectedUni(prevState => ({
                                ...prevState,
                                'personal': null,
                            })); 
                        }}>
                        {lockPersonal ? "Edit Rankings" : "Lock Rankings"}
                    </Button>
                    <Button  
                        style={{
                            ...buttonStyles,
                            backgroundColor: 'green', boxShadow: '1px 1px 1px 0.5px darkgreen',
                            borderColor: '#C79A25', marginLeft: '10px', marginRight: '10px', 
                        }} 
                        onClick={() => { 
                            alert("Sorry, this feature is still being developed.")
                            setSelectedPositions(prevState => ({ 
                                ...prevState,
                                'personal': null,
                            }));
                            setSelectedUni(prevState => ({
                                ...prevState,
                                'personal': null,
                            })); 
                        }}>
                        Save Rankings
                    </Button>
                </div>
            )}
            
            <div style={{ width: (width > screenCutOff ? '70%' : '96%'), color: '#eFeFeF', fontSize: '16px'}}>
                {buttonClick ? 
                    generateCard(ranks(buttonClick), 
                    buttonClick === 'ppr1QB' ? 'PPR 1-QB Rankings' :
                    buttonClick === 'ppr2QB' ? 'PPR 2-QB Rankings' : 
                    buttonClick === 'nPpr1QB' ? 'Non-PPR 1-QB Rankings' :
                    buttonClick === 'nPpr2QB' ? 'Non-PPR 2-QB Rankings' : 'Personal Rankings', 
                    buttonClick) : '* click to view format-based rankings *'
                }
            </div>
        </Row>

        <Modal show={showPlayerModal} onHide={handleCloseModal}>
            <Modal.Header style={{backgroundColor: '#1F1F1F', color: '#bFbFbF'}}>
                <Modal.Title style={{backgroundColor: '#1F1F1F'}}>{selectedPlayer && selectedPlayer.name + " (" + selectedPlayer.uni + ")"}</Modal.Title>
                <CloseButton  variant="white" onClick={handleCloseModal}/>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#1F1F1F'}}>
                {selectedPlayer && (WhichMetrics(selectedPlayer))}
            </Modal.Body>
        </Modal>
        
    </div>
}


