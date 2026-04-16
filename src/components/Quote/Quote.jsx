import React, { useState, useEffect } from 'react';
import './Quote.css';
import hero1Img from "../../assets/hero1.png";
import slide1Img from "../../assets/slide1img.png";
import slide2Img from "../../assets/slide2img.png";
import slide3Img from "../../assets/slide3img.png";

const Quote = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: hero1Img,
      text: <>"Great companies are not built by ideas alone, but by people who believe in turning those ideas into reality."</>,
      authorName: "-Hepsibah Catherine",
      authorTitle: "Founder & CEO",
      imageLeft: true
    },
    {
      image: slide1Img,
      text: <>"People think confidence comes from success. But honestly its other way around. Success comes from daring to be confident first."</>,
      authorName: "-Hepsibah Catherine",
      authorTitle: "Founder & CEO",
      imageLeft: false
    },
    {
      image: slide2Img,
      text: <>"The world doesn't need more noise- it needs people who are quietly doing what's right, even no one's watching."</>,
      authorName: "-Hepsibah Catherine",
      authorTitle: "Founder & CEO",
      imageLeft: true
    },
    {
      image: slide3Img,
      text: <>"What you consider <strong>'nothing'</strong>today might be <strong>everything</strong> to someone tommorow showup anyway."</>,
      authorName: "-Hepsibah Catherine",
      authorTitle: "Founder & CEO",
      imageLeft: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500); // Wait for fade-out
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="quote-container">
      {/* Background decorative circles to mimic the curved lines */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      <div className="bg-circle bg-circle-3"></div>

      <div 
        key={currentSlide}
        className={`quote-content ${slides[currentSlide].imageLeft ? 'image-left' : ''} ${isAnimating ? 'fade-out' : 'fade-in'}`}
      >
        <div className="quote-text-wrapper">
          <p className="quote-text">
            {slides[currentSlide].text}
          </p>
          
          <div className="quote-author">
            <p className="author-name">{slides[currentSlide].authorName}</p>
            <p className="author-title">{slides[currentSlide].authorTitle}</p>
          </div>
        </div>

        <div className="quote-image-wrapper">
          <img 
            src={slides[currentSlide].image} 
            alt="Hepsibah Catherine" 
            className="quote-image" 
          />
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Quote;