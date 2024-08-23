import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRocket, FaCalculator, FaLightbulb, FaChartLine, FaFlask, FaCogs } from 'react-icons/fa';

const JeeMainsYearlyTips = () => {
  const timelineElements = [
    {
      title: "12 Months Before",
      subtitle: "Building the Foundation",
      description: "Master fundamental concepts in Physics, Chemistry, and Mathematics. Start with NCERT books and create a robust study plan.",
      icon: <FaRocket />,
      date: "1 year to go",
      color: "#3f51b5"
    },
    {
      title: "9 Months Before",
      subtitle: "Accelerating Progress",
      description: "Dive into advanced topics. Begin solving JEE level problems and focus on developing problem-solving speed.",
      icon: <FaCalculator />,
      date: "9 months to go",
      color: "#009688"
    },
    {
      title: "6 Months Before",
      subtitle: "Strategic Preparation",
      description: "Take regular mock tests, analyze performance, and refine your strategy. Start revising completed portions.",
      icon: <FaLightbulb />,
      date: "6 months to go",
      color: "#ff5722"
    },
    {
      title: "3 Months Before",
      subtitle: "Intensifying Practice",
      description: "Focus on solving previous years' questions and full-length mock tests. Identify and work on weak areas.",
      icon: <FaChartLine />,
      date: "3 months to go",
      color: "#e91e63"
    },
    {
      title: "1 Month Before",
      subtitle: "Final Revision Sprint",
      description: "Revise entire syllabus with quick notes. Practice time management with full-length online mock tests.",
      icon: <FaFlask />,
      date: "1 month to go",
      color: "#ffc107"
    },
    {
      title: "Last Week",
      subtitle: "Fine-Tuning",
      description: "Light revision, focus on mental preparation, and ensure all exam logistics are in place. Stay calm and confident.",
      icon: <FaCogs />,
      date: "7 days to go",
      color: "#607d8b"
    }
  ];

  return (
    <div className="jee-mains-yearly-tips container-fluid py-5 heading">
      <h2 className="text-center mb-5">JEE Mains Preparation Roadmap</h2>
      <VerticalTimeline lineColor="#dee2e6">
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            date={element.date}
            dateClassName="text-muted fw-bold"
            iconStyle={{ background: element.color, color: '#fff' }}
            contentStyle={{ 
              background: '#fff', 
              boxShadow: '0 3px 0 #dee2e6',
              border: '1px solid #dee2e6',
              borderTop: `3px solid ${element.color}`,
              borderRadius: '0.25rem'
            }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            icon={element.icon}
          >
            <div className="card-body">
              <h3 className="card-title h5 fw-bold">{element.title}</h3>
              <h4 className="card-subtitle mb-2 text-muted">{element.subtitle}</h4>
              <p className="card-text">{element.description}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default JeeMainsYearlyTips;