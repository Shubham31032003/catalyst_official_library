import React from 'react'
import { useState } from 'react';
function JeePdfDownload() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('all');

    const jeeCornerData = [
        {
            id: 1,
            title: 'JEE MATHEMATICS',
            pdfs: [
                { name: 'Arihant Algebra', pdfPath: 'https://drive.google.com/file/d/1MVbILFljcSEMmsxTGwweSQ92fqJ7zlEr/view?usp=drive_link', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://amzn.to/49VJTL8' },
                { name: 'Arihant Trignometry', pdfPath: 'https://drive.google.com/file/d/1N2E0N2CJeHxR5m8hQXuovgWOzFhjA6wy/view?usp=drive_link', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://amzn.to/49VJTL8' },
                { name: 'Arihant Coordinate Geometry ', pdfPath: 'https://drive.google.com/file/d/1N9i8nO90RjTyvu9aQrMzMNufIIX9QzR4/view?usp=drive_link', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://amzn.to/49VJTL8' },
                { name: 'Arihant Differential Calculus', pdfPath: 'https://drive.google.com/file/d/1MtJ8wIPQrZ_Pt7i7TL9846Zl5xJcuR4E/view?usp=drive_link', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://amzn.to/49VJTL8' },
                { name: 'Arihant Integral Calculus', pdfPath: 'https://drive.google.com/file/d/1MrDzUnAoGA-hl7yAnLNvkYN5B5Q7mIZz/view?usp=drive_link', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://amzn.to/49VJTL8' },
                { name: 'Arihant Vector & 3D', pdfPath: 'https://drive.google.com/file/d/1MjKF0tm_cnSTnKN9A-onxwT3oiOSvw2M/view?usp=drive_link', imagePath: '/assets/arihant_maths_img.jpg', buyNowLink: 'https://amzn.to/49VJTL8' },

                { name: 'Cengage Trignometry', pdfPath: 'https://drive.google.com/file/d/1HEAJ0xTpMmaZSbD-tN0_UMe7AxHWIBAR/view?usp=drive_link', imagePath: '/assets/cengage_maths_img.jpg', buyNowLink: 'https://amzn.to/3Tfzkx8' },
                { name: 'Cengage Algebra', pdfPath: 'https://drive.google.com/file/d/1XAXaLX6x0Zp48U7OQy8dGriVi_WLX05_/view?usp=drive_link', imagePath: '/assets/cengage_maths_img.jpg', buyNowLink: 'https://amzn.to/3Tfzkx8' },
                { name: 'Cengage Coordinate Geometry', pdfPath: 'https://drive.google.com/file/d/1DtKnOjfOYYJqnj1cON1VtA-b4mLFHeUC/view?usp=drive_link', imagePath: '/assets/cengage_maths_img.jpg', buyNowLink: 'https://amzn.to/3Tfzkx8' },
            ],
        },
        {
            id: 2,
            title: 'JEE PHYSICS',
            pdfs: [
                { name: 'Cengage Mechanics 1', pdfPath: 'https://drive.google.com/file/d/1HVeLD0XnbC5q-Me4fYA74n4UflIFyGb1/view?usp=drive_link', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://amzn.to/3P37EZR' },
                { name: 'Cengage Mechanics 2', pdfPath: 'https://drive.google.com/file/d/1HZsx5N1NNysbhoeQLvOU1J4IA7NNagEq/view?usp=drive_link', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://amzn.to/3P37EZR' },
                { name: 'Cengage waves and Thermodynamics', pdfPath: 'https://drive.google.com/file/d/1HazXT5FMc_QZwzTH56UjPToIL0f_cKBs/view?usp=drive_link', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://amzn.to/3P37EZR' },
                { name: 'Cengage Electrostatics & Current Electricity ', pdfPath: 'https://drive.google.com/file/d/1HOfY5_URC6L9JEnDRJ57IFZ7SnJYMog4/view?usp=drive_link', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://amzn.to/3P37EZR' },
                { name: 'Cengage Magnetism & EMI', pdfPath: 'https://drive.google.com/file/d/1HU8JW4iScA9ouC8cLU5aL00lw3QlEMoq/view?usp=drive_link', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://amzn.to/3P37EZR' },
                { name: 'Cengage Optics and Modern Physics', pdfPath: 'https://drive.google.com/file/d/1Hg877RiKYQPJJ9X2LrPtSD-Auaht7KaU/view?usp=drive_link', imagePath: '/assets/cengane_physics_img.jpg', buyNowLink: 'https://amzn.to/3P37EZR' },

                { name: 'ErrorLess Physics', pdfPath: 'https://drive.google.com/file/d/1HKKCObXrpn1TlRu4WHINWvlUV7ShOvX1/view?usp=drive_link', imagePath: '/assets/errorless_physics_img.jpg', buyNowLink: 'https://amzn.to/48DHROX' },

                { name: 'DC Pandey Mechanics 1', pdfPath: 'https://drive.google.com/file/d/1WICcQbph47F2W1maE748q7q7pUw8LYjG/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Mechanics 2', pdfPath: 'https://drive.google.com/file/d/1WHyHCO22NXNZcvFdZa25_aN1_TKcpitl/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Waves & Thermodynamics', pdfPath: 'https://drive.google.com/file/d/1WLZ7peZgcPPs48eDJV4FSMShuGMNpm_O/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Electricity & Magnetism ', pdfPath: 'https://drive.google.com/file/d/1W2xzh29zUr9qUabCIlwcHvZkKYRkll1m/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Optics & Modern Physics ', pdfPath: 'https://drive.google.com/file/d/1WM0KYjwalXC6x4dw-87LKLu1DAsZ-V_P/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },

                // { name: 'Physics Galaxy Mechanics', pdfPath: 'https://drive.google.com/file/d/1IT-fXWw4MbbChqyqqVHUNF-PCGlQbLE5/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                // { name: 'Physics Galaxy Thermo-D', pdfPath: 'https://drive.google.com/file/d/1I8zrp6PYPkRJY7TGzlgfLWLaRKQmhLW1/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                // { name: 'Physics Galaxy Electrostatics & Current', pdfPath: 'https://drive.google.com/file/d/1qSB9xENrUodTG480B__kEUOo7sbPfhTh/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                // { name: 'Physics Galaxay Magnetism & AC ', pdfPath: 'https://drive.google.com/file/d/1HyDJNDy8-XnLNuX-6K5GSoquAiO_cBVV/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                // { name: 'Physics Galaxy Optics & Modern Physics', pdfPath: 'https://drive.google.com/file/d/1IXMSZVUGmKZDObeCA9_Js1Bfgt9nP9hX/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
            ],
        },
        {
            id: 3,
            title: 'JEE CHEMISTRY',
            pdfs: [
                { name: 'GRB Physical Chemistry', pdfPath: 'https://drive.google.com/file/d/1HxS-ZmZwGIxUZo6xT2Hgb_LnQ2jp389M/view?usp=drive_link', imagePath: '/assets/grb_physical_chem.jpg', buyNowLink: 'https://amzn.to/3IhiXdh' },
                { name: 'Physical Chemistry By N.Awasthi', pdfPath: 'https://drive.google.com/file/d/1I7AEwK92tSQwiINFIzhTjzQaEQzUKAI-/view?usp=drive_link', imagePath: '/assets/N_awasthi_chem_img.jpg', buyNowLink: 'https://amzn.to/3V0mFiT' },
                { name: 'Physical Chemistry By Neeraj Kumar', pdfPath: 'https://drive.google.com/file/d/1clk208D0rrZt5H_Q0Bp_QtVuesZuFyib/view?usp=drive_link', imagePath: '/assets/neeraj_kumar_physical_chem_img.jpg', buyNowLink: 'https://amzn.to/3V3h2jV' },

                { name: 'GRB Organic Chemistry', pdfPath: 'https://drive.google.com/file/d/1HvvgyJtz-QcJ6bh14xNRJvm_yDMmRS3h/view?usp=drive_link', imagePath: '/assets/grb organic.jpg', buyNowLink: 'https://amzn.to/3wKujUj' },
                // { name: 'Organic Chemistry By MS Chauhan', pdfPath: 'https://drive.google.com/file/d/1XFon5hVAORIIwqQP_Rw8BnBXowmq4ihN/view?usp=drive_link', imagePath: '/assets/ms_chauhan_org_img.jpg', buyNowLink: 'https://amzn.to/3wKuA9N' },
                { name: 'Organic Chemistry By Himanshu Pandey', pdfPath: 'https://drive.google.com/file/d/1I5sTuj7MORsQK0JE0q1CDJ-DiPAuBItM/view?usp=drive_link', imagePath: '/assets/himanshu_pandey_organic_img.jpg', buyNowLink: 'https://amzn.to/4bTYaKj' },

                { name: 'GRB Inorganic Chemistry', pdfPath: 'https://drive.google.com/file/d/1Hl53I9d-KsDbxx6efMNHvIi6_2bbZKz0/view?usp=drive_link', imagePath: '/assets/grb_inorganic_img.jpg', buyNowLink: 'https://amzn.to/3PqpMNF' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(Part 1)', pdfPath: 'https://drive.google.com/file/d/1X9EwgzCX0qsyllCOCvfghxdR9j5EBu5q/view?usp=drive_link', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://amzn.to/3P1RW14' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(part2)', pdfPath: 'https://drive.google.com/file/d/1X9x5QhSdW9ylJWJ72-AlKhEq6vRj_ffQ/view?usp=drive_link', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://amzn.to/3P1RW14' },
                // { name: 'Inorganic Chemistry By J.D Lee', pdfPath: 'https://drive.google.com/file/d/1_M4u40KrP8dLJ0b_p_ZAND47KB2tep9h/view?usp=drive_link', imagePath: '/assets/jd_lee_img.jpg', buyNowLink: 'https://amzn.to/49TnNsL' },
                // { name: 'Inorganic Chemistry by Navneesh Bansal', pdfPath: 'https://drive.google.com/file/d/1Wflnuu_QebPGsYrkBGXkyemcSKHsj9q2/view?usp=drive_link', imagePath: '/assets/navneesh_bansal_img.jpg', buyNowLink: 'https://amzn.to/49BtVpS' },
            ],
        },
        {
            id: 4,
            title: 'PREVIOUS YEAR PAPERS',
            pdfs: [
                { name: 'JEE 2014', pdfPath: 'https://drive.google.com/file/d/1OkeRLohMgjzEzNteo6CKWD_WAfo95Cnc/view?usp=drive_link' },
                { name: 'JEE 2015', pdfPath: 'https://drive.google.com/file/d/1Olz5aYs4wR1dVNjGnXz9Pt1e4HaPdLvA/view?usp=drive_link' },
                { name: 'JEE 2016', pdfPath: 'https://drive.google.com/file/d/1OoRNqUV7ASPcnwBaO_yNtY5VZa656EYB/view?usp=sharing' },
                { name: 'JEE 2017', pdfPath: 'https://drive.google.com/file/d/1OsJLXI9KVU-Xc2dqynzbA114QHsv3nLg/view?usp=sharing' },
                { name: 'JEE 2018', pdfPath: 'https://drive.google.com/file/d/1P_zkHcsPBoEWO9_-qoXGRw-ANma0vbiC/view?usp=sharing' },
                { name: 'JEE 2019', pdfPath: 'https://drive.google.com/file/d/1PBfjoDZkUZ9FytP-jagKLukJznzZj2LT/view?usp=sharing' },
                { name: 'JEE 2020', pdfPath: 'https://drive.google.com/file/d/1PIicrHNiUM-o0MFUA785UgnGKH0IRTYA/view?usp=drive_link' },
            ],
        },
        {
            id: 5,
            title: 'KOTA KE NOTES',
            pdfs: [
                { name: 'Coming Soon', pdfPath: '' }
            ],
        },
        
        
    ];

    const handleDownload = (pdfPath, pdfName) => {
        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = `${pdfName}.pdf`;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.click();
    };

    const filteredData = jeeCornerData
        .filter(section => selectedSubject === 'all' || section.title.toLowerCase().includes(selectedSubject.toLowerCase()))
        .map(section => ({
            ...section,
            pdfs: section.pdfs.filter(pdf => 
                pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }))
        .filter(section => section.pdfs.length > 0);


    return (
        <>
            <div className="container mt-5 accordion_container heading" data-aos="fade-up">
                <h2 className="text-center mb-4">Study Material</h2>
                <div className="mb-3 row">
                    <div className="col-md-12">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search for books..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="accordion" id="jeeAccordion" style={{borderRadius:'5px', boxShadow:'0px 2px 6px black'}}>
                    {filteredData.map((section) => (
                        <div className="accordion-item" key={section.id}>
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target={`#collapse${section.id}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${section.id}`}
                                >
                                    {section.title}
                                </button>
                            </h2>
                            <div id={`collapse${section.id}`} className="accordion-collapse collapse" data-bs-parent="#jeeAccordion">
                                <div className="accordion-body">
                                    {section.id === 4 ? (
                                        // Previous Year Papers section
                                        <div className="row justify-content-center">
                                            {section.pdfs.map((pdf, index) => (
                                                <div key={`${section.id}-${index}`} className="col-md-4 col-sm-6 mb-3" style={{fontFamily:"'Kotta One', serif"}}>
                                                    <button
                                                        className="btn w-100"
                                                        onClick={() => handleDownload(pdf.pdfPath, pdf.name)}
                                                        style={{ backgroundColor: '#bb590e', color: 'white' }}
                                                    >
                                                        {pdf.name}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : section.id === 5 ? (
                                        // Kota ke Notes section
                                        <div className="text-center">
                                            <h3>Coming Soon...</h3>
                                        </div>
                                    ): (
                                        // Other sections (Mathematics, Physics, Chemistry)
                                        section.pdfs.map((pdf, index) => (
                                            <div key={`${section.id}-${index}`} className="row mb-3 align-items-center">
                                                <div className="col-md-2 col-sm-3 mb-2 mb-sm-0">
                                                    <img 
                                                        src={pdf.imagePath} 
                                                        alt={`${pdf.name} cover`} 
                                                        className="img-fluid rounded-circle" 
                                                        style={{ 
                                                            width: '60px', 
                                                            height: '60px', 
                                                            border: '2px solid #bb590e',
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-md-4 col-sm-9 mb-2 mb-sm-0">
                                                    <p>{pdf.name}</p>
                                                </div>
                                                <div className="col-md-6 col-sm-12 mt-2">
                                                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                        <button
                                                            className="btn mb-2 mb-sm-0 custom_button"
                                                            onClick={() => handleDownload(pdf.pdfPath, pdf.name)}
                                                            style={{ backgroundColor: '#bb590e', color: 'white' }}
                                                        >
                                                            Download PDF
                                                        </button>
                                                        <a 
                                                            className="btn custom_button"
                                                            href={pdf.buyNowLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{ backgroundColor: '#bb590e', color: 'white' }}
                                                        >
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    
    
    
    )
}

export default JeePdfDownload