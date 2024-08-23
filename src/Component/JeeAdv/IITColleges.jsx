import React from 'react'
import { useState } from 'react';
import { FaUniversity, FaUsers, FaGraduationCap } from 'react-icons/fa';
const iitColleges = [
    {
      name: 'IIT Bombay',
      type: 'Indian Institute of Technology',
      image: '/assets/iit bombay.jpg',
      ranks: {
        general: { opening: 1, closing: 100 },
        ews: { opening: 101, closing: 150 },
        obc: { opening: 151, closing: 300 },
        sc: { opening: 301, closing: 500 },
        st: { opening: 501, closing: 700 },
      },
      seats: 900,
      foundedYear: 1958,
    },
    {
      name: 'IIT Delhi',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-delhi.png',
      ranks: {
        general: { opening: 1, closing: 120 },
        ews: { opening: 121, closing: 170 },
        obc: { opening: 171, closing: 320 },
        sc: { opening: 321, closing: 520 },
        st: { opening: 521, closing: 720 },
      },
      seats: 850,
      foundedYear: 1961,
    },
    {
      name: 'IIT Madras',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-madras.jpg',
      ranks: {
        general: { opening: 1, closing: 130 },
        ews: { opening: 131, closing: 180 },
        obc: { opening: 181, closing: 330 },
        sc: { opening: 331, closing: 530 },
        st: { opening: 531, closing: 730 },
      },
      seats: 820,
      foundedYear: 1959,
    },
    {
      name: 'IIT Kanpur',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-kanpur.jpeg',
      ranks: {
        general: { opening: 1, closing: 150 },
        ews: { opening: 151, closing: 200 },
        obc: { opening: 201, closing: 350 },
        sc: { opening: 351, closing: 550 },
        st: { opening: 551, closing: 750 },
      },
      seats: 800,
      foundedYear: 1959,
    },
    {
      name: 'IIT Kharagpur',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-kharagpur.jpg',
      ranks: {
        general: { opening: 1, closing: 170 },
        ews: { opening: 171, closing: 220 },
        obc: { opening: 221, closing: 370 },
        sc: { opening: 371, closing: 570 },
        st: { opening: 571, closing: 770 },
      },
      seats: 950,
      foundedYear: 1951,
    },
    {
      name: 'IIT Roorkee',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-roorkee.jpg',
      ranks: {
        general: { opening: 150, closing: 300 },
        ews: { opening: 301, closing: 350 },
        obc: { opening: 351, closing: 500 },
        sc: { opening: 501, closing: 700 },
        st: { opening: 701, closing: 900 },
      },
      seats: 800,
      foundedYear: 1847,
    },
    {
      name: 'IIT Guwahati',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-guwahati.webp',
      ranks: {
        general: { opening: 200, closing: 350 },
        ews: { opening: 351, closing: 400 },
        obc: { opening: 401, closing: 550 },
        sc: { opening: 551, closing: 750 },
        st: { opening: 751, closing: 950 },
      },
      seats: 700,
      foundedYear: 1994,
    },
    {
      name: 'IIT Hyderabad',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-hydrabad.jpeg',
      ranks: {
        general: { opening: 250, closing: 400 },
        ews: { opening: 401, closing: 450 },
        obc: { opening: 451, closing: 600 },
        sc: { opening: 601, closing: 800 },
        st: { opening: 801, closing: 1000 },
      },
      seats: 650,
      foundedYear: 2008,
    },
    {
      name: 'IIT Indore',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-indore.jpg',
      ranks: {
        general: { opening: 300, closing: 450 },
        ews: { opening: 451, closing: 500 },
        obc: { opening: 501, closing: 650 },
        sc: { opening: 651, closing: 850 },
        st: { opening: 851, closing: 1050 },
      },
      seats: 600,
      foundedYear: 2009,
    },
    {
      name: 'IIT (BHU) Varanasi',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-bhu.jpg',
      ranks: {
        general: { opening: 350, closing: 500 },
        ews: { opening: 501, closing: 550 },
        obc: { opening: 551, closing: 700 },
        sc: { opening: 701, closing: 900 },
        st: { opening: 901, closing: 1100 },
      },
      seats: 750,
      foundedYear: 1919,
    },
    {
      name: 'IIT Bhilai',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-bhilai.jpg',
      ranks: {
        general: { opening: 400, closing: 550 },
        ews: { opening: 551, closing: 600 },
        obc: { opening: 601, closing: 750 },
        sc: { opening: 751, closing: 950 },
        st: { opening: 951, closing: 1150 },
      },
      seats: 300,
      foundedYear: 2016,
    },
    {
      name: 'IIT Bhubaneswar',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-bhubaneswar.jpg',
      ranks: {
        general: { opening: 450, closing: 600 },
        ews: { opening: 601, closing: 650 },
        obc: { opening: 651, closing: 800 },
        sc: { opening: 801, closing: 1000 },
        st: { opening: 1001, closing: 1200 },
      },
      seats: 550,
      foundedYear: 2008,
    },
    {
      name: 'IIT Dharwad',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-dharwad.jpg',
      ranks: {
        general: { opening: 500, closing: 650 },
        ews: { opening: 651, closing: 700 },
        obc: { opening: 701, closing: 850 },
        sc: { opening: 851, closing: 1050 },
        st: { opening: 1051, closing: 1250 },
      },
      seats: 250,
      foundedYear: 2016,
    },
    {
      name: 'IIT Gandhinagar',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-gandhinagar.webp',
      ranks: {
        general: { opening: 550, closing: 700 },
        ews: { opening: 701, closing: 750 },
        obc: { opening: 751, closing: 900 },
        sc: { opening: 901, closing: 1100 },
        st: { opening: 1101, closing: 1300 },
      },
      seats: 500,
      foundedYear: 2008,
    },
    {
      name: 'IIT Goa',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-goa.jpeg',
      ranks: {
        general: { opening: 600, closing: 750 },
        ews: { opening: 751, closing: 800 },
        obc: { opening: 801, closing: 950 },
        sc: { opening: 951, closing: 1150 },
        st: { opening: 1151, closing: 1350 },
      },
      seats: 200,
      foundedYear: 2016,
    },
    {
      name: 'IIT Jammu',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-jammu.jpg',
      ranks: {
        general: { opening: 650, closing: 800 },
        ews: { opening: 801, closing: 850 },
        obc: { opening: 851, closing: 1000 },
        sc: { opening: 1001, closing: 1200 },
        st: { opening: 1201, closing: 1400 },
      },
      seats: 300,
      foundedYear: 2016,
    },
    {
      name: 'IIT Jodhpur',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-jodhpur.jpg',
      ranks: {
        general: { opening: 700, closing: 850 },
        ews: { opening: 851, closing: 900 },
        obc: { opening: 901, closing: 1050 },
        sc: { opening: 1051, closing: 1250 },
        st: { opening: 1251, closing: 1450 },
      },
      seats: 450,
      foundedYear: 2008,
    },
    {
      name: 'IIT Mandi',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-mandi.jpeg',
      ranks: {
        general: { opening: 750, closing: 900 },
        ews: { opening: 901, closing: 950 },
        obc: { opening: 951, closing: 1100 },
        sc: { opening: 1101, closing: 1300 },
        st: { opening: 1301, closing: 1500 },
      },
      seats: 400,
      foundedYear: 2009,
    },
    {
      name: 'IIT Palakkad',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-palakkad.jpg',
      ranks: {
        general: { opening: 800, closing: 950 },
        ews: { opening: 951, closing: 1000 },
        obc: { opening: 1001, closing: 1150 },
        sc: { opening: 1151, closing: 1350 },
        st: { opening: 1351, closing: 1550 },
      },
      seats: 350,
      foundedYear: 2015,
    },
    {
      name: 'IIT Patna',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-patna.jpeg',
      ranks: {
        general: { opening: 850, closing: 1000 },
        ews: { opening: 1001, closing: 1050 },
        obc: { opening: 1051, closing: 1200 },
        sc: { opening: 1201, closing: 1400 },
        st: { opening: 1401, closing: 1600 },
      },
      seats: 500,
      foundedYear: 2008,
    },
    {
      name: 'IIT Ropar',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-ropar.webp',
      ranks: {
        general: { opening: 900, closing: 1050 },
        ews: { opening: 1051, closing: 1100 },
        obc: { opening: 1101, closing: 1250 },
        sc: { opening: 1251, closing: 1450 },
        st: { opening: 1451, closing: 1650 },
      },
      seats: 450,
      foundedYear: 2008,
    },
    {
      name: 'IIT Tirupati',
      type: 'Indian Institute of Technology',
      image: '/assets/iit-tirupati.webp',
      ranks: {
        general: { opening: 950, closing: 1100 },
        ews: { opening: 1101, closing: 1150 },
        obc: { opening: 1151, closing: 1300 },
        sc: { opening: 1301, closing: 1500 },
        st: { opening: 1501, closing: 1700 },
      },
      seats: 300,
      foundedYear: 2015,
    },
];
  
function IITColleges() {
    const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeSelect = (event) => {
    const college = iitColleges.find(c => c.name === event.target.value);
    setSelectedCollege(college);
  };

  return (
    <>
    <div className="container mt-5 heading" data-aos="fade-up">
        <h2 className="text-center mb-4">Top IITs for JEE Advanced</h2>
        <p className='text-center'>
            Welcome to our comprehensive guide on Indian Institutes of Technology (IITs).
            
        </p>
        <p className='text-center'>
            <strong>"Please note that the rank data provided is approximate and may vary from year to year. Actual cutoff ranks can change based on factors such as the number of applicants, available seats, and overall competition in a given year."</strong>
        </p>
        <div className="row justify-content-center mb-4">
            <div className="col-md-6" style={{fontFamily:"'Kotta One', serif"}}>
                <select
                    className="form-select"
                    onChange={handleCollegeSelect}
                    defaultValue=""
                >
                    <option value="" disabled>Select an IIT</option>
                    {iitColleges.map((college, index) => (
                        <option key={index} value={college.name}>
                            {college.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        {selectedCollege && (
            <div className="row justify-content-center heading">
                <div className="col-md-8" style={{fontFamily:"'Kotta One', serif"}}>
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
                            
                            <div className="d-flex justify-content-around my-4">
                                <div className="text-center">
                                    <FaUniversity size={30} color="#007bff" />
                                    <p className="mt-2">Founded: {selectedCollege.foundedYear}</p>
                                </div>
                                <div className="text-center">
                                    <FaUsers size={30} color="#28a745" />
                                    <p className="mt-2">Total Seats: {selectedCollege.seats}</p>
                                </div>
                                <div className="text-center">
                                    <FaGraduationCap size={30} color="#ffc107" />
                                    <p className="mt-2">JEE Advanced Required</p>
                                </div>
                            </div>

                            <h6 className="mt-4">JEE Advanced Rank Information</h6>
                            <table className="table table-striped">
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
        )}
    </div>
    </>
  )
}

export default IITColleges
