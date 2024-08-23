import React from 'react'
import { useState } from 'react';
import { FaUserMd, FaBed, FaGraduationCap } from 'react-icons/fa';
const medicalColleges = [
    {
      name: 'AIIMS New Delhi',
      type: 'AIIMS',
      image: '/assets/aiims delhi.jpg',
      ranks: {
        general: { opening: 1, closing: 150 },
        ews: { opening: 151, closing: 200 },
        obc: { opening: 201, closing: 400 },
        sc: { opening: 401, closing: 600 },
        st: { opening: 601, closing: 800 },
      },
      seats: 150,
      foundedYear: 1956,
    },
    {
      name: 'AIIMS Bhopal',
      type: 'AIIMS',
      image: '/assets/aiims bhopal.jpg',
      ranks: {
        general: { opening: 300, closing: 600 },
        ews: { opening: 601, closing: 800 },
        obc: { opening: 801, closing: 1200 },
        sc: { opening: 1201, closing: 1600 },
        st: { opening: 1601, closing: 2000 },
      },
      seats: 100,
      foundedYear: 2012,
    },
    {
      name: 'AIIMS Bhubaneswar',
      type: 'AIIMS',
      image: '/assets/aiims bhuwneshwar.jpg',
      ranks: {
        general: { opening: 350, closing: 650 },
        ews: { opening: 651, closing: 850 },
        obc: { opening: 851, closing: 1250 },
        sc: { opening: 1251, closing: 1650 },
        st: { opening: 1651, closing: 2050 },
      },
      seats: 100,
      foundedYear: 2012,
    },
    {
      name: 'AIIMS Jodhpur',
      type: 'AIIMS',
      image: '/assets/aiims jodhpur.jpg',
      ranks: {
        general: { opening: 400, closing: 700 },
        ews: { opening: 701, closing: 900 },
        obc: { opening: 901, closing: 1300 },
        sc: { opening: 1301, closing: 1700 },
        st: { opening: 1701, closing: 2100 },
      },
      seats: 100,
      foundedYear: 2012,
    },
    {
      name: 'AIIMS Patna',
      type: 'AIIMS',
      image: '/assets/aiims patna.jpg',
      ranks: {
        general: { opening: 450, closing: 750 },
        ews: { opening: 751, closing: 950 },
        obc: { opening: 951, closing: 1350 },
        sc: { opening: 1351, closing: 1750 },
        st: { opening: 1751, closing: 2150 },
      },
      seats: 100,
      foundedYear: 2012,
    },
    {
      name: 'AIIMS Raipur',
      type: 'AIIMS',
      image: '/assets/aiims raipur.jpg',
      ranks: {
        general: { opening: 500, closing: 800 },
        ews: { opening: 801, closing: 1000 },
        obc: { opening: 1001, closing: 1400 },
        sc: { opening: 1401, closing: 1800 },
        st: { opening: 1801, closing: 2200 },
      },
      seats: 100,
      foundedYear: 2012,
    },
    {
      name: 'AIIMS Rishikesh',
      type: 'AIIMS',
      image: '/assets/aiims rishikesh.jpg',
      ranks: {
        general: { opening: 550, closing: 850 },
        ews: { opening: 851, closing: 1050 },
        obc: { opening: 1051, closing: 1450 },
        sc: { opening: 1451, closing: 1850 },
        st: { opening: 1851, closing: 2250 },
      },
      seats: 100,
      foundedYear: 2012,
    },
    {
      name: 'AIIMS Guntur',
      type: 'AIIMS',
      image: '/assets/aiims guntur.jpg',
      ranks: {
        general: { opening: 600, closing: 900 },
        ews: { opening: 901, closing: 1100 },
        obc: { opening: 1101, closing: 1500 },
        sc: { opening: 1501, closing: 1900 },
        st: { opening: 1901, closing: 2300 },
      },
      seats: 50,
      foundedYear: 2018,
    },
    {
      name: 'AIIMS Nagpur',
      type: 'AIIMS',
      image: '/assets/aiims nagpur.jpg',
      ranks: {
        general: { opening: 650, closing: 950 },
        ews: { opening: 951, closing: 1150 },
        obc: { opening: 1151, closing: 1550 },
        sc: { opening: 1551, closing: 1950 },
        st: { opening: 1951, closing: 2350 },
      },
      seats: 50,
      foundedYear: 2018,
    },
    {
      name: 'AIIMS Bathinda',
      type: 'AIIMS',
      image: '/assets/aiims bathinda.jpg',
      ranks: {
        general: { opening: 700, closing: 1000 },
        ews: { opening: 1001, closing: 1200 },
        obc: { opening: 1201, closing: 1600 },
        sc: { opening: 1601, closing: 2000 },
        st: { opening: 2001, closing: 2400 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Bibinagar',
      type: 'AIIMS',
      image: '/assets/aiims bibinagar.png',
      ranks: {
        general: { opening: 750, closing: 1050 },
        ews: { opening: 1051, closing: 1250 },
        obc: { opening: 1251, closing: 1650 },
        sc: { opening: 1651, closing: 2050 },
        st: { opening: 2051, closing: 2450 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    
    {
      name: 'AIIMS Deoghar',
      type: 'AIIMS',
      image: '/assets/aiims deoghar.jpg',
      ranks: {
        general: { opening: 850, closing: 1150 },
        ews: { opening: 1151, closing: 1350 },
        obc: { opening: 1351, closing: 1750 },
        sc: { opening: 1751, closing: 2150 },
        st: { opening: 2151, closing: 2550 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Gorakhpur',
      type: 'AIIMS',
      image: '/assets/aiims gorakhpur.jpg',
      ranks: {
        general: { opening: 900, closing: 1200 },
        ews: { opening: 1201, closing: 1400 },
        obc: { opening: 1401, closing: 1800 },
        sc: { opening: 1801, closing: 2200 },
        st: { opening: 2201, closing: 2600 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Guwahati',
      type: 'AIIMS',
      image: '/assets/aiims guwahati.webp',
      ranks: {
        general: { opening: 950, closing: 1250 },
        ews: { opening: 1251, closing: 1450 },
        obc: { opening: 1451, closing: 1850 },
        sc: { opening: 1851, closing: 2250 },
        st: { opening: 2251, closing: 2650 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Kalyani',
      type: 'AIIMS',
      image: '/assets/aiims kalyani.jpg',
      ranks: {
        general: { opening: 1000, closing: 1300 },
        ews: { opening: 1301, closing: 1500 },
        obc: { opening: 1501, closing: 1900 },
        sc: { opening: 1901, closing: 2300 },
        st: { opening: 2301, closing: 2700 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Mangalagiri',
      type: 'AIIMS',
      image: '/assets/aiims mangalagiri.jpg',
      ranks: {
        general: { opening: 1050, closing: 1350 },
        ews: { opening: 1351, closing: 1550 },
        obc: { opening: 1551, closing: 1950 },
        sc: { opening: 1951, closing: 2350 },
        st: { opening: 2351, closing: 2750 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    
    {
      name: 'AIIMS Rajkot',
      type: 'AIIMS',
      image: '/assets/aiims rajkot.jpg',
      ranks: {
        general: { opening: 1150, closing: 1450 },
        ews: { opening: 1451, closing: 1650 },
        obc: { opening: 1651, closing: 2050 },
        sc: { opening: 2051, closing: 2450 },
        st: { opening: 2451, closing: 2850 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Raebareli',
      type: 'AIIMS',
      image: '/assets/aiims raibareili.jpg',
      ranks: {
        general: { opening: 1200, closing: 1500 },
        ews: { opening: 1501, closing: 1700 },
        obc: { opening: 1701, closing: 2100 },
        sc: { opening: 2101, closing: 2500 },
        st: { opening: 2501, closing: 2900 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Vijaypur',
      type: 'AIIMS',
      image: '/assets/aiims vijaypur.jpg',
      ranks: {
        general: { opening: 1250, closing: 1550 },
        ews: { opening: 1551, closing: 1750 },
        obc: { opening: 1751, closing: 2150 },
        sc: { opening: 2151, closing: 2550 },
        st: { opening: 2551, closing: 2950 },
      },
      seats: 50,
      foundedYear: 2019,
    },
    {
      name: 'AIIMS Bilaspur',
      type: 'AIIMS',
      image: '/assets/aiims bilaspur.webp',
      ranks: {
        general: { opening: 1300, closing: 1600 },
        ews: { opening: 1601, closing: 1800 },
        obc: { opening: 1801, closing: 2200 },
        sc: { opening: 2201, closing: 2600 },
        st: { opening: 2601, closing: 3000 },
      },
      seats: 50,
      foundedYear: 2020,
    },
    {
        name: 'Kasturba Medical College, Mangalore',
        type: 'Private Medical College',
        image: '/assets/kasturba college.jpg',
        ranks: {
          general: { opening: 1501, closing: 3200 },
          ews: { opening: 3201, closing: 3500 },
          obc: { opening: 3501, closing: 4000 },
          sc: { opening: 4001, closing: 4500 },
          st: { opening: 4501, closing: 5000 },
        },
        seats: 250,
        foundedYear: 1955,
      },
      {
        name: 'SRM Medical College Hospital and Research Centre, Chennai',
        type: 'Private Medical College',
        image: '/assets/srm college.jpg',
        ranks: {
          general: { opening: 3201, closing: 4500 },
          ews: { opening: 4501, closing: 4800 },
          obc: { opening: 4801, closing: 5300 },
          sc: { opening: 5301, closing: 5800 },
          st: { opening: 5801, closing: 6300 },
        },
        seats: 150,
        foundedYear: 2005,
      },
      {
        name: 'Sri Ramachandra Medical College, Chennai',
        type: 'Private Medical College',
        image: '/assets/shri ram college.jpg',
        ranks: {
          general: { opening: 4501, closing: 5800 },
          ews: { opening: 5801, closing: 6100 },
          obc: { opening: 6101, closing: 6600 },
          sc: { opening: 6601, closing: 7100 },
          st: { opening: 7101, closing: 7600 },
        },
        seats: 150,
        foundedYear: 1985,
      },
      {
        name: 'Mahatma Gandhi Medical College and Research Institute, Pondicherry',
        type: 'Private Medical College',
        image: '/assets/mahatma college.jpg',
        ranks: {
          general: { opening: 5801, closing: 7000 },
          ews: { opening: 7001, closing: 7300 },
          obc: { opening: 7301, closing: 7800 },
          sc: { opening: 7801, closing: 8300 },
          st: { opening: 8301, closing: 8800 },
        },
        seats: 150,
        foundedYear: 2001,
      },
      {
        name: 'Christian Medical College, Ludhiana',
        type: 'Private Medical College',
        image: '/assets/christian college.jpg',
        ranks: {
          general: { opening: 7001, closing: 8500 },
          ews: { opening: 8501, closing: 8800 },
          obc: { opening: 8801, closing: 9300 },
          sc: { opening: 9301, closing: 9800 },
          st: { opening: 9801, closing: 10300 },
        },
        seats: 75,
        foundedYear: 1894,
      },
      {
        name: 'Jawaharlal Nehru Medical College, Aligarh',
        type: 'Government Medical College',
        image: '/assets/nehru medical college.webp',
        ranks: {
          general: { opening: 10301, closing: 12000 },
          ews: { opening: 12001, closing: 12300 },
          obc: { opening: 12301, closing: 12800 },
          sc: { opening: 12801, closing: 13300 },
          st: { opening: 13301, closing: 13800 },
        },
        seats: 150,
        foundedYear: 1962,
      },
      {
        name: 'Institute of Medical Sciences, BHU Varanasi',
        type: 'Government Medical College',
        image: '/assets/ims bhu.webp',
        ranks: {
          general: { opening: 12001, closing: 13500 },
          ews: { opening: 13501, closing: 13800 },
          obc: { opening: 13801, closing: 14300 },
          sc: { opening: 14301, closing: 14800 },
          st: { opening: 14801, closing: 15300 },
        },
        seats: 150,
        foundedYear: 1960,
      },
      {
        name: 'Stanley Medical College, Chennai',
        type: 'Government Medical College',
        image: '/assets/stanley college.jpg',
        ranks: {
          general: { opening: 13501, closing: 15000 },
          ews: { opening: 15001, closing: 15300 },
          obc: { opening: 15301, closing: 15800 },
          sc: { opening: 15801, closing: 16300 },
          st: { opening: 16301, closing: 16800 },
        },
        seats: 250,
        foundedYear: 1938,
      },
];
  
function NeetColleges() {
    const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeSelect = (event) => {
    const college = medicalColleges.find(c => c.name === event.target.value);
    setSelectedCollege(college);
  };

  return (
    <>
    <div className="container mt-5 heading" data-aos="fade-up">
      <h2 className="text-center mb-4">Top Medical Colleges for NEET</h2>
      <p className='text-center'>
        Welcome to our comprehensive guide on top medical colleges in India.
        
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
            <option value="" disabled>Select a medical college</option>
            {medicalColleges.map((college, index) => (
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
                    <FaUserMd size={30} color="#007bff" />
                    <p className="mt-2">Founded: {selectedCollege.foundedYear}</p>
                  </div>
                  <div className="text-center">
                    <FaBed size={30} color="#28a745" />
                    <p className="mt-2">MBBS Seats: {selectedCollege.seats}</p>
                  </div>
                  <div className="text-center">
                    <FaGraduationCap size={30} color="#ffc107" />
                    <p className="mt-2">NEET Required</p>
                  </div>
                </div>

                <h6 className="mt-4">NEET Rank Information</h6>
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

export default NeetColleges
