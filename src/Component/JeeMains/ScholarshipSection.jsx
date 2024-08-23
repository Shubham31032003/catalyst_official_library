import React from 'react';
import { FaGraduationCap, FaUserTie, FaUsers, FaLaptopCode, FaHandHoldingHeart, FaUniversity, FaRupeeSign, FaWheelchair, FaGlobe, FaFlagUsa } from 'react-icons/fa';

const scholarships = [
  {
    title: "Scholarships for Top Class Education for Students with Disabilities",
    provider: "Department of Empowerment of Persons with Disabilities, Ministry of Social Justice and Empowerment, Government of India",
    icon: <FaWheelchair />,
    applicationPeriod: "31st October 2024"
  },
  {
    title: "S.N. Bose Scholars Program",
    provider: "SERB, DST (Govt. of India), IUSSTF & WINStep Forward",
    icon: <FaGlobe />,
    applicationPeriod: "September to October"
  },
  {
    title: "Prime Minister's Scholarship Scheme for Central Armed Police Forces and Assam Rifles",
    provider: "Welfare and Rehabilitation Board, Ministry of Home Affairs, Government of India.",
    icon: <FaUserTie />,
    applicationPeriod: "31st October 2024"
  },
  {
    title: "Prime Minister's Research Fellowship (PMRF)",
    provider: "Ministry of Human Resource Development, Government of India",
    icon: <FaGraduationCap />,
    applicationPeriod: "Closed"
  },
  {
    title: "Post Matric Scholarships Scheme for Minorities",
    provider: "Ministry of Minority Affairs, Government of India",
    icon: <FaUsers />,
    applicationPeriod: "TBA"
  },
  {
    title: "Merit Cum Means Scholarship for Professional and Technical Courses CS (Minorities)",
    provider: "Ministry of Minority Affairs, Government of India",
    icon: <FaLaptopCode />,
    applicationPeriod: "July to September"
  },
  {
    title: "Khorana Program for Scholars",
    provider: "Indo-US Science and Technology Forum (IUSSTF)",
    icon: <FaFlagUsa />,
    applicationPeriod: "December to January"
  },
  {
    title: "Central Sector Scheme of Scholarship for College and University Students",
    provider: "Department of Higher Education, Ministry of Human Resource Development, Government of India",
    icon: <FaUniversity />,
    applicationPeriod: "31st October 2024"
  },
  {
    title: "AICTE-Saksham Scholarship Scheme 2024-25",
    provider: "All India Council for Technical Education (AICTE)",
    icon: <FaHandHoldingHeart />,
    applicationPeriod: "31st October 2024"
  },
  {
    title: "AICTE Pragati Scholarship for Girls 2024-25",
    provider: "Ministry of Electronics and Information Technology, Government of India",
    icon: <FaRupeeSign />,
    applicationPeriod: "31st October 2024"
  }
];

const ScholarshipSection = () => {
  return (
    <div className="container my-5 heading" data-aos='fade-up'>
      <h2 className="text-center mb-5 font-weight-bold">Government Scholarships for Higher Education</h2>
      <div className="table-responsive">
        <table className="table table-hover" style={{ fontFamily: "'Kotta One', serif",boxShadow:'0px 0px 10px black' }}>
          <thead className="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">Scholarship Name</th>
              <th scope="col">Provider</th>
              <th scope="col">Application Period</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px', backgroundColor: '#007bff', borderRadius: '50%', color: 'white' }}>
                    {React.cloneElement(scholarship.icon, { size: 20 })}
                  </div>
                </td>
                <td>{scholarship.title}</td>
                <td>{scholarship.provider}</td>
                <td>{scholarship.applicationPeriod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ScholarshipSection;