import React from "react";


const styles = {
    width: 150,
    height: 150,
};

const Image = props => {
    console.log(props);
  
    return(
        <div class="col s3 m3">
            <div class="card">
                <div class="card-image">
                    <img style={styles} src={props.src} alt={props.alt}/>
                </div>
            </div>
        </div>
    );
}; 
    
export default Image;