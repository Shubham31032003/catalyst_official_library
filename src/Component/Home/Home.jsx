import React, { useEffect, useState,useRef } from 'react';

import './Home.css';

import { FaChalkboardTeacher, FaUserGraduate, FaCheckCircle } from 'react-icons/fa';
import Problem from '../ProblemOfTheDay/Problem';

function Home() {
  const [text, setText] = useState('');
  const fullText = "BY THE STUDENTS, FOR THE STUDENTS";
  const [showProblem, setShowProblem] = useState(false);
  const indexRef = useRef(0);
  const requestIdRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      setText(fullText.slice(0, indexRef.current));
      indexRef.current += 1;
      if (indexRef.current <= fullText.length) {
        requestIdRef.current = requestAnimationFrame(animateText);
      }
    };

    requestIdRef.current = requestAnimationFrame(animateText);

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);


  return (
    <>
      <div className="container-fluid mt-3 title">
        <div className="row align-items-center mx-2 mx-md-4 mx-lg-5">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0 title">
            <h2 className="mb-2">
              <span>Career </span>
              <span style={{ color: '#bb590e' }}>Catalyst</span>
            </h2>
            <p className="mb-0 typing-text"><small>{text}</small></p>
            <div className="mt-3">
              <a href="#prepare"><button className="btn me-2 custom_button">Get Started</button></a>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setShowProblem(true)}
                style={{ fontFamily: "'Kotta One', serif" }}
              >
                Problem of the Day
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <img src="/assets/logo.png" alt="catalyst logo" className="img-fluid" style={{ maxHeight: '400px', width: 'auto' }} />
          </div>
        </div>
      </div>

      <Problem
        isVisible={showProblem}
        onClose={() => setShowProblem(false)}
      />
      <div className="container-fluid">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6 text-center">
            <img
              src="/assets/girl.png"
              alt="Career Catalyst"
              className="img-fluid mx-auto d-block"
              style={{
                maxHeight: '400px',
                width: 'auto',
                filter: 'drop-shadow(1px 1px 15px rgb(110, 109, 109))'
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="heading text-center">
              <h2 className="mb-3">What is Career Catalyst</h2>
              <p className="lead">
                Career Catalyst helps students prep for exams like JEE and NEET. We offer tools and resources to boost learning and improve success rates. Our goal is to make exam prep better by using new tech and expert help. We want to help students reach their full potential and meet their study goals.

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="text-center mb-5 heading" data-aos="fade-up">
          <h2 className="mb-3" id='prepare' >Prepare for Your Future</h2>
          <p className="lead">
            Choose your path to success. We offer specialized resources and guidance for JEE Mains, JEE Advanced, and NEET exams to help you excel in Engineering, Medical, and other Competitive fields.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {/* JEE Mains Card */}
          <div className="col-md-6 col-lg-4 " data-aos="zoom-in">
            <div className="h-100 text-center rounded-3 exam-cards p-4 border border-primary border-opacity-25">

              <div className="d-flex flex-column align-items-center h-100">
                <div className="mb-4">
                  <img src="/assets/nit background.jpg" alt="JEE Mains" className="rounded-circle img-fluid shadow-sm" style={{ width: '140px', height: '140px', objectFit: 'cover', border: '2px solid #007bff' }} />
                </div>
                <div className="heading text-center flex-grow-1">
                  <h4 className="mb-3 fw-bold text-primary">JEE MAINS CORNER</h4>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Practice tests and study material</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>NITS Colleges cut offs and comparision</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Scholarship Section & many more...</li>

                  </ul>
                </div>
                <a href="/jeemains" className="btn btn-primary btn-lg mt-4 mb-3 px-4" style={{ fontFamily: '"Kotta One", serif' }}>Explore JEE Mains</a>
              </div>
            </div>
          </div>

          {/* JEE Advanced Card */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="h-100 text-center rounded-3 exam-cards p-4 border border-danger border-opacity-25">
              <div className="d-flex flex-column align-items-center h-100">
                <div className="mb-4">
                  <img src="/assets/iit background.jpg" alt="JEE Advanced" className="rounded-circle img-fluid shadow-sm" style={{ width: '140px', height: '140px', objectFit: 'cover', border: '2px solid #dc3545' }} />
                </div>
                <div className="heading text-center flex-grow-1">
                  <h4 className="mb-3 fw-bold text-danger">JEE ADV. CORNER</h4>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced problem-solving techniques</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>In-depth topic analysis and weightage</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Previous year paper & many more...</li>
                  </ul>
                </div>
                <a href="/jeeadv" className="btn btn-danger btn-lg mt-4 mb-3 px-4" style={{ fontFamily: '"Kotta One", serif' }}>Explore JEE Advanced</a>
              </div>
            </div>
          </div>

          {/* NEET Card */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="h-100 text-center rounded-3 exam-cards p-4 border border-success border-opacity-25">
              <div className="d-flex flex-column align-items-center h-100">
                <div className="mb-4">
                  <img src="/assets/aiims background.jpg" alt="NEET" className="rounded-circle img-fluid shadow-sm" style={{ width: '140px', height: '140px', objectFit: 'cover', border: '2px solid #28a745' }} />
                </div>
                <div className="heading text-center flex-grow-1">
                  <h4 className="mb-3 fw-bold text-success">NEET CORNER</h4>
                  <ul className="list-unstyled text-start">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Biology, Physics, Chemistry resources</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>AIIMS Colleges Analysis</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Topicwise Weightage & many more...</li>
                  </ul>
                </div>
                <a href="/neet" className="btn btn-success btn-lg mt-4 mb-3 px-4" style={{ fontFamily: '"Kotta One", serif' }}>Explore NEET</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container heading" data-aos="fade-up">
        <h2 className="text-center mb-4 ">Why Choose Career Catalyst?</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="text-center">
              <i className="bi bi-person-check fs-1 mb-3" style={{ color: '#bb590e' }}></i>
              <h4>Expert Mentorship</h4>
              <p>One-on-one guidance from experienced mentors</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <i className="bi bi-journal-check fs-1 mb-3" style={{ color: '#bb590e' }}></i>
              <h4>Personalized Study Plans</h4>
              <p>Tailored schedules to maximize your potential</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <i className="bi bi-question-circle fs-1 mb-3" style={{ color: '#bb590e' }}></i>
              <h4>24/7 Doubt Solving</h4>
              <p>Get your questions answered anytime</p>
            </div>
          </div>
        </div>
      </div>


      <div class="container my-5 heading">
        <h2 class="text-center mb-4">YouTube Videos</h2>

        <ul class="nav nav-pills mb-4 justify-content-center" id="videoTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active " id="category1-tab" data-bs-toggle="pill" data-bs-target="#category1" type="button" role="tab" aria-controls="category1" aria-selected="true">Category 1</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="category2-tab" data-bs-toggle="pill" data-bs-target="#category2" type="button" role="tab" aria-controls="category2" aria-selected="false">Category 2</button>
          </li>
        </ul>

        <div class="tab-content" id="videoTabsContent">
          <div class="tab-pane fade show active" id="category1" role="tabpanel" aria-labelledby="category1-tab">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              <div class="col">
                <div class="border border-2 rounded overflow-hidden" style={{ boxShadow: '0px 0px 10px black' }}>
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/EwBCbeP8i84" allowfullscreen></iframe>
                  </div>
                  <div class="p-3">
                    <h5 class="mb-5">What After 12th</h5>

                    <a href="https://www.youtube.com/watch?v=EwBCbeP8i84" class="btn btn-outline-danger btn-sm" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'Kotta One', serif" }}>Watch on YouTube</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="border border-2 rounded overflow-hidden" style={{ boxShadow: '0px 0px 10px black' }}>
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/4os6IhH3Tbc?si=E5Q9kXVuVyLGZn44" allowfullscreen></iframe>
                  </div>
                  <div class="p-3">
                    <h5 class="mb-5">Paper Solving Strategy(Physics)</h5>

                    <a href="https://www.youtube.com/watch?v=4os6IhH3Tbc?si=E5Q9kXVuVyLGZn44" class="btn btn-outline-danger btn-sm" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Kotta One', serif" }}>Watch on YouTube</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="border border-2 rounded overflow-hidden" style={{ boxShadow: '0px 0px 10px black' }}>
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/B_Hu_VSd3d8" allowfullscreen></iframe>
                  </div>
                  <div class="p-3">
                    <h5 class="mb-5">Paper Solving Strategy(Maths)</h5>

                    <a href="https://www.youtube.com/watch?v=B_Hu_VSd3d8" class="btn btn-outline-danger btn-sm" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Kotta One', serif" }}>Watch on YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="category2" role="tabpanel" aria-labelledby="category2-tab">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              <div class="col">
                <div class="border border-2 rounded overflow-hidden " style={{ boxShadow: '0px 0px 10px black' }}>
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/VZCUzKeLNNk?si=V0693sxLcdu4jJjr" allowfullscreen></iframe>
                  </div>
                  <div class="p-3">
                    <h5 class="mb-5">Basic to Advance Level Books(Mathematics)</h5>

                    <a href="https://www.youtube.com/watch?v=VZCUzKeLNNk?si=V0693sxLcdu4jJjr" class="btn btn-outline-danger btn-sm" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Kotta One', serif" }}>Watch on YouTube</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="border border-2 rounded overflow-hidden " style={{ boxShadow: '0px 0px 10px black' }}>
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/vrZ4jWxd_7Y" allowfullscreen></iframe>
                  </div>
                  <div class="p-3">
                    <h5 class="mb-5">Basic to Advance Level Books(Physics)</h5>
                    <a href="https://www.youtube.com/watch?v=vrZ4jWxd_7Y" class="btn btn-outline-danger btn-sm" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Kotta One', serif" }}>Watch on YouTube</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="border border-2 rounded overflow-hidden " style={{ boxShadow: '0px 0px 10px black' }}>
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/DEmFEAdG_bM" allowfullscreen></iframe>
                  </div>
                  <div class="p-3">
                    <h5 class="mb-5">Basic to Advance Level Books(Chemistry)</h5>
                    <a href="https://www.youtube.com/watch?v=DEmFEAdG_bM" class="btn btn-outline-danger btn-sm" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Kotta One', serif" }}>Watch on YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5 heading" data-aos="fade-up">
        <div className="row align-items-center ">
          <div className="col-md-4 text-center mt-5">
            <img src="/assets/founder.jpg" alt="Founder" className="img-fluid rounded-circle mb-3" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <h2>Shubham Purwar</h2>
            <p className="text-muted">Founder of Career Catalyst</p>
          </div>
          <div className="col-md-8 text-center text-md-start">
            <h2 className="mb-2 mt-5 ">About the Founder</h2>
            <p className="lead">Shubham Purwar founded Career Catalyst to address the challenges he faced during his own academic journey.</p>

            <p>Mentored by <strong>Mr. Suneel Nayak</strong>, Shubham created this platform to provide students with the guidance he once lacked. Career Catalyst combines expert faculty and innovative tools to help students and professionals navigate their educational and career paths successfully.</p>
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/shubham-purwar-71847b221/" target='_blank' className="btn custom_button me-2"><i className="bi bi-linkedin"></i> Contact Shubham</a>
              <a href="mailto:shubhampurwar2003@gmail.com" className="btn btn-outline-secondary" style={{ fontFamily: "'Kotta One', serif" }}><i className="bi bi-envelope"></i> Send Mail</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 heading">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-4">Join Career Catalyst</h2>
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="card border-0 rounded-lg overflow-hidden exam-cards h-100" data-aos='zoom-in'>
                <div className="card-body d-flex flex-column flex-md-row">
                  <div className="text-center text-md-start mb-3 mb-md-0 me-md-3">
                    <FaChalkboardTeacher className="display-4" style={{ color: '#bb590e' }} />
                  </div>
                  <div className="flex-grow-1 d-flex flex-column" >
                    <h3 className="card-title mb-3 text-md-start text-center">Join as Faculty</h3>
                    <p className="card-text" style={{ fontSize: '18px' }}>Share your expertise and help shape the future of education. Join our team of dedicated educators.</p>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Flexible teaching schedules</li>
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Access to cutting-edge educational tools</li>
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Opportunity to impact students nationwide</li>
                    </ul>
                    <button
                      className="btn btn-outline custom_button mt-auto"
                      onClick={() => window.open('https://forms.gle/154g6eVx3WRyBukr5', '_blank')}
                    >
                      Apply as Faculty
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <div className="card border-0 rounded-lg overflow-hidden exam-cards h-100" data-aos='zoom-in'>
                <div className="card-body d-flex flex-column flex-md-row">
                  <div className="text-center text-md-start mb-3 mb-md-0 me-md-3">
                    <FaUserGraduate className="display-4" style={{ color: '#bb590e' }} />
                  </div>
                  <div className="flex-grow-1 d-flex flex-column">
                    <h3 className="card-title mb-3 text-md-start text-center">Join as Student</h3>
                    <p className="card-text" style={{ fontSize: '18px' }}>Embark on your journey to success. Access top-notch resources and guidance for your competitive exams.</p>
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Comprehensive study materials</li>
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Expert mentorship</li>
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Interactive doubt-solving sessions</li>
                    </ul>
                    <button
                      className="btn btn-outline custom_button mt-auto"
                      onClick={() => window.open('https://forms.gle/x57ZTTzRqMhNeuWE7', '_blank')}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
             
    </>
  );
}

export default Home;