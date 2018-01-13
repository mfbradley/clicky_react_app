import React, { Component } from 'react';
import './styles/App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Image from "./components/Image";
import images from "./components/Image/images.json";

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
  
  
        
  imageShuffle = images => {
    const shuffledImages = this.shuffleArray;
    
    return (
      <ul>
        {shuffledImages.map(image => {
          return (
            <Image
            src={image.src}
            alt={image.alt}
            />
          );
        })}
      </ul>
    );
  }
  
  
  
  render() {
    return(
      <div className="App">
        <Header />
        <NavBar />
        
        {images.map(image => {
          return(
            <Image
            src={image.src}
            alt={image.alt}
            />
        )})}
      </div>
      
      );
  }
} 



export default App;
