import React from 'react'
import { FaCalendarAlt, FaGraduationCap, FaUniversity, FaBookOpen } from 'react-icons/fa';
import './JeeMains.css';
import JeePdfDownload from './JeePdfDownload';
import CollegeContainer from './CollegeContainer..jsx';
import ScholarshipSection from './ScholarshipSection.jsx';
import JeeMainsYearlyTips from './JeeMainsYearlyTips.jsx';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import JEEMainsDidYouKnow from './DidYouKnowMains.jsx';







ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);






function JeeMains() {
  const chartData = {
    physics: {
      labels: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
      datasets: [{
        data: [30, 15, 25, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }]
    },
    chemistry: {
      labels: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
      datasets: [{
        data: [35, 30, 35],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    },
    Mathematics: {
      labels: ['Integration', 'Differentiation', 'Algebra', 'Vector & 3D', 'Trignometry'],
      datasets: [{
        data: [25, 25, 20, 15, 15],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }]
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%', // This creates the hole in the center for the Doughnut chart
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  return (
    <>
       <div className="blurred-background-container">
      <div className="background-image-mains"></div>
      <div className="container heading content">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="/assets/jee-main.jpg"
            alt="JEE Mains"
            className="rounded-circle img-fluid shadow-sm"
          />
        </div>
        <h1>Joint Entrance Exam</h1>
        <p>(संयुक्त प्रवेश परीक्षा-मुख्य)</p>
        <p className="description">
          Your gateway to top engineering institutes in India. Get ready to excel in one of the most competitive exams!
        </p>
      </div>
    </div>

  <div class="container my-5 heading">
  <h2 class="text-center mb-4 display-4">What Beginners Should Know</h2>
  <p class="text-center mb-5 lead">Essential information for JEE Main aspirants. Click each topic to learn more.</p>
  
  <div class="row g-4">
    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-primary w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#frequencyCollapse" aria-expanded="false" aria-controls="frequencyCollapse">
          <i class="bi bi-calendar-event me-2"></i>Exam Frequency
        </button>
        <div class="collapse mt-3" id="frequencyCollapse">
          <div class="card card-body border-primary bg-light">
            <p class="mb-0">JEE Mains is conducted twice a year, typically in January and April.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-success w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#eligibilityCollapse" aria-expanded="false" aria-controls="eligibilityCollapse">
          <i class="bi bi-mortarboard me-2"></i>Eligibility
        </button>
        <div class="collapse mt-3" id="eligibilityCollapse">
          <div class="card card-body border-success bg-light">
            <p class="mb-0">Students who have passed or are appearing for Class 12 (or equivalent) exams are eligible.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-danger w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#institutesCollapse" aria-expanded="false" aria-controls="institutesCollapse">
          <i class="bi bi-building me-2"></i>Participating Institutes
        </button>
        <div class="collapse mt-3" id="institutesCollapse">
          <div class="card card-body border-danger bg-light">
            <p class="mb-0">JEE Mains is the gateway for admissions to NITs, IIITs, and other GFTIs.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-warning w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#patternCollapse" aria-expanded="false" aria-controls="patternCollapse">
          <i class="bi bi-journal-text me-2"></i>Exam Pattern
        </button>
        <div class="collapse mt-3" id="patternCollapse">
          <div class="card card-body border-warning bg-light">
            <p class="mb-0">The exam covers Physics, Chemistry, and Mathematics with objective type questions.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <JEEMainsDidYouKnow/>
      <JeePdfDownload/>
      <section className="topic-weightage py-5 heading" data-aos='fade-up'>
        <div className="container">
          <h2 className="text-center mb-4">Topic-wise Weightage</h2>
          <div className="row" >
            {Object.entries(chartData).map(([subject, data]) => (
              <div key={subject} className="col-md-4 mb-3">
                <div className="card" data-aos='fade-up' style={{boxShadow:'0px 5px 10px #868788'}}>
                  <div className="card-body" >
                    <h5 className="card-title text-center text-capitalize" >{subject}</h5>
                    <div style={{ height: '300px' }}>
                      
                    <Doughnut data={data} options={chartOptions} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CollegeContainer/>
      <ScholarshipSection/>
      <JeeMainsYearlyTips/>
      
     
      
       
    </>
  )
}

export default JeeMains
