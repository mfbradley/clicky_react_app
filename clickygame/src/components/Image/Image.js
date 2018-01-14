import React from "react";
import styles from "../../styles/Image.css";


const Image = props => {
    console.log(props);
  
    return(
        <div class="col s3 m3">
            <div class="card">
                <div class="card-image">
                    <img style={styles} src={props.src} alt={props.alt} onClick={props.imageShuffle}/>
                </div>
            </div>
        </div>
    );
}; 
    
export default Image;