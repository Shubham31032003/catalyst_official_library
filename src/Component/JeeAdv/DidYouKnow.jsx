import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHistory, faStar, faUniversity, faUsers, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './DidYouKnow.css'; // We'll create this CSS file for custom styling

const JEEAdvancedDidYouKnow = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const facts = [
    {
      icon: faLightbulb,
      text: "The idea of IITs was first proposed by Nalini Ranjan Sarkar in 1946, even before India's independence!",
      additionalInfo: "This visionary concept laid the foundation for India's premier technical institutions."
    },
    {
      icon: faHistory,
      text: "IIT Kharagpur, established in 1951, was initially housed in the Hijli Detention Camp, where British India imprisoned independence activists.",
      additionalInfo: "From a place of confinement to a center of learning, IIT Kharagpur symbolizes India's journey to educational excellence."
    },
    {
      icon: faStar,
      text: "The first IIT entrance exam in 1961 had only 3,400 applicants. Today, over 2 million students appear for JEE Main!",
      additionalInfo: "This massive growth reflects the increasing value and prestige of an IIT education in India."
    },
    {
      icon: faUniversity,
      text: "IIT Delhi was originally established as College of Engineering & Technology in 1961 before being declared an IIT in 1963.",
      additionalInfo: "The transition to IIT status marked a significant upgrade in its national importance and educational standards."
    },
    {
      icon: faUsers,
      text: "The character of Rancho in the movie '3 Idiots' was inspired by Sonam Wangchuk, an engineer and innovator from SECMOL, not an IIT.",
      additionalInfo: "This popular misconception highlights the cultural impact of IITs in Indian society and cinema."
    }
  ];

  const nextFact = () => {
    setIsFlipped(false);
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
  };

  const prevFact = () => {
    setIsFlipped(false);
    setCurrentFactIndex((prevIndex) => (prevIndex - 1 + facts.length) % facts.length);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextFact();
    }, 10000); // Change fact every 10 seconds

    return () => clearTimeout(timer);
  }, [currentFactIndex]);

  return (
    <div className="jee-advanced-container" data-aos='zoom-in'>
      <div className={`fact-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="fact-card-inner">
          <div className="fact-card-front">
            <div className="fact-header">
              <FontAwesomeIcon icon={faUniversity} className="header-icon" />
              <h3>Did You Know? - JEE Advanced & IITs</h3>
            </div>
            <div className="fact-content">
              <FontAwesomeIcon icon={facts[currentFactIndex].icon} className="fact-icon" />
              <p>{facts[currentFactIndex].text}</p>
            </div>
            <div className="fact-footer">
              <small>Click to learn more!</small>
            </div>
          </div>
          <div className="fact-card-back">
            <h4>More Info</h4>
            <p>{facts[currentFactIndex].additionalInfo}</p>
          </div>
        </div>
      </div>
      <div className="fact-navigation">
        <button onClick={prevFact} className="nav-button">
          <FontAwesomeIcon icon={faArrowLeft} /> Previous
        </button>
        <span className="fact-counter">Fact {currentFactIndex + 1} of {facts.length}</span>
        <button onClick={nextFact} className="nav-button">
          Next <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default JEEAdvancedDidYouKnow;