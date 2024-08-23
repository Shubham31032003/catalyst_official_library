import React from 'react'
import { FaCalendarAlt, FaClock, FaLanguage, FaGraduationCap, FaUserMd, FaClipboardList, FaBook, FaChartLine, FaMedal } from 'react-icons/fa';
import NeetColleges from './NeetColleges';
import NeetPdfDownload from './NeetPdfDownload';
import './Neet.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import NeetYearlyTips from './NeetYearlyTips';
import NEETDidYouKnow from './DidYouKnowNeet';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function Neet() {
 
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
    biology: {
      labels: ['Botany', 'Zoology', 'Human Physiology', 'Genetics', 'Ecology','Cell:Structure & Function'],
      datasets: [{
        data: [25, 25, 20, 10, 10,10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',"#eb700c"]
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
      <div className="background-image-neet"></div>
      <div className="container heading content">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="/assets/neet.jpg"
            alt="JEE Mains"
            className="rounded-circle img-fluid shadow-sm"
          />
        </div>
        <h1>National Eligibility cum Entrance Test</h1>
        <p>(राष्ट्रीय योग्यता सह प्रवेश परीक्षा)</p>
        <p className="description">
          Your gateway to top medical institutes in India. Get ready to excel in one of the most competitive exams!
        </p>
      </div>
    </div>
      <div class="container my-5 heading">
  <h2 class="text-center mb-4 display-4">What Beginners Should Know</h2>
  <p class="text-center mb-5 lead">Essential information for NEET aspirants. Click each topic to learn more.</p>
  
  <div class="row g-4">
    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-primary w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#neetFrequencyCollapse" aria-expanded="false" aria-controls="neetFrequencyCollapse">
          <i class="bi bi-calendar-event me-2"></i>Exam Frequency
        </button>
        <div class="collapse mt-3" id="neetFrequencyCollapse">
          <div class="card card-body border-primary bg-light">
            <p class="mb-0">NEET is conducted once a year, usually in May.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-success w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#neetEligibilityCollapse" aria-expanded="false" aria-controls="neetEligibilityCollapse">
          <i class="bi bi-mortarboard me-2"></i>Eligibility
        </button>
        <div class="collapse mt-3" id="neetEligibilityCollapse">
          <div class="card card-body border-success bg-light">
            <p class="mb-0">Students who have completed or are appearing for Class 12 with Physics, Chemistry, and Biology are eligible.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-danger w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#neetPurposeCollapse" aria-expanded="false" aria-controls="neetPurposeCollapse">
          <i class="bi bi-clipboard-pulse me-2"></i>Exam Purpose
        </button>
        <div class="collapse mt-3" id="neetPurposeCollapse">
          <div class="card card-body border-danger bg-light">
            <p class="mb-0">NEET is the single entrance exam for admission to MBBS and BDS courses in India.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-warning w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#neetPatternCollapse" aria-expanded="false" aria-controls="neetPatternCollapse">
          <i class="bi bi-journal-text me-2"></i>Exam Pattern
        </button>
        <div class="collapse mt-3" id="neetPatternCollapse">
          <div class="card card-body border-warning bg-light">
            <p class="mb-0">The exam consists of 180 multiple-choice questions from Physics, Chemistry, and Biology (Botany & Zoology).</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<NEETDidYouKnow/>
    <NeetPdfDownload/>
      <NeetColleges/>
      <section className="topic-weightage py-5 heading" data-aos='fade-up'>
        <div className="container">
          <h2 className="text-center mb-4">Topic-wise Weightage</h2>
          <div className="row" >
            {Object.entries(chartData).map(([subject, data]) => (
              <div key={subject} className="col-md-4 mb-3">
                <div className="card" data-aos='fade-up' style={{boxShadow:'0px 5px 10px #868788'}}>
                  <div className="card-body">
                    <h5 className="card-title text-center text-capitalize" >{subject}</h5>
                    <div style={{ height: '300px' }} >
                      
                    <Doughnut data={data} options={chartOptions}  />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NeetYearlyTips/>
    </>
  )
}

export default Neet
