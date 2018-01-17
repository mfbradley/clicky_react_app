import React, { Component } from 'react';
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json";
import styles from "./styles/App.css";

class App extends Component {
  state = {
    images,
    score: 0,
    bestScore: 0,
    
  }
  
  updateScore = (id) => {
    console.log("updating score!");
    
    const imageClicked = this.state.images.filter(image => image.id === id);
    
    console.log(imageClicked);
    
    if (imageClicked[0].wasclicked === false) {
      imageClicked[0].wasclicked = true;
      this.setState({ score: this.state.score + 1});
    }
    
    else {
      alert("You Lose! You already clicked that image. Please try again!");
      
        if (this.state.bestScore < this.state.score) {
          this.setState({bestScore: this.state.score});
        }
        
      this.setState({ score: 0});
      for (let i = 0; i < images.length; i++) {
        images[i].wasclicked = false;
      }
    
    }
  }
  
  
  shuffleArray = () => {
    let i = images.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }
    
    this.setState({ images });
    return images;
  }
  
  render() {
    return(
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
