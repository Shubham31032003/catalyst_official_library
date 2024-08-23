import React from 'react';
import { FaCalendarAlt, FaClock, FaGraduationCap, FaClipboardList, FaBook, FaChartLine } from 'react-icons/fa';
import AdvPdfDownload from './AdvPdfDownload';
import IITColleges from './IITColleges';
import JEEAdvancedDidYouKnow from './DidYouKnow';
import './JeeAdv.css';

function JeeAdv() {
  return (
   <>
   {/* <div className="d-flex justify-content-center mt-3">
  <img src="/assets/jee-adv.jpg" alt="JEE Advanced" className="rounded-circle img-fluid shadow-sm" style={{ width: '100px', height: '100px', objectFit: 'cover', border: '2px solid #bb590e' }} />
</div>
<div className="container heading text-center mt-3">
  <h2>Joint Entrance Examination (Advanced) <br /><p>(संयुक्त प्रवेश परीक्षा - एडवांस)</p></h2>
</div> */}
<div className="blurred-background-container">
      <div className="background-image-adv"></div>
      <div className="container heading content">
        <div className="d-flex justify-content-center mb-4">
          <img
            src="/assets/jee-adv.jpg"
            alt="JEE Mains"
            className="rounded-circle img-fluid shadow-sm"
          />
        </div>
        <h1>Joint Entrance Examination (Advanced)</h1>
        <p>(संयुक्त प्रवेश परीक्षा-एडवांस)</p>
        <p className="description">
          Your gateway to top engineering institutes in India. Get ready to excel in one of the most competitive exams!
        </p>
      </div>
    </div>
    <div class="container my-5 heading">
  <h2 class="text-center mb-4 display-4">What Beginners Should Know</h2>
  <p class="text-center mb-5 lead">Key information for JEE Advanced aspirants. Click each topic to learn more.</p>
  
  <div class="row g-4">
    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-primary w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#jeeAdvFrequencyCollapse" aria-expanded="false" aria-controls="jeeAdvFrequencyCollapse">
          <i class="bi bi-calendar-event me-2"></i>Exam Frequency
        </button>
        <div class="collapse mt-3" id="jeeAdvFrequencyCollapse">
          <div class="card card-body border-primary bg-light">
            <p class="mb-0">JEE Advanced is conducted once a year, typically in May or June.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-success w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#jeeAdvEligibilityCollapse" aria-expanded="false" aria-controls="jeeAdvEligibilityCollapse">
          <i class="bi bi-mortarboard me-2"></i>Eligibility
        </button>
        <div class="collapse mt-3" id="jeeAdvEligibilityCollapse">
          <div class="card card-body border-success bg-light">
            <p class="mb-0">Top 2,50,000 rank holders in JEE Main are eligible to appear for JEE Advanced.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-danger w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#jeeAdvInstitutesCollapse" aria-expanded="false" aria-controls="jeeAdvInstitutesCollapse">
          <i class="bi bi-building me-2"></i>Participating Institutes
        </button>
        <div class="collapse mt-3" id="jeeAdvInstitutesCollapse">
          <div class="card card-body border-danger bg-light">
            <p class="mb-0">JEE Advanced is the qualifying exam for admission to Indian Institutes of Technology (IITs).</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-3">
      <div class="info-item">
        <button class="btn btn-outline-warning w-100 py-3 rounded-pill shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#jeeAdvPatternCollapse" aria-expanded="false" aria-controls="jeeAdvPatternCollapse">
          <i class="bi bi-journal-text me-2"></i>Exam Pattern
        </button>
        <div class="collapse mt-3" id="jeeAdvPatternCollapse">
          <div class="card card-body border-warning bg-light">
            <p class="mb-0">The exam consists of two papers with objective and numerical type questions in Physics, Chemistry, and Mathematics.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<JEEAdvancedDidYouKnow/>
<AdvPdfDownload/>
<IITColleges/>

   </>
  );
}

export default JeeAdv;
