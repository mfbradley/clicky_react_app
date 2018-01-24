import React, { Component } from 'react';
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json";
import styles from "./styles/App.css";

class App extends Component {
  // set initial state
  state = {
    images,
    score: 0,
    bestScore: 0,
    
  }
  
  // update score method
  updateScore = (id) => {

     // grab id of image clicked
    const imageClicked = this.state.images.filter(image => image.id === id);
    
    // if wasclicked attribute is false, set it to true and increment points by one
    if (imageClicked[0].wasclicked === false) {
      imageClicked[0].wasclicked = true;
      this.setState({ score: this.state.score + 1});
    }
    
    // if wasclicked attribute is true, notify user that they lost 
    else {
      alert("You Lose! You already clicked that image. Please try again!");
      
        // if the score is higher than the current best score, update best score to score
        if (this.state.bestScore < this.state.score) {
          this.setState({bestScore: this.state.score});
        }
      
      // reset score back to zero and all image attributes 'wasclicked' to false
      this.setState({ score: 0});
      for (let i = 0; i < images.length; i++) {
        images[i].wasclicked = false;
      }
    
    }
  }
  
  // suffleArray method
  // loop over all images and create random number (j)
  // rest index of each image to be equal to new random number
  // results in a shuffled array
  shuffleArray = () => {
    let i = images.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }
    
    // set state to newly reordered images array
    // return the array
    this.setState({ images });
    return images;
  }
  
  // render components
  render() {
    return(
      
      // container for all components (header and image)
      // update props to pull from array or state
      // call methods where appropriate
      <div style={styles} className="App">
      
        <Header score={this.state.score} bestScore={this.state.bestScore}/>
        
        <div className="container">
        {images.map(image => {
          return (
            <Image
            id={image.id}
            key={image.id}
            src={image.src}
            alt={image.alt}
            shuffleArray={this.shuffleArray}
            updateScore={this.updateScore}
            wasclicked={image.wasclicked}
            />
          );
        })}
        </div>
        
      </div>
      
      );
  }
}


export default App;
