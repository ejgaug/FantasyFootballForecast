import './App.css'
import FantasyRouter from './components/nav/FantasyRouter'
import ReactGA from 'react-ga';
import React from "react";

// Initialize React Ga with your tracking ID
ReactGA.initialize('G-KQQ47607HS');

function App() {
 
  return <div style={{backgroundColor: '#2F2F2F', minHeight: '100vh'}}>
      <FantasyRouter/>
    </div>
}

export default App
