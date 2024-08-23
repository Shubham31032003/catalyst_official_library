import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHistory, faStar, faUniversity, faUsers, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './DidYouKnowNeet.css';

const NEETDidYouKnow = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const facts = [
    {
      icon: faLightbulb,
      text: "NEET replaced the All India Pre-Medical Test (AIPMT) and various state-level medical entrance exams in 2013.",
      additionalInfo: "This unification aimed to standardize medical admissions across India."
    },
    {
      icon: faHistory,
      text: "The concept of a single medical entrance test was first proposed in 2009 by the Medical Council of India (MCI).",
      additionalInfo: "It took several years and legal battles before NEET was finally implemented nationwide."
    },
    {
      icon: faStar,
      text: "NEET became mandatory for admissions to AIIMS and JIPMER from 2020, which previously had separate entrance exams.",
      additionalInfo: "This inclusion further solidified NEET's status as the sole medical entrance exam in India."
    },
    {
      icon: faUniversity,
      text: "The exam is now conducted in 13 languages, making it one of the most linguistically diverse entrance exams in India.",
      additionalInfo: "This multilingual approach aims to provide equal opportunities to students from diverse backgrounds."
    },
    {
      icon: faUsers,
      text: "NEET's implementation faced significant resistance, with Tamil Nadu opposing it until 2017.",
      additionalInfo: "The state's concerns about disadvantaged students led to heated debates on the exam's fairness."
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
    <div className="exam-container neet " data-aos='zoom-in'>
      <div className={`fact-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
        <div className="fact-card-inner">
          <div className="fact-card-front">
            <div className="fact-header">
              <FontAwesomeIcon icon={faUniversity} className="header-icon" />
              <h3>Did You Know? - NEET</h3>
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

export default NEETDidYouKnow;