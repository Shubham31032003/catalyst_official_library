import React, { useState } from 'react';


const colleges = [
  {
    name: 'NIT Trichy',
    type: 'NIT',
    image: '/assets/nit trichy.jpg',
    ranks: {
      general: { opening: 1000, closing: 5000 },
      ews: { opening: 5001, closing: 7000 },
      obc: { opening: 5001, closing: 10000 },
      sc: { opening: 10001, closing: 15000 },
      st: { opening: 15001, closing: 20000 },
    },
    
  },
  {
    name: 'NIT Rourkela',
    type: 'NIT',
    image: '/assets/nit rourkela.jpg',
    ranks: {
      general: { opening: 2000, closing: 6000 },
      ews: { opening: 6001, closing: 8000 },
      obc: { opening: 6001, closing: 11000 },
      sc: { opening: 11001, closing: 16000 },
      st: { opening: 16001, closing: 21000 },
    },
  },
  {
    name: 'NIT Warangal',
    type: 'NIT',
    image: '/assets/nit warangal.jpeg',
    ranks: {
      general: { opening: 3000, closing: 7000 },
      ews: { opening: 7001, closing: 9000 },
      obc: { opening: 7001, closing: 12000 },
      sc: { opening: 12001, closing: 17000 },
      st: { opening: 17001, closing: 22000 },
    },
  },
  {
    name: 'NIT Surathkal',
    type: 'NIT',
    image: '/assets/nit suratkal.jpg',
    ranks: {
      general: { opening: 4000, closing: 8000 },
      ews: { opening: 8001, closing: 10000 },
      obc: { opening: 8001, closing: 13000 },
      sc: { opening: 13001, closing: 18000 },
      st: { opening: 18001, closing: 23000 },
    },
  },
  {
    name: 'NIT Calicut',
    type: 'NIT',
    image: '/assets/nit calicut.jpg',
    ranks: {
      general: { opening: 5000, closing: 9000 },
      ews: { opening: 9001, closing: 11000 },
      obc: { opening: 9001, closing: 14000 },
      sc: { opening: 14001, closing: 19000 },
      st: { opening: 19001, closing: 24000 },
    },
  },
  {
    name: 'MNIT Jaipur',
    type: 'NIT',
    image: '/assets/nit jaipur.jpg',
    ranks: {
      general: { opening: 6000, closing: 10000 },
      ews: { opening: 10001, closing: 12000 },
      obc: { opening: 10001, closing: 15000 },
      sc: { opening: 15001, closing: 20000 },
      st: { opening: 20001, closing: 25000 },
    },
  },
  {
    name: 'NIT Durgapur',
    type: 'NIT',
    image: '/assets/nit durgapur.jpg',
    ranks: {
      general: { opening: 7000, closing: 11000 },
      ews: { opening: 11001, closing: 13000 },
      obc: { opening: 11001, closing: 16000 },
      sc: { opening: 16001, closing: 21000 },
      st: { opening: 21001, closing: 26000 },
    },
  },
  {
    name: 'VNIT Nagpur',
    type: 'NIT',
    image: '/assets/nit nagpur.jpg',
    ranks: {
      general: { opening: 8000, closing: 12000 },
      ews: { opening: 12001, closing: 14000 },
      obc: { opening: 12001, closing: 17000 },
      sc: { opening: 17001, closing: 22000 },
      st: { opening: 22001, closing: 27000 },
    },
  },
  {
    name: 'NIT Kurukshetra',
    type: 'NIT',
    image: '/assets/nit kurukshetra.jpg',
    ranks: {
      general: { opening: 9000, closing: 13000 },
      ews: { opening: 13001, closing: 15000 },
      obc: { opening: 13001, closing: 18000 },
      sc: { opening: 18001, closing: 23000 },
      st: { opening: 23001, closing: 28000 },
    },
  },
  {
    name: 'MNNIT Allahabad',
    type: 'NIT',
    image: '/assets/nit prayagraj.jpg',
    ranks: {
      general: { opening: 10000, closing: 14000 },
      ews: { opening: 14001, closing: 16000 },
      obc: { opening: 14001, closing: 19000 },
      sc: { opening: 19001, closing: 24000 },
      st: { opening: 24001, closing: 29000 },
    },
  },
  {
    name: 'NIT Silchar',
    type: 'NIT',
    image: '/assets/nit silchar.jpg',
    ranks: {
      general: { opening: 11000, closing: 15000 },
      ews: { opening: 15001, closing: 17000 },
      obc: { opening: 15001, closing: 20000 },
      sc: { opening: 20001, closing: 25000 },
      st: { opening: 25001, closing: 30000 },
    },
  },
  {
    name: 'NIT Raipur',
    type: 'NIT',
    image: '/assets/nit raipur.jpg',
    ranks: {
      general: { opening: 12000, closing: 16000 },
      ews: { opening: 16001, closing: 18000 },
      obc: { opening: 16001, closing: 21000 },
      sc: { opening: 21001, closing: 26000 },
      st: { opening: 26001, closing: 31000 },
    },
  },
  {
    name: 'NIT Hamirpur',
    type: 'NIT',
    image: '/assets/nit hamirpur.png',
    ranks: {
      general: { opening: 13000, closing: 17000 },
      ews: { opening: 17001, closing: 19000 },
      obc: { opening: 17001, closing: 22000 },
      sc: { opening: 22001, closing: 27000 },
      st: { opening: 27001, closing: 32000 },
    },
  },
  {
    name: 'MANIT Bhopal',
    type: 'NIT',
    image: '/assets/nit bhopal.jpg',
    ranks: {
      general: { opening: 14000, closing: 18000 },
      ews: { opening: 18001, closing: 20000 },
      obc: { opening: 18001, closing: 23000 },
      sc: { opening: 23001, closing: 28000 },
      st: { opening: 28001, closing: 33000 },
    },
  },
  {
    name: 'NIT Jalandhar',
    type: 'NIT',
    image: '/assets/nit jalandhar.jpg',
    ranks: {
      general: { opening: 15000, closing: 19000 },
      ews: { opening: 19001, closing: 21000 },
      obc: { opening: 19001, closing: 24000 },
      sc: { opening: 24001, closing: 29000 },
      st: { opening: 29001, closing: 34000 },
    },
  },
  {
    name: 'NIT Jamshedpur',
    type: 'NIT',
    image: '/assets/nit jamshedpur.jpg',
    ranks: {
      general: { opening: 16000, closing: 20000 },
      ews: { opening: 20001, closing: 22000 },
      obc: { opening: 20001, closing: 25000 },
      sc: { opening: 25001, closing: 30000 },
      st: { opening: 30001, closing: 35000 },
    },
  },
  {
    name: 'NIT Patna',
    type: 'NIT',
    image: '/assets/nit patna.jpg',
    ranks: {
      general: { opening: 17000, closing: 21000 },
      ews: { opening: 21001, closing: 23000 },
      obc: { opening: 21001, closing: 26000 },
      sc: { opening: 26001, closing: 31000 },
      st: { opening: 31001, closing: 36000 },
    },
  },
  {
    name: 'NIT Srinagar',
    type: 'NIT',
    image: '/assets/nit srinagar.jpg',
    ranks: {
      general: { opening: 18000, closing: 22000 },
      ews: { opening: 22001, closing: 24000 },
      obc: { opening: 22001, closing: 27000 },
      sc: { opening: 27001, closing: 32000 },
      st: { opening: 32001, closing: 37000 },
    },
  },
  {
    name: 'NIT Agartala',
    type: 'NIT',
    image: '/assets/nit agartala.jpg',
    ranks: {
      general: { opening: 19000, closing: 23000 },
      ews: { opening: 23001, closing: 25000 },
      obc: { opening: 23001, closing: 28000 },
      sc: { opening: 28001, closing: 33000 },
      st: { opening: 33001, closing: 38000 },
    },
  },
  {
    name: 'NIT Meghalaya',
    type: 'NIT',
    image: '/assets/nit meghalaya.jpg',
    ranks: {
      general: { opening: 20000, closing: 24000 },
      ews: { opening: 24001, closing: 26000 },
      obc: { opening: 24001, closing: 29000 },
      sc: { opening: 29001, closing: 34000 },
      st: { opening: 34001, closing: 39000 },
    },
  },
  {
    name: 'NIT Puducherry',
    type: 'NIT',
    image: '/assets/nit puducherry.jpg',
    ranks: {
      general: { opening: 21000, closing: 25000 },
      ews: { opening: 25001, closing: 27000 },
      obc: { opening: 25001, closing: 30000 },
      sc: { opening: 30001, closing: 35000 },
      st: { opening: 35001, closing: 40000 },
    },
  },
  {
    name: 'NIT Manipur',
    type: 'NIT',
    image: '/assets/nit manipur.jpg',
    ranks: {
      general: { opening: 22000, closing: 26000 },
      ews: { opening: 26001, closing: 28000 },
      obc: { opening: 26001, closing: 31000 },
      sc: { opening: 31001, closing: 36000 },
      st: { opening: 36001, closing: 41000 },
    },
  },
  {
    name: 'NIT Mizoram',
    type: 'NIT',
    image: '/assets/nit mizoram.webp',
    ranks: {
      general: { opening: 23000, closing: 27000 },
      ews: { opening: 27001, closing: 29000 },
      obc: { opening: 27001, closing: 32000 },
      sc: { opening: 32001, closing: 37000 },
      st: { opening: 37001, closing: 42000 },
    },
  },
  {
    name: 'NIT Nagaland',
    type: 'NIT',
    image: '/assets/nit nagaland.jpg',
    ranks: {
      general: { opening: 24000, closing: 28000 },
      ews: { opening: 28001, closing: 30000 },
      obc: { opening: 28001, closing: 33000 },
      sc: { opening: 33001, closing: 38000 },
      st: { opening: 38001, closing: 43000 },
    },
  },
  {
    name: 'NIT Arunachal Pradesh',
    type: 'NIT',
    image: '/assets/nit arunachal.jpg',
    ranks: {
      general: { opening: 25000, closing: 29000 },
      ews: { opening: 29001, closing: 31000 },
      obc: { opening: 29001, closing: 34000 },
      sc: { opening: 34001, closing: 39000 },
      st: { opening: 39001, closing: 44000 },
    },
  },
  {
    name: 'NIT Delhi',
    type: 'NIT',
    image: '/assets/nit delhi.jpg',
    ranks: {
      general: { opening: 26000, closing: 30000 },
      ews: { opening: 30001, closing: 32000 },
      obc: { opening: 30001, closing: 35000 },
      sc: { opening: 35001, closing: 40000 },
      st: { opening: 40001, closing: 45000 },
    },
  },
  {
    name: 'NIT Goa',
    type: 'NIT',
    image: '/assets/nit goa.jpg',
    ranks: {
      general: { opening: 27000, closing: 31000 },
      ews: { opening: 31001, closing: 33000 },
      obc: { opening: 31001, closing: 36000 },
      sc: { opening: 36001, closing: 41000 },
      st: { opening: 41001, closing: 46000 },
    },
  },
  {
    name: 'NIT Sikkim',
    type: 'NIT',
    image: '/assets/nit sikkim.png',
    ranks: {
      general: { opening: 28000, closing: 32000 },
      ews: { opening: 32001, closing: 34000 },
      obc: { opening: 32001, closing: 37000 },
      sc: { opening: 37001, closing: 42000 },
      st: { opening: 42001, closing: 47000 },
    },
  },
  {
    name: 'NIT Uttarakhand',
    type: 'NIT',
    image: '/assets/nit uk.webp',
    ranks: {
      general: { opening: 29000, closing: 33000 },
      ews: { opening: 33001, closing: 35000 },
      obc: { opening: 33001, closing: 38000 },
      sc: { opening: 38001, closing: 43000 },
      st: { opening: 43001, closing: 48000 },
    },
  },
  {
    name: 'NIT Andhra Pradesh',
    type: 'NIT',
    image: '/assets/nit andhra.jpg',
    ranks: {
      general: { opening: 30000, closing: 34000 },
      ews: { opening: 34001, closing: 37000 },
      obc: { opening: 34001, closing: 39000 },
      sc: { opening: 39001, closing: 44000 },
      st: { opening: 44001, closing: 49000 },
    },
  },
];
const nitData = {
  'NIT Trichy': {
    ranking: 1,
    courses: ['Computer Science', 'Electrical', 'Mechanical'],
    placement: '95%',
    facilities: ['Large Library', 'Modern Labs', 'Sports Complex'],
    researchOutput: 'High',
    facultyRatio: '1:15'
  },
  'NIT Surathkal': {
    ranking: 2,
    courses: ['Computer Science', 'Chemical', 'Civil'],
    placement: '92%',
    facilities: ['Research Centers', 'Innovation Hub', 'Incubation Center'],
    researchOutput: 'Very High',
    facultyRatio: '1:16'
  },
  'NIT Warangal': {
    ranking: 3,
    courses: ['Computer Science', 'Electronics', 'Biotechnology'],
    placement: '90%',
    facilities: ['Tech Park', 'Robotics Lab', 'Central Library'],
    researchOutput: 'High',
    facultyRatio: '1:14'
  },
  'NIT Rourkela': {
    ranking: 4,
    courses: ['Mechanical', 'Electrical', 'Computer Science'],
    placement: '88%',
    facilities: ['Supercomputer Center', 'Nanotechnology Lab', 'Sports Complex'],
    researchOutput: 'High',
    facultyRatio: '1:15'
  },
  'NIT Calicut': {
    ranking: 5,
    courses: ['Civil', 'Electrical', 'Computer Science'],
    placement: '87%',
    facilities: ['Technology Business Incubator', 'Central Library', 'Health Center'],
    researchOutput: 'Moderate',
    facultyRatio: '1:16'
  },
  'NIT Allahabad': {
    ranking: 6,
    courses: ['Electronics', 'Computer Science', 'Biotechnology'],
    placement: '86%',
    facilities: ['Center for AI', 'Entrepreneurship Cell', 'Sports Facilities'],
    researchOutput: 'High',
    facultyRatio: '1:15'
  },
  'NIT Jaipur': {
    ranking: 7,
    courses: ['Mechanical', 'Civil', 'Electrical'],
    placement: '85%',
    facilities: ['Renewable Energy Lab', 'Innovation Center', 'Central Workshop'],
    researchOutput: 'Moderate',
    facultyRatio: '1:17'
  },
  'NIT Durgapur': {
    ranking: 8,
    courses: ['Metallurgy', 'Chemical', 'Computer Science'],
    placement: '84%',
    facilities: ['Material Science Lab', 'Collaborative Research Center', 'E-Learning Center'],
    researchOutput: 'Moderate',
    facultyRatio: '1:16'
  },
  'NIT Kurukshetra': {
    ranking: 9,
    courses: ['Electronics', 'Computer Engineering', 'Mechanical'],
    placement: '83%',
    facilities: ['Central Instrumentation Lab', 'Training and Placement Cell', 'Entrepreneurship Development Cell'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Silchar': {
    ranking: 10,
    courses: ['Civil', 'Mechanical', 'Electronics'],
    placement: '82%',
    facilities: ['Centre for the Environment', 'Central Computer Centre', 'Central Library'],
    researchOutput: 'Moderate',
    facultyRatio: '1:16'
  },
  'NIT Hamirpur': {
    ranking: 11,
    courses: ['Computer Science', 'Electrical', 'Civil'],
    placement: '81%',
    facilities: ['Centre for Energy Studies', 'Innovation Club', 'Robotics Lab'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Jalandhar': {
    ranking: 12,
    courses: ['Industrial Engineering', 'Instrumentation and Control', 'Textile Technology'],
    placement: '80%',
    facilities: ['Advanced Manufacturing Lab', 'Centre for Continuing Education', 'Central Workshop'],
    researchOutput: 'Moderate',
    facultyRatio: '1:16'
  },
  'NIT Raipur': {
    ranking: 13,
    courses: ['Biomedical Engineering', 'Information Technology', 'Mining'],
    placement: '79%',
    facilities: ['Industry Institute Partnership Cell', 'Entrepreneurship Cell', 'Incubation Center'],
    researchOutput: 'Moderate',
    facultyRatio: '1:17'
  },
  'NIT Srinagar': {
    ranking: 14,
    courses: ['Mechanical', 'Electronics and Communication', 'Chemical'],
    placement: '78%',
    facilities: ['Centre for Innovation and Entrepreneurship', 'Central Library', 'Sports Facilities'],
    researchOutput: 'Moderate',
    facultyRatio: '1:16'
  },
  'NIT Patna': {
    ranking: 15,
    courses: ['Computer Science', 'Electronics', 'Mechanical'],
    placement: '77%',
    facilities: ['Centre for Computer & Communication', 'Entrepreneurship Development Cell', 'Central Library'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Agartala': {
    ranking: 16,
    courses: ['Electrical', 'Production Engineering', 'Chemical'],
    placement: '76%',
    facilities: ['Centre for Energy Engineering', 'Robotics Lab', 'Industry Institute Partnership Cell'],
    researchOutput: 'Moderate',
    facultyRatio: '1:16'
  },
  'NIT Bhopal': {
    ranking: 17,
    courses: ['Materials Science and Metallurgical Engineering', 'Planning and Architecture', 'Computer Science'],
    placement: '75%',
    facilities: ['Central Library', 'Computer Centre', 'Workshop'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Jamshedpur': {
    ranking: 18,
    courses: ['Mechanical', 'Metallurgy', 'Computer Applications'],
    placement: '74%',
    facilities: ['Centre of Excellence in Steel Technology', 'Entrepreneurship Cell', 'Central Library'],
    researchOutput: 'Moderate',
    facultyRatio: '1:16'
  },
  'NIT Nagpur': {
    ranking: 19,
    courses: ['Civil', 'Electrical', 'Computer Science'],
    placement: '73%',
    facilities: ['Centre for VLSI and Nanotechnology', 'Entrepreneurship Cell', 'Central Computing Facility'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Delhi': {
    ranking: 20,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '72%',
    facilities: ['Incubation Center', 'Central Library', 'Sports Complex'],
    researchOutput: 'Moderate',
    facultyRatio: '1:14'
  },
  'NIT Goa': {
    ranking: 21,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '71%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Puducherry': {
    ranking: 22,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '70%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:14'
  },
  'NIT Manipur': {
    ranking: 23,
    courses: ['Civil Engineering', 'Electronics and Communication', 'Computer Science'],
    placement: '69%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Meghalaya': {
    ranking: 24,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '68%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:14'
  },
  'NIT Mizoram': {
    ranking: 25,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '67%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Nagaland': {
    ranking: 26,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '66%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:14'
  },
  'NIT Sikkim': {
    ranking: 27,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '65%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Arunachal Pradesh': {
    ranking: 28,
    courses: ['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering'],
    placement: '64%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:14'
  },
  'NIT Uttarakhand': {
    ranking: 29,
    courses: ['Computer Science', 'Electronics and Communication', 'Electrical and Electronics'],
    placement: '63%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  },
  'NIT Andhra Pradesh': {
    ranking: 30,
    courses: ['Computer Science', 'Electronics and Communication', 'Mechanical Engineering'],
    placement: '62%',
    facilities: ['Central Library', 'Computer Centre', 'Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:14'
  },
  'NIT Surat': {
    ranking: 31,
    courses: ['Chemical Engineering', 'Computer Science', 'Electronics Engineering'],
    placement: '61%',
    facilities: ['Central Library', 'Computer Centre', 'Advanced Research Laboratories'],
    researchOutput: 'Moderate',
    facultyRatio: '1:15'
  }
};

const CollegeContainer = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeSelect = (event) => {
    const college = colleges.find(c => c.name === event.target.value);
    setSelectedCollege(college);
  };
  const [nit1, setNit1] = useState('');
  const [nit2, setNit2] = useState('');

  const renderComparison = () => {
    if (!nit1 || !nit2) return null;

    const compareData = [
      { label: 'Ranking', key: 'ranking' },
      { label: 'Courses', key: 'courses' },
      { label: 'Placement', key: 'placement' },
      { label: 'Facilities', key: 'facilities' },
      { label: 'Research Output', key: 'researchOutput' },
      { label: 'Faculty Ratio', key: 'facultyRatio' }
    ];

    return (
      <div className="table-responsive mt-4" style={{boxShadow:'0px 0px 10px black', borderRadius:'5px',fontFamily: "'Kotta One', serif"}}>
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Criteria</th>
              <th>{nit1}</th>
              <th>{nit2}</th>
            </tr>
          </thead>
          <tbody>
            {compareData.map(({ label, key }) => (
              <tr key={key}>
                <td>{label}</td>
                <td>{Array.isArray(nitData[nit1][key]) ? nitData[nit1][key].join(', ') : nitData[nit1][key]}</td>
                <td>{Array.isArray(nitData[nit2][key]) ? nitData[nit2][key].join(', ') : nitData[nit2][key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container mt-5 heading" data-aos="fade-up">
      <h2 className="text-center mb-4">NITS Colleges</h2>
      <p className='text-center'>Welcome to our comprehensive guide on National Institutes of Technology (NITs)
        
      </p>
      <p className='text-center'><strong>"Please note that the rank data provided is approximate and may vary from year to year. Actual cutoff ranks can change based on factors such as the number of applicants, available seats, and overall competition in a given year."</strong></p>
      <div className="row justify-content-center mb-4">
        <div className="col-md-6" style={{ fontFamily: "'Kotta One', serif" }}>
          <select 
            className="form-select" 
            onChange={handleCollegeSelect}
            defaultValue=""
          >
            <option value="" disabled>Select a college</option>
            {colleges.map((college, index) => (
              <option key={index} value={college.name}>
                {college.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {selectedCollege && (
  <div className="row justify-content-center heading">
    <div className="col-md-8"style={{ fontFamily: "'Kotta One', serif" }} >
      <div className="card" style={{boxShadow:'0px 0px 10px black'}}>
        <img 
          src={selectedCollege.image} 
          alt={selectedCollege.name} 
          className="card-img-top" 
          style={{ height: '300px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h5 className="card-title">{selectedCollege.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{selectedCollege.type}</h6>
          <div style={{ fontFamily: "'Kotta One', serif" }}>
          <h6 className="mt-4">Rank Information</h6>
          <table className="table table-striped" >
            <thead>
              <tr>
                <th>Category</th>
                <th>Opening Rank</th>
                <th>Closing Rank</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedCollege.ranks).map(([category, ranks], idx) => (
                <tr key={idx}>
                  <td>{category.toUpperCase()}</td>
                  <td>{ranks.opening}</td>
                  <td>{ranks.closing}</td>
                </tr>
              ))}
            </tbody>
          </table>

          </div>
          
          
        </div>
      </div>
    </div>
  </div>
)}
      <div className="container mt-5" data-aos="fade-up">
      <h2 className="text-center mb-4">NIT Comparison Tool</h2>
      <div className="row">
        <div className="col-md-6 mb-3 "style={{ fontFamily: "'Kotta One', serif" }}>
          <label htmlFor="nit1" className="form-label">Select first NIT:</label>
          <select 
            id="nit1"
            className="form-select"
            value={nit1} 
            onChange={(e) => setNit1(e.target.value)}
          >
            <option value="">Choose NIT</option>
            {Object.keys(nitData).map(nit => (
              <option key={nit} value={nit}>{nit}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3" style={{ fontFamily: "'Kotta One', serif" }}>
          <label htmlFor="nit2" className="form-label">Select second NIT:</label>
          <select 
            id="nit2"
            className="form-select"
            value={nit2} 
            onChange={(e) => setNit2(e.target.value)}
          >
            <option value="">Choose NIT</option>
            {Object.keys(nitData).map(nit => (
              <option key={nit} value={nit}>{nit}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-center mb-4">
        <h3><span className="text-primary">{nit1 || 'NIT 1'}</span> vs <span className="text-primary">{nit2 || 'NIT 2'}</span></h3>
      </div>
      {renderComparison()}
    </div>
    </div>
    
  );
};

export default CollegeContainer;