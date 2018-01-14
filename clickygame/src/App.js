import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./images.json";
import styles from "./styles/App.css";

class App extends Component {
  
  shuffleArray = (images) => {
    let i = images.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }
    return images;
  }
  
  render() {
    return(
      <div className="App">
        <NavBar />

        <Header />
        
        <div className="container">
        {images.map(image => {
          return (
            <Image
            src={image.src}
            alt={image.alt}
            onClick={this.shuffleArray}
            />
          );
        })}
        </div>
        
      </div>
      
      );
  }
}


export default App;
