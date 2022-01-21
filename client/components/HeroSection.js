import React from 'react';
import '../App.css';
import { Button } from './Button';
import './styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {<video src='./Police.mp4' autoPlay loop muted />}
      <h1>FBI Most Wanted</h1>
   
      </div>

  );
}

export default HeroSection;
