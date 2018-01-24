import React from "react";
import styles from "../../styles/Header.css";

// header component using props for score and best score
// includes app title and divs for score and best score
const Header = props => 

    <header style={styles} className="App-header">
        <div className="header-content">
            <h1 className="App-title">90's Clicky Game!</h1>
            <p>Click an image to earn points, but don't click the same image twice!</p>
            <br />
            <div className="row">
                <div className="col m3"></div>
                <div className="col m2">Score: <span>{props.score}</span></div>
                <div className="col m2"></div>
                <div className="col m2">Best Score: <span>{props.bestScore}</span></div>
                <div className="col m3"></div>
            </div>
        </div>
    </header>;
    
export default Header;
    
    