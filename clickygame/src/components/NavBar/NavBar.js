import React from "react";
import styles from "../../styles/NavBar.css";


const Navbar = () => 
    <nav>
        <div style={styles} className="nav-wrapper">
            <a className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>Brand</li>
              <li>Click an Image to Begin!</li>
              <li>Score</li>
            </ul>
        </div>
    </nav>;
    
export default Navbar;