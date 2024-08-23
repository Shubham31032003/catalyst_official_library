import React from 'react';
import { FaGraduationCap, FaBook, FaQuestionCircle, FaRocket, FaPuzzlePiece } from 'react-icons/fa';


const About = () => {
  return (
    <div className="container-fluid py-5 heading">
      <div className="container">
        <h2 className="text-center mb-5">About Career Catalyst</h2>

        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="mb-4 text-md-start text-center">Our Mission</h2>
            <p className="lead text-md-start text-center">Career Catalyst is born from personal struggle and driven by a passion to make quality education accessible to all. We believe that every student deserves the chance to excel, regardless of their financial background. <br />Our platform provides comprehensive support for JEE, NEET, and other competitive examinations, ensuring that no student's potential is limited by a lack of resources or guidance.</p>


          </div>
          <div className="col-md-6">
            <img src="/assets/vision.png" alt="Students studying" className="img-fluid" style={{ height: 'auto', width: 'auto' }} />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4">What We Offer</h2>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 exam-cards" data-aos="zoom-in">
              <div className="card-body text-center">
                <FaBook className="display-4 mb-3" style={{ color: '#bb590e' }} />
                <h5 className="card-title">Study Materials</h5>
                <p className="card-text">Comprehensive and well-structured study materials tailored for JEE, NEET, and other exams.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 exam-cards" data-aos="zoom-in">
              <div className="card-body text-center">
                <FaGraduationCap className="display-4 mb-3" style={{ color: '#bb590e' }} />
                <h5 className="card-title">Expert Guidance</h5>
                <p className="card-text">Personalized mentorship and guidance from experienced educators and successful candidates.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 exam-cards" data-aos="zoom-in">
              <div className="card-body text-center">
                <FaQuestionCircle className="display-4 mb-3" style={{ color: '#bb590e' }} />
                <h5 className="card-title">Doubt Solving</h5>
                <p className="card-text">Real-time doubt solving sessions and forums to clear your concepts effectively.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="mb-5">Your Path to Success</h2>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div className="rounded-circle  text-white p-3 mb-3" style={{ backgroundColor: '#bb590e' }}>
                <FaGraduationCap size={30} />
              </div>
              <h5 className="text-center">Personalized Learning</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div className="rounded-circle  text-white p-3 mb-3" style={{ backgroundColor: '#bb590e' }}>
                <FaPuzzlePiece size={30} />
              </div>
              <h5 className="text-center">Practice Resources</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div className="rounded-circle  text-white p-3 mb-3" style={{ backgroundColor: '#bb590e' }}>
                <FaRocket size={30} />
              </div>
              <h5 className="text-center">Performance Tracking</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div className="rounded-circle  text-white p-3 mb-3" style={{ backgroundColor: '#bb590e' }}>
                <FaBook size={30} />
              </div>
              <h5 className="text-center">Exam Strategies</h5>
            </div>
          </div>
        </div>



        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="bg-white p-5 rounded heading" style={{ boxShadow: '0px 30px 20px rgb(98, 98, 98)' }} data-aos="zoom-in">
              <h4 className="text-center mb-4">Join the Career Catalyst Community</h4>
              <p className="text-center mb-4">Experience the power of collaborative learning and expert guidance. Whether you're aiming for JEE, NEET, or any other competitive exam, we're here to fuel your success.</p>
              <div className="text-center">
                <a href="https://chat.whatsapp.com/GBwHKfH4wxFLpRFlHjL72B" target='_blank' className="btn custom_button btn-lg" style={{ fontFamily: '"Kotta One", serif', textDecoration: 'none' }}>
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default About;