import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHistory, faStar, faUniversity, faUsers, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './DidYouKnowMains.css';

const JEEMainsDidYouKnow = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const facts = [
    {
      icon: faLightbulb,
      text: "JEE Mains evolved from the All India Engineering Entrance Examination (AIEEE), which was first conducted in 2002.",
      additionalInfo: "This transition in 2013 marked a significant change in India's engineering admission process."
    },
    {
      icon: faHistory,
      text: "The National Testing Agency (NTA) took over JEE Mains conduction from CBSE in 2019.",
      additionalInfo: "This shift aimed to reduce the CBSE's burden and improve the exam's administration."
    },
    {
      icon: faStar,
      text: "JEE Mains became a computer-based test for all papers in 2021, moving away from pen-and-paper format.",
      additionalInfo: "This digital shift improved efficiency and aligned with global testing trends."
    },
    {
      icon: faUniversity,
      text: "The exam serves as an eligibility test for JEE Advanced, which is the gateway to the prestigious IITs.",
      additionalInfo: "Only the top 2.5 lakh JEE Mains rank holders qualify for JEE Advanced each year."
    },
    {
      icon: faUsers,
      text: "JEE Mains is now conducted multiple times a year, giving students more flexibility and opportunities.",
      additionalInfo: "This change, implemented in 2019, allows students to choose their best score for final ranking."
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
    <div className="exam-container jee-mains" data-aos='zoom-in'>
      <div className={`fact-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="fact-card-inner">
          <div className="fact-card-front">
            <div className="fact-header">
              <FontAwesomeIcon icon={faUniversity} className="header-icon" />
              <h3>Did You Know? - JEE MAINS</h3>
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

export default JEEMainsDidYouKnow;