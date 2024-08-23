import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBook, FaPencilAlt, FaClipboardCheck, FaClock, FaMedal, FaBrain } from 'react-icons/fa';

const NeetYearlyTips = () => {
  const timelineElements = [
    {
      title: "1 Year Before",
      subtitle: "Laying the Foundation",
      description: "Start with NCERT books, create a study schedule, and focus on building strong concepts.",
      icon: <FaBook />,
      date: "12 months to go",
      color: "#2196f3"
    },
    {
      title: "9 Months Before",
      subtitle: "Diving Deeper",
      description: "Begin solving previous years' question papers and focus on weak areas identified.",
      icon: <FaPencilAlt />,
      date: "9 months to go",
      color: "#4caf50"
    },
    {
      title: "6 Months Before",
      subtitle: "Intensify Preparation",
      description: "Increase practice with mock tests, revise completed portions regularly.",
      icon: <FaClipboardCheck />,
      date: "6 months to go",
      color: "#ff9800"
    },
    {
      title: "3 Months Before",
      subtitle: "Fine-tuning",
      description: "Focus on solving complex problems, timed practice, and quick revision techniques.",
      icon: <FaClock />,
      date: "3 months to go",
      color: "#e91e63"
    },
    {
      title: "1 Month Before",
      subtitle: "Final Sprint",
      description: "Revise entire syllabus, practice full-length mock tests, and work on time management.",
      icon: <FaMedal />,
      date: "1 month to go",
      color: "#9c27b0"
    },
    {
      title: "Last Week",
      subtitle: "Mental Preparation",
      description: "Light revision, relaxation techniques, and ensuring all logistics are in place for exam day.",
      icon: <FaBrain />,
      date: "7 days to go",
      color: "#795548"
    }
  ];

  return (
    <div className="neet-yearly-tips container-fluid py-5 heading">
      <h2 className="text-center mb-5">NEET Preparation Timeline</h2>
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

export default NeetYearlyTips;