import React from 'react'
import { useState } from 'react';
function NeetPdfDownload() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('all');

    const NeetCornerData = [
        {
            id: 1,
            title: 'NEET BIOLOGY',
            pdfs: [
                
                { name: 'NCERT EXEMPLAR(Arihant)', pdfPath: 'https://drive.google.com/file/d/1TyYl2aTMOgUSzekLt4XklnTodlLuM-Sj/view?usp=drive_link', imagePath: '/assets/ncert exemplar arihant.jpg', buyNowLink: 'https://amzn.to/3AlhZfa' },
                { name: '34 Years Chapterwise(Arihant)', pdfPath: 'https://drive.google.com/file/d/1-bkjsuciz14JR4Bbuw_hgi3pB56aZSr1/view?usp=drive_link', imagePath: '/assets/arihant34 neet_img.png', buyNowLink: 'https://amzn.to/46KgT8I' },
                { name: 'NCERT XTRACT BIOLOGY(Disha)', pdfPath: 'https://drive.google.com/file/d/1Ntrz1Ii6hrgIiv77iUQYYTwQmPeupGWH/view?usp=drive_link', imagePath: '/assets/ncert xtract bio.jpg', buyNowLink: 'https://amzn.to/4doyyFF' },
                
            ],
        },
        {
            id: 2,
            title: 'NEET PHYSICS',
            pdfs: [
                { name: 'ErrorLess Physics', pdfPath: 'https://drive.google.com/file/d/1HKKCObXrpn1TlRu4WHINWvlUV7ShOvX1/view?usp=drive_link', imagePath: '/assets/errorless_physics_img.jpg', buyNowLink: 'https://amzn.to/48DHROX' },

                { name: 'DC Pandey Mechanics 1', pdfPath: 'https://drive.google.com/file/d/1WICcQbph47F2W1maE748q7q7pUw8LYjG/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Mechanics 2', pdfPath: 'https://drive.google.com/file/d/1WHyHCO22NXNZcvFdZa25_aN1_TKcpitl/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Waves & Thermodynamics', pdfPath: 'https://drive.google.com/file/d/1WLZ7peZgcPPs48eDJV4FSMShuGMNpm_O/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Electricity & Magnetism ', pdfPath: 'https://drive.google.com/file/d/1W2xzh29zUr9qUabCIlwcHvZkKYRkll1m/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: 'DC Pandey Optics & Modern Physics ', pdfPath: 'https://drive.google.com/file/d/1WM0KYjwalXC6x4dw-87LKLu1DAsZ-V_P/view?usp=drive_link', imagePath: '/assets/dc_physics_img.jpg', buyNowLink: 'https://amzn.to/49xvYeJ' },
                { name: '33 Years Chapterwise', pdfPath: 'https://drive.google.com/file/d/1FHpZFBfJfqBhGdBQeK39Pnx40NiOB7ph/view?usp=drive_link', imagePath: '/assets/disha_obj_phy.jpeg', buyNowLink: 'https://amzn.to/4cxDGa6' },

                
            ],
        },
        {
            id: 3,
            title: 'NEET CHEMISTRY',
            pdfs: [
                { name: 'GRB Physical Chemistry', pdfPath: 'https://drive.google.com/file/d/1HxS-ZmZwGIxUZo6xT2Hgb_LnQ2jp389M/view?usp=drive_link', imagePath: '/assets/grb_physical_chem.jpg', buyNowLink: 'https://amzn.to/3IhiXdh' },
                { name: 'Physical Chemistry By N.Awasthi', pdfPath: 'https://drive.google.com/file/d/1I7AEwK92tSQwiINFIzhTjzQaEQzUKAI-/view?usp=drive_link', imagePath: '/assets/N_awasthi_chem_img.jpg', buyNowLink: 'https://amzn.to/3V0mFiT' },
                { name: 'GRB Organic Chemistry', pdfPath: 'https://drive.google.com/file/d/1HvvgyJtz-QcJ6bh14xNRJvm_yDMmRS3h/view?usp=drive_link', imagePath: '/assets/grb organic.jpg', buyNowLink: 'https://amzn.to/3wKujUj' },

                
                { name: 'GRB Inorganic Chemistry', pdfPath: 'https://drive.google.com/file/d/1Hl53I9d-KsDbxx6efMNHvIi6_2bbZKz0/view?usp=drive_link', imagePath: '/assets/grb_inorganic_img.jpg', buyNowLink: 'https://amzn.to/3PqpMNF' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(Part 1)', pdfPath: 'https://drive.google.com/file/d/1X9EwgzCX0qsyllCOCvfghxdR9j5EBu5q/view?usp=drive_link', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://amzn.to/3P1RW14' },
                { name: 'Inorganic Chemistry By V.K Jaiswal(part2)', pdfPath: 'https://drive.google.com/file/d/1X9x5QhSdW9ylJWJ72-AlKhEq6vRj_ffQ/view?usp=drive_link', imagePath: '/assets/vk_jaiswal-img.jpg', buyNowLink: 'https://amzn.to/3P1RW14' },
                { name: '33 Years chapterwise', pdfPath: 'https://drive.google.com/file/d/1F5xhlu3R6ftgALnNAaVfUHdF130VeJ8D/view?usp=drive_link', imagePath: '/assets/disha_obj_chem.jpg', buyNowLink: 'https://amzn.to/3WecbMU' },
                
            ],
        },
        {
            id: 4,
            title: 'PREVIOUS YEAR PAPERS',
            pdfs: [
                { name: 'NEET 2019', pdfPath: 'https://drive.google.com/file/d/1PM4O6uwf-_o224PCexp2XUshdIxnaIWe/view?usp=drive_link' },
                { name: 'NEET 2020', pdfPath: 'https://drive.google.com/file/d/1PTreWk4C44_9NUUM1WlSY6M5h_oTbdHk/view?usp=drive_link' },
                { name: 'NEET 2021', pdfPath: 'https://drive.google.com/file/d/1PUex1FxftddNcGntMrbukmavdLSCdntR/view?usp=drive_link' },
                { name: 'NEET 2022', pdfPath: 'https://drive.google.com/file/d/1PVdOVuU0PvVaJV9saGKavkYalk3Jz335/view?usp=drive_link' },
                { name: 'NEET 2023', pdfPath: 'https://drive.google.com/file/d/1PXIDdkfcBQYf28WelQiCMY2DstDHzcP1/view?usp=drive_link' },
                
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

    const filteredData = NeetCornerData
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
                <h2 className="text-center mb-2">Study Material</h2>
                <p className='text-center'><strong>"NCERT Books are sufficient, specially for Biology."</strong></p>
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
                <div className="accordion" id="neetAccordion" style={{borderRadius:'5px', boxShadow:'0px 2px 6px black'}}>
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
                            <div id={`collapse${section.id}`} className="accordion-collapse collapse" data-bs-parent="#neetAccordion">
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

export default NeetPdfDownload
