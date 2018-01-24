import React from "react";
import styles from "../../styles/Image.css";

// individual image component 
// uses props for src and alt 
// onclick function to update score and attribute wasclicked
const Image = props => {
    console.log(props);
  
    return(
        <div className="col s3 m3">
            <div className="card" onClick={()=> props.updateScore(props.id, props.wasclicked)}>
                <div className="card-image">
                    <img 
                    style={styles} 
                    src={props.src} 
                    alt={props.alt} 
                    onClick={() => props.shuffleArray()}
                    id={props.id}
                    />
                </div>
            </div>
        </div>
    );
}; 
    
export default Image;