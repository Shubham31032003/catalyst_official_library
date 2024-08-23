import React from 'react'
import { useState } from 'react';
function AdvPdfDownload() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('all');

    const AdvCornerData = [
        {
            id: 1,
            title: 'ADV MATHEMATICS',
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
            title: 'ADV PHYSICS',
            pdfs: [
                
                { name: 'Physics Galaxy Mechanics', pdfPath: 'https://drive.google.com/file/d/1IT-fXWw4MbbChqyqqVHUNF-PCGlQbLE5/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                { name: 'Physics Galaxy Thermo-D', pdfPath: 'https://drive.google.com/file/d/1I8zrp6PYPkRJY7TGzlgfLWLaRKQmhLW1/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                { name: 'Physics Galaxy Electrostatics & Current', pdfPath: 'https://drive.google.com/file/d/1qSB9xENrUodTG480B__kEUOo7sbPfhTh/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                { name: 'Physics Galaxay Magnetism & AC ', pdfPath: 'https://drive.google.com/file/d/1HyDJNDy8-XnLNuX-6K5GSoquAiO_cBVV/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
                { name: 'Physics Galaxy Optics & Modern Physics', pdfPath: 'https://drive.google.com/file/d/1IXMSZVUGmKZDObeCA9_Js1Bfgt9nP9hX/view?usp=drive_link', imagePath: '/assets/galaxy_physics_img.jpg', buyNowLink: 'https://amzn.to/3Iih53J' },
            ],
        },
        {
            id: 3,
            title: 'ADV CHEMISTRY',
            pdfs: [
                // { name: 'GRB Physical Chemistry', pdfPath: 'https://drive.google.com/file/d/1HxS-ZmZwGIxUZo6xT2Hgb_LnQ2jp389M/view?usp=drive_link', imagePath: '/assets/grb_physical_chem.jpg', buyNowLink: 'https://amzn.to/3IhiXdh' },
                { name: 'Physical Chemistry By N.Awasthi', pdfPath: 'https://drive.google.com/file/d/1I7AEwK92tSQwiINFIzhTjzQaEQzUKAI-/view?usp=drive_link', imagePath: '/assets/N_awasthi_chem_img.jpg', buyNowLink: 'https://amzn.to/3V0mFiT' },
                { name: 'Physical Chemistry By Neeraj Kumar', pdfPath: 'https://drive.google.com/file/d/1clk208D0rrZt5H_Q0Bp_QtVuesZuFyib/view?usp=drive_link', imagePath: '/assets/neeraj_kumar_physical_chem_img.jpg', buyNowLink: 'https://amzn.to/3V3h2jV' },

                // { name: 'GRB Organic Chemistry', pdfPath: 'https://drive.google.com/file/d/1HvvgyJtz-QcJ6bh14xNRJvm_yDMmRS3h/view?usp=drive_link', imagePath: '/assets/grb organic.jpg', buyNowLink: 'https://amzn.to/3wKujUj' },
                { name: 'Organic Chemistry By MS Chauhan', pdfPath: 'https://drive.google.com/file/d/1XFon5hVAORIIwqQP_Rw8BnBXowmq4ihN/view?usp=drive_link', imagePath: '/assets/ms_chauhan_org_img.jpg', buyNowLink: 'https://amzn.to/3wKuA9N' },
                { name: 'Organic Chemistry By Himanshu Pandey', pdfPath: 'https://drive.google.com/file/d/1I5sTuj7MORsQK0JE0q1CDJ-DiPAuBItM/view?usp=drive_link', imagePath: '/assets/himanshu_pandey_organic_img.jpg', buyNowLink: 'https://amzn.to/4bTYaKj' },

                // { name: 'GRB Inorganic Chemistry', pdfPath: 'https://drive.google.com/file/d/1Hl53I9d-KsDbxx6efMNHvIi6_2bbZKz0/view?usp=drive_link', imagePath: '/assets/grb_inorganic_img.jpg', buyNowLink: 'https://amzn.to/3PqpMNF' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(Part 1)', pdfPath: 'https://drive.google.com/file/d/1X9EwgzCX0qsyllCOCvfghxdR9j5EBu5q/view?usp=drive_link', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://amzn.to/3P1RW14' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(part2)', pdfPath: 'https://drive.google.com/file/d/1X9x5QhSdW9ylJWJ72-AlKhEq6vRj_ffQ/view?usp=drive_link', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://amzn.to/3P1RW14' },
                { name: 'Inorganic Chemistry By J.D Lee', pdfPath: 'https://drive.google.com/file/d/1_M4u40KrP8dLJ0b_p_ZAND47KB2tep9h/view?usp=drive_link', imagePath: '/assets/jd_lee_img.jpg', buyNowLink: 'https://amzn.to/49TnNsL' },
                { name: 'Inorganic Chemistry by Navneesh Bansal', pdfPath: 'https://drive.google.com/file/d/1Wflnuu_QebPGsYrkBGXkyemcSKHsj9q2/view?usp=drive_link', imagePath: '/assets/navneesh_bansal_img.jpg', buyNowLink: 'https://amzn.to/49BtVpS' },
            ],
        },
        {
            id: 4,
            title: 'PREVIOUS YEAR PAPERS(PAPER1+PAPER2)',
            pdfs: [
                { name: 'ADV P1 2010', pdfPath: 'https://drive.google.com/file/d/1QKwLDs45IZy1b-5Kr027xilurYisNke9/view?usp=drive_link' },
                { name: 'ADV P2 2010', pdfPath: 'https://drive.google.com/file/d/1QhnPPhqRIjeBCIKCjboYepY3EW98bZ8L/view?usp=drive_link' },
                { name: 'ADV P1 2011', pdfPath: 'https://drive.google.com/file/d/1QI67ChSxSnPoCyYt6p-tMmkshxghu7zV/view?usp=drive_link' },
                { name: 'ADV P2 2011', pdfPath: 'https://drive.google.com/file/d/1QhdzSaSiLW6rD7Ry6yomp4b6GrIc-WLi/view?usp=drive_link' },
                { name: 'ADV P1 2012', pdfPath: 'https://drive.google.com/file/d/1QG4yKyg9VGJhpRPxhSwoAu0pipsYnAyX/view?usp=drive_link' },
                { name: 'ADV P2 2012', pdfPath: 'https://drive.google.com/file/d/1Qh-1cvmtSui0AL_V54oVaOhhBqdzF69Z/view?usp=drive_link' },
                { name: 'ADV P1 2013', pdfPath: 'https://drive.google.com/file/d/1QEdFn72Xw6BEQpa9B381ZJNsasJM46vi/view?usp=drive_link' },
                { name: 'ADV P2 2013', pdfPath: 'https://drive.google.com/file/d/1QeqE3_-RZPNLuk272UDYt6j-SYQ0bpjq/view?usp=drive_link' },
                { name: 'ADV P1 2014', pdfPath: 'https://drive.google.com/file/d/1QE-JTptQ58x_wzBrXOXtZEXvlPFpR2kP/view?usp=drive_link' },
                { name: 'ADV P2 2014', pdfPath: 'https://drive.google.com/file/d/1QbOlFlItJ4fiUA3JB3rqXSHBp-Yf0NgQ/view?usp=drive_link' },
                { name: 'ADV P1 2015', pdfPath: 'https://drive.google.com/file/d/1Q9zMZWpc9mOJQVx94XboSTkMQbAg_2Fa/view?usp=drive_link' },
                { name: 'ADV P2 2015', pdfPath: 'https://drive.google.com/file/d/1QanMQIqQaJb54a2d1xjETXk7EDQZNZIR/view?usp=drive_link' },
                { name: 'ADV P1 2016', pdfPath: 'https://drive.google.com/file/d/1Q8WXYeVR_Q-G6pKcDU9tF9_nh4A0ikzr/view?usp=drive_link' },
                { name: 'ADV P2 2016', pdfPath: 'https://drive.google.com/file/d/1QYnCNJEDi10e_ZIQ5t6npC50x9H7rbdx/view?usp=drive_link' },
                { name: 'ADV P1 2017', pdfPath: 'https://drive.google.com/file/d/1Q4Qo0F_rBq90ADorzs79_JMrmJlIYdsm/view?usp=drive_link' },
                { name: 'ADV P2 2017', pdfPath: 'https://drive.google.com/file/d/1Q4Qo0F_rBq90ADorzs79_JMrmJlIYdsm/view?usp=drive_link' },
                { name: 'ADV P1 2018', pdfPath: 'https://drive.google.com/file/d/1Q3BwHu_tHSl3SfXGLIrJemzcNjRLszsU/view?usp=drive_link' },
                { name: 'ADV P2 2018', pdfPath: 'https://drive.google.com/file/d/1QV9N56Bu3jqlsDManBg4zGFgkYEZoCCj/view?usp=drive_link' },
                { name: 'ADV P1 2019', pdfPath: 'https://drive.google.com/file/d/1Q35HCl3EIwcMF2ezb-lFgX-6Jvc_V9yp/view?usp=drive_link' },
                { name: 'ADV P2 2019', pdfPath: 'https://drive.google.com/file/d/1QSKzMEyDu8gHAXY8RwO9rN96W1rK_3r_/view?usp=drive_link' },
                { name: 'ADV P1 2020', pdfPath: 'https://drive.google.com/file/d/1Q2lY7MsG-oz7CtmgGp0jLn499Z_9ou_k/view?usp=drive_link' },
                { name: 'ADV P2 2020', pdfPath: 'https://drive.google.com/file/d/1QPuH-URfZH8fi0tSm952iH270jyPLRzz/view?usp=drive_link' },
                { name: 'ADV P1 2021', pdfPath: 'https://drive.google.com/file/d/1Q16mDzgG8qFG-iQRr-r5TZ-vnpt8xs_m/view?usp=drive_link' },
                { name: 'ADV P2 2021', pdfPath: 'https://drive.google.com/file/d/1QOlbtCtXF6R__79ONWsLXktPd8WdiYNY/view?usp=drive_link' },
                { name: 'ADV P1 2022', pdfPath: 'https://drive.google.com/file/d/1Q0uXWjiS8CiMfOM3cK5u2crRM7MCfuzx/view?usp=drive_link' },
                { name: 'ADV P2 2022', pdfPath: 'https://drive.google.com/file/d/1QNGzeudUaL907n_u-PXquatc8Qx6SJis/view?usp=drive_link' },
                { name: 'ADV P1 2023', pdfPath: 'https://drive.google.com/file/d/1Pz1hkmYU_cBl97l6BLJBGxi7jzOmyuGU/view?usp=drive_link' },
                { name: 'ADV P2 2023', pdfPath: 'https://drive.google.com/file/d/1QM0ya3FxZRRAcDKVEGZt8ODukrUkGrdZ/view?usp=drive_link' },
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

    const filteredData = AdvCornerData
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
                <div className="accordion" id="AdvAccordion" style={{borderRadius:'5px', boxShadow:'0px 2px 6px black'}}>
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
                            <div id={`collapse${section.id}`} className="accordion-collapse collapse" data-bs-parent="#AdvAccordion">
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

export default AdvPdfDownload