import React, { useState, useEffect } from 'react';
import './TakeAQuiz.css'; // We'll create this CSS file for styling
import html2canvas from 'html2canvas';
import Confetti from 'react-confetti';
import QRCode from 'qrcode.react';



const jeeQuestions = [
    // Add 10 JEE questions here (mix of Physics, Chemistry, and Math)
   
        {
            "subject": "Physics",
            "question": "A particle moves in a circle of radius R with a constant speed v. The magnitude of its angular momentum about the center is:",
            "options": [
                "mvR",
                "mv²R",
                "mv²/R",
                "mv/R"
            ],
            "correctAnswer": "mvR"
        },
        {
            "subject": "Mathematics",
            "question": "The domain of the function f(x) = 4x^3 - 21x^2 + 10x + 21 is",
            "options": ["(-∞, ∞)", "[0, ∞)", "(-∞, 0]", "R - [0,1]"],
            "correctAnswer": "(-∞, ∞)"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following is not a Lewis acid?",
            "options": [
                "BF3",
                "AlCl3",
                "SnCl4",
                "NH3"
            ],
            "correctAnswer": "NH3"
        },
        {
            "subject": "Physics",
            "question": "The moment of inertia of a rod about an axis through its centre and perpendicular to it is 21ML/12 (where, M is the mass and L is the length of the rod). The rod is bent in the middle so that the two halves make an angle of 60°. The moment of inertia of the bent rod about the same axis would be",
            "options": ["21 ML/48", "21 ML/12", "21 ML/24", "2ML/8√3"],
            "correctAnswer": "21 ML/24"
        },
        {
            "subject": "Mathematics",
            "question": "The sum of the first 100 terms of the sequence 1, 1/2, 1/3, 1/4, ..., is approximately",
            "options": ["5", "10", "15", "20"],
            "correctAnswer": "5"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following compounds is optically active?",
            "options": [
                "2-Butanol",
                "2-Methyl-2-butanol",
                "2-Chlorobutane",
                "2-Methylpropane"
            ],
            "correctAnswer": "2-Chlorobutane"
        },
        {
            "subject": "Physics",
            "question": "If the ratio of the concentration of electrons to that of holes in a semiconductor is 5/7 and the ratio of currents is 4/7, then what is the ratio of their drift velocities?",
            "options": ["8/5", "5/4", "4/5", "7/4"],
            "correctAnswer": "7/4"
        },
        {
            "subject": "Mathematics",
            "question": "The angle between two vectors a and b is θ. If |a| = 3, |b| = 4, and a.b = 6, then the value of θ is",
            "options": ["0°", "30°", "45°", "60°"],
            "correctAnswer": "45°"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following is not a ligand?",
            "options": [
                "CO",
                "NH3",
                "NO3^-",
                "H2O"
            ],
            "correctAnswer": "NO3^-"
        },
        {
            "subject": "Physics",
            "question": "A potential barrier of 0.50 V exists across a p-n junction. If the depletion region is 5.0 × 10–7 m wide, the intensity of the electric field in this region is",
            "options": ["1.0 × 106 V/m", "1.0 × 105 V/m", "2.0 × 105 V/m", "2.0 × 106 V/m"],
            "correctAnswer": "1.0 × 106 V/m"
        },
        {
            "subject": "Mathematics",
            "question": "The probability that a leap year selected at random will contain 53 Sundays is",
            "options": ["1/7", "2/7", "1/4", "1/2"],
            "correctAnswer": "2/7"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following compounds does not exhibit hydrogen bonding?",
            "options": [
                "H2O",
                "NH3",
                "HF",
                "CH4"
            ],
            "correctAnswer": "CH4"
        },
        {
            "subject": "Physics",
            "question": "A particle of mass 2 kg is on a smooth horizontal table and moves in a circular path of radius 0.6 m. The height of the table from the ground is 0.8 m. If the angular speed of the particle is 12 rad s–1, the magnitude of its angular momentum about a point on the ground right under the centre of the circle is:",
            "options": ["14.4 kg m2s–1", "8.64 kg m2s–1", "20.16 kg m2s–1", "11.52 kg m2s–1"],
            "correctAnswer": "20.16 kg m2s–1"
        },
        {
            "subject": "Mathematics",
            "question": "The equation of the plane passing through the point (1, 2, 3) and parallel to the plane x + y + z = 1 is",
            "options": ["x + y + z = 6", "x + y + z = 0", "x + y + z = 3", "x + y + z = 1"],
            "correctAnswer": "x + y + z = 6"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following is the strongest acid?",
            "options": [
                "HClO",
                "HClO2",
                "HClO3",
                "HClO4"
            ],
            "correctAnswer": "HClO4"
        },
        {
            "subject": "Physics",
            "question": "When an electric field is applied across a semiconductor, current conduction takes place due to the movement of",
            "options": ["only electrons", "only holes", "majority carriers", "both electrons and holes"],
            "correctAnswer": "both electrons and holes"
        },
        {
            "subject": "Mathematics",
            "question": "If the binomial coefficient (n, k) = 10 and (n, k+1) = 15, then n and k are",
            "options": ["5, 2", "6, 3", "7, 2", "8, 3"],
            "correctAnswer": "6, 3"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following is not a greenhouse gas?",
            "options": [
                "CO2",
                "CH4",
                "N2",
                "O3"
            ],
            "correctAnswer": "N2"
        },
        {
            "subject": "Physics",
            "question": "In case of a common emitter transistor amplifier, the ratio of the collector current to the emitter current Ic/Ie is 0.96. The current gain of the amplifier is",
            "options": ["6", "48", "24", "12"],
            "correctAnswer": "24"
        },
        {
            "subject": "Mathematics",
            "question": "The mean of the first 10 natural numbers is",
            "options": ["5.5", "6", "6.5", "7"],
            "correctAnswer": "5.5"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following is not a coordination compound?",
            "options": [
                "K3[Fe(CN)6]",
                "Na[Ag(CN)2]",
                "CaCO3",
                "Ni(CO)4"
            ],
            "correctAnswer": "CaCO3"
        },
        {
            "subject": "Physics",
            "question": "A red LED emits light at 0.1 watt uniformly around it. The amplitude of the electric field of the light at a distance of 1 m from the diode is",
            "options": ["5.48 V/m", "7.75 V/m", "1.73 V/m", "2.45 V/m"],
            "correctAnswer": "5.48 V/m"
        },
        {
            "subject": "Mathematics",
            "question": "The differential equation whose general solution is y = c1e^x + c2e^(-x) is",
            "options": ["y'' - y = 0", "y'' + y = 0", "y'' - 2y = 0", "y'' + 2y = 0"],
            "correctAnswer": "y'' - y = 0"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following statements is incorrect?",
            "options": [
                "NaCl is used in the preparation of Na2O2.",
                "H2 is obtained as a by-product of the Castner process.",
                "Na2CO3 is used in glass manufacturing.",
                "KO2 is used as an oxygen supplier in submarines."
            ],
            "correctAnswer": "NaCl is used in the preparation of Na2O2."
        },
        {
            "subject": "Physics",
            "question": "The electrical conductivity of a semiconductor increases when electromagnetic radiation of wavelength shorter than 2480 nm is incident on it. The band gap in (eV) for the semiconductor is",
            "options": ["2.5 eV", "1.1 eV", "0.7 eV", "0.5 eV"],
            "correctAnswer": "0.5 eV"
        },
        {
            "subject": "Mathematics",
            "question": "The range of the function f(x) = log(x^2 + 1) is",
            "options": ["(-∞, ∞)", "[0, ∞)", "(0, ∞)", "[1, ∞)"],
            "correctAnswer": "[0, ∞)"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following oxides is amphoteric?",
            "options": [
                "CO",
                "CO2",
                "CaO",
                "ZnO"
            ],
            "correctAnswer": "ZnO"
        },
        {
            "subject": "Physics",
            "question": "The forward biased diode connection is",
            "options": ["+2V -2V", "-3V -3V", "2V 4V", "-2V +2V"],
            "correctAnswer": "-2V +2V"
        },
        {
            "subject": "Mathematics",
            "question": "The value of the integral ∫_0^1 (x^3 + 1) dx is",
            "options": ["1/4", "1/2", "3/4", "5/4"],
            "correctAnswer": "5/4"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following compounds has the highest boiling point?",
            "options": [
                "HCl",
                "HF",
                "HBr",
                "HI"
            ],
            "correctAnswer": "HF"
        },
        {
            "subject": "Physics",
            "question": "In the middle of the depletion layer of a reverse-biased p-n junction, the",
            "options": ["electric field is zero", "potential is maximum", "electric field is maximum", "potential is zero"],
            "correctAnswer": "electric field is maximum"
        },
        {
            "subject": "Mathematics",
            "question": "The sum of the infinite geometric series 3 + 2 + 4/3 + 8/9 + ... is",
            "options": ["9", "27", "3", "6"],
            "correctAnswer": "9"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following compounds is not an isomer of C3H6O?",
            "options": [
                "Propionaldehyde",
                "Acetone",
                "Propanoic acid",
                "Prop-1-en-2-ol"
            ],
            "correctAnswer": "Propanoic acid"
        },
        {
            "subject": "Physics",
            "question": "When a diode is forward biased, it has a voltage drop of 0.5 V. The safe limit of current through the diode is 10 mA. If a battery of emf 1.5 V is used in the circuit, the value of minimum resistance to be connected in series with the diode so that the current does not exceed the safe limit is",
            "options": ["300 Ω", "50 Ω", "100 Ω", "200 Ω"],
            "correctAnswer": "100 Ω"
        },
        {
            "subject": "Mathematics",
            "question": "The locus of the midpoints of the chords of the hyperbola x^2 - y^2 = a^2 which subtend a right angle at the center is",
            "options": ["x^2 + y^2 = 2a^2", "x^2 - y^2 = 2a^2", "x^2 + y^2 = a^2", "x^2 - y^2 = a^2"],
            "correctAnswer": "x^2 + y^2 = 2a^2"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following is the best conductor of electricity?",
            "options": [
                "Cu",
                "Ag",
                "Au",
                "Al"
            ],
            "correctAnswer": "Ag"
        },
        
        {
            "subject": "Mathematics",
            "question": "The value of the determinant of the matrix A = [[1, 2], [3, 4]] is",
            "options": ["-2", "2", "0", "1"],
            "correctAnswer": "-2"
        },
        {
            "subject": "Chemistry",
            "question": "Which of the following compounds is not aromatic?",
            "options": [
                "Benzene",
                "Naphthalene",
                "Anthracene",
                "Cyclooctatetraene"
            ],
            "correctAnswer": "Cyclooctatetraene"
        },
        {
            "subject": "Physics",
            "question": "The moment of inertia of a rod about an axis through its centre and perpendicular to it is 21ML/12 (where, M is the mass and L is the length of the rod). The rod is bent in the middle so that the two halves make an angle of 60°. The moment of inertia of the bent rod about the same axis would be",
            "options": ["21 ML/48", "21 ML/12", "21 ML/24", "2ML/8√3"],
            "correctAnswer": "21 ML/24"
        },
        {
            "subject": "Mathematics",
            "question": "The variance of the first n natural numbers is",
            "options": ["(n^2 - 1)/12", "(n^2 - 1)/6", "(n^2 + 1)/12", "(n^2 + 1)/6"],
            "correctAnswer": "(n^2 - 1)/12"
        }
    ];

const neetQuestions = [
    // Add 10 NEET questions here (mix of Physics, Chemistry, and Biology)
    {
        
            "subject": "Biology",
            "question": "Which of the following organelles is responsible for the Crassulacean acid metabolism (CAM) in plants?",
            "options": [
                "Chloroplast",
                "Mitochondria",
                "Vacuole",
                "Peroxisome"
            ],
            "correctAnswer": "Vacuole"
        },
        {
            "subject": "Chemistry",
            "question": "In the extraction of copper from its sulphide ore, the metal is finally obtained by the reduction of cuprous oxide with:",
            "options": [
                "Carbon monoxide",
                "Copper(I) sulphide",
                "Iron(II) sulphide",
                "Sulphur dioxide"
            ],
            "correctAnswer": "Copper(I) sulphide"
        },
        {
            "subject": "Physics",
            "question": "A particle executes simple harmonic motion with a period of 2π seconds. At t = 0, its displacement is half the amplitude. What is the phase angle in radians?",
            "options": [
                "π/6",
                "π/3",
                "π/4",
                "π/2"
            ],
            "correctAnswer": "π/3"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a characteristic of the phylum Platyhelminthes?",
            "options": [
                "Acoelomate body plan",
                "Presence of flame cells",
                "Bilateral symmetry",
                "Presence of a true coelom"
            ],
            "correctAnswer": "Presence of a true coelom"
        },
        {
            "subject": "Chemistry",
            "question": "The IUPAC name of the compound CH3-CH=CH-CHO is:",
            "options": [
                "3-Butenal",
                "But-2-enal",
                "2-Butenal",
                "But-3-enal"
            ],
            "correctAnswer": "But-2-enal"
        },
        {
            "subject": "Physics",
            "question": "A wire of resistance R is bent into a circular loop. The effective resistance between two points on the loop separated by an arc of 90° is:",
            "options": [
                "R/4",
                "R/2",
                "R/8",
                "R/16"
            ],
            "correctAnswer": "R/8"
        },
        {
            "subject": "Biology",
            "question": "Which of the following hormones is not produced by the anterior pituitary gland?",
            "options": [
                "Prolactin",
                "Growth hormone",
                "Adrenocorticotropic hormone",
                "Antidiuretic hormone"
            ],
            "correctAnswer": "Antidiuretic hormone"
        },
        {
            "subject": "Chemistry",
            "question": "What is the hybridization of xenon in XeF4?",
            "options": [
                "sp³",
                "sp³d",
                "sp³d²",
                "sp³d³"
            ],
            "correctAnswer": "sp³d²"
        },
        {
            "subject": "Physics",
            "question": "A charged particle moves in a uniform magnetic field with a velocity perpendicular to the field. Its trajectory will be:",
            "options": [
                "Parabolic",
                "Circular",
                "Helical",
                "Straight line"
            ],
            "correctAnswer": "Circular"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a function of the Golgi apparatus?",
            "options": [
                "Protein glycosylation",
                "Lipid synthesis",
                "Protein sorting",
                "ATP synthesis"
            ],
            "correctAnswer": "ATP synthesis"
        },
        {
            "subject": "Chemistry",
            "question": "The correct order of increasing basic strength of the following compounds is:",
            "options": [
                "Aniline < Ethylamine < Ammonia < Methylamine",
                "Ammonia < Aniline < Methylamine < Ethylamine",
                "Aniline < Ammonia < Methylamine < Ethylamine",
                "Ammonia < Methylamine < Ethylamine < Aniline"
            ],
            "correctAnswer": "Aniline < Ammonia < Methylamine < Ethylamine"
        },
        {
            "subject": "Physics",
            "question": "Two identical charged particles are placed at a distance r apart. If the force between them is F, what will be the force if the distance is increased to 2r and the charge on one particle is doubled?",
            "options": [
                "F/2",
                "F/4",
                "F",
                "2F"
            ],
            "correctAnswer": "F/2"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a component of the electron transport chain?",
            "options": [
                "Cytochrome c",
                "NADH dehydrogenase",
                "Succinate dehydrogenase",
                "Pyruvate dehydrogenase"
            ],
            "correctAnswer": "Pyruvate dehydrogenase"
        },
        {
            "subject": "Chemistry",
            "question": "The number of stereoisomers possible for 2,3,4-trihydroxybutanal is:",
            "options": [
                "4",
                "8",
                "16",
                "32"
            ],
            "correctAnswer": "8"
        },
        {
            "subject": "Physics",
            "question": "A solid sphere, a hollow sphere, and a solid cylinder, all with the same mass and radius, are released from the top of an inclined plane. Which one will reach the bottom first?",
            "options": [
                "Solid sphere",
                "Hollow sphere",
                "Solid cylinder",
                "All will reach at the same time"
            ],
            "correctAnswer": "Solid sphere"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a characteristic of a competitive enzyme inhibitor?",
            "options": [
                "Binds to the active site",
                "Can be overcome by increasing substrate concentration",
                "Decreases Vmax",
                "Increases Km"
            ],
            "correctAnswer": "Decreases Vmax"
        },
        {
            "subject": "Chemistry",
            "question": "The major product formed in the following reaction is:\nCH3CH=CH2 + HBr (peroxide) →",
            "options": [
                "CH3CH2CH2Br",
                "CH3CHBrCH3",
                "CH3CH(Br)CH3",
                "CH2BrCH2CH3"
            ],
            "correctAnswer": "CH3CH2CH2Br"
        },
        {
            "subject": "Physics",
            "question": "A ray of light is incident on a glass slab at an angle of 60°. If the refractive index of glass is √3, what is the angle of refraction inside the glass?",
            "options": [
                "30°",
                "45°",
                "60°",
                "90°"
            ],
            "correctAnswer": "30°"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a characteristic of C4 plants?",
            "options": [
                "Presence of Kranz anatomy",
                "First stable product of carbon fixation is oxaloacetate",
                "Higher rate of photorespiration",
                "Higher water use efficiency"
            ],
            "correctAnswer": "Higher rate of photorespiration"
        },
        {
            "subject": "Chemistry",
            "question": "The correct order of increasing acidic strength of the following compounds is:",
            "options": [
                "CH3COOH < HCOOH < CCl3COOH < CF3COOH",
                "HCOOH < CH3COOH < CCl3COOH < CF3COOH",
                "CH3COOH < HCOOH < CF3COOH < CCl3COOH",
                "HCOOH < CH3COOH < CF3COOH < CCl3COOH"
            ],
            "correctAnswer": "CH3COOH < HCOOH < CCl3COOH < CF3COOH"
        },
        {
            "subject": "Physics",
            "question": "A capacitor of capacitance C is charged to a potential difference V and then disconnected from the source. If the plates are now moved apart, which of the following quantities remains constant?",
            "options": [
                "Capacitance",
                "Potential difference",
                "Energy stored",
                "Charge on the plates"
            ],
            "correctAnswer": "Charge on the plates"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a function of the kidney?",
            "options": [
                "Regulation of blood pH",
                "Production of erythropoietin",
                "Synthesis of vitamin D",
                "Production of insulin"
            ],
            "correctAnswer": "Production of insulin"
        },
        {
            "subject": "Chemistry",
            "question": "The correct order of increasing bond angle in the following molecules is:",
            "options": [
                "H2O < NH3 < CH4 < BF3",
                "NH3 < H2O < BF3 < CH4",
                "H2O < NH3 < BF3 < CH4",
                "NH3 < H2O < CH4 < BF3"
            ],
            "correctAnswer": "H2O < NH3 < BF3 < CH4"
        },
        {
            "subject": "Physics",
            "question": "A body of mass m is attached to a spring of spring constant k and executes simple harmonic motion. If the amplitude of oscillation is A, the maximum kinetic energy of the body is:",
            "options": [
                "kA²/2",
                "kA²",
                "mA²/2",
                "mA²"
            ],
            "correctAnswer": "kA²/2"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a characteristic of the phylum Arthropoda?",
            "options": [
                "Jointed appendages",
                "Exoskeleton made of chitin",
                "Open circulatory system",
                "Radial symmetry"
            ],
            "correctAnswer": "Radial symmetry"
        },
        {
            "subject": "Chemistry",
            "question": "The hybridization of boron in B2H6 is:",
            "options": [
                "sp",
                "sp²",
                "sp³",
                "dsp²"
            ],
            "correctAnswer": "sp³"
        },
        {
            "subject": "Physics",
            "question": "A particle moves in a circle of radius R with a constant speed v. The magnitude of its angular momentum about the center is:",
            "options": [
                "mvR",
                "mv²R",
                "mv²/R",
                "mv/R"
            ],
            "correctAnswer": "mvR"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a feature of facilitated diffusion?",
            "options": [
                "Requires protein channels or carriers",
                "Occurs along the concentration gradient",
                "Does not require ATP",
                "Can move substances against the concentration gradient"
            ],
            "correctAnswer": "Can move substances against the concentration gradient"
        },
        {
            "subject": "Chemistry",
            "question": "The number of sigma (σ) and pi (π) bonds in benzene is:",
            "options": [
                "6σ and 3π",
                "12σ and 3π",
                "6σ and 6π",
                "12σ and 6π"
            ],
            "correctAnswer": "12σ and 3π"
        },
        {
            "subject": "Physics",
            "question": "Two identical springs of spring constant k are connected in series. The effective spring constant of the combination is:",
            "options": [
                "k",
                "k/2",
                "2k",
                "4k"
            ],
            "correctAnswer": "k/2"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a function of the rough endoplasmic reticulum?",
            "options": [
                "Protein synthesis",
                "Protein folding",
                "Lipid synthesis",
                "Glycosylation of proteins"
            ],
            "correctAnswer": "Lipid synthesis"
        },
        {
            "subject": "Chemistry",
            "question": "The correct order of increasing first ionization energy of the elements is:",
            "options": [
                "Na < Mg < Al < Si",
                "Al < Mg < Na < Si",
                "Na < Al < Mg < Si",
                "Al < Si < Na < Mg"
            ],
            "correctAnswer": "Na < Al < Mg < Si"
        },
        {
            "subject": "Physics",
            "question": "A uniform magnetic field B exists in the positive z-direction. A proton enters the field with velocity v in the xy-plane at an angle θ with the x-axis. The magnitude of the magnetic force on the proton is:",
            "options": [
                "qvB sin θ",
                "qvB cos θ",
                "qvB tan θ",
                "qvB"
            ],
            "correctAnswer": "qvB sin θ"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a component of the innate immune system?",
            "options": [
                "Macrophages",
                "Natural killer cells",
                "Complement system",
                "B lymphocytes"
            ],
            "correctAnswer": "B lymphocytes"
        },
        {
            "subject": "Chemistry",
            "question": "The correct order of increasing boiling point of the following compounds is:",
            "options": [
                "CH3OH < CH3CH2OH < CH3CH2CH2OH < (CH3)3COH",
                "(CH3)3COH < CH3OH < CH3CH2OH < CH3CH2CH2OH",
                "CH3OH < (CH3)3COH < CH3CH2OH < CH3CH2CH2OH",
                "CH3OH < CH3CH2OH < (CH3)3COH < CH3CH2CH2OH"
            ],
            "correctAnswer": "CH3OH < CH3CH2OH < CH3CH2CH2OH < (CH3)3COH"
        },
        {
            "subject": "Physics",
            "question": "A particle of mass m moves in a circular orbit of radius r with angular velocity ω. The work done by the centripetal force in one complete revolution is:",
            "options": [
                "2πmrω²",
                "πmr²ω²",
                "mr²ω²",
                "0"
            ],
            "correctAnswer": "0"
        },
        {
            "subject": "Biology",
            "question": "Which of the following is not a characteristic of the Calvin cycle?",
            "options": [
                "Occurs in the stroma of chloroplasts",
                "Requires ATP and NADPH",
                "Produces glucose as the first stable product",
                "Involves the enzyme RuBisCO"
            ],
            "correctAnswer": "Produces glucose as the first stable product"
        }
];

function TakeAQuiz() {
    const [quizType, setQuizType] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(1200); // 10 minutes
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [userName, setUserName] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        if (quizType && !quizSubmitted && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [quizType, quizSubmitted, timeLeft]);

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handleQuizSelect = (type) => {
        setQuizType(type);
        const questions = type === 'JEE' ? jeeQuestions : neetQuestions;
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);
        setSelectedQuestions(selected);
        setTimeLeft(1200);
        setQuizSubmitted(false);
        setAnswers({});
        setCurrentQuestion(0);
    };

    const handleAnswer = (answer) => {
        setAnswers({ ...answers, [currentQuestion]: answer });
        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        setQuizSubmitted(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
    };

    const calculateScore = () => {
        let score = 0;
        selectedQuestions.forEach((q, index) => {
            if (answers[index] === q.correctAnswer) score++;
        });
        return score;
    };

    const renderPerformanceCard = () => {
        const score = calculateScore();
        const qrValue = "https://catalystlibrary.netlify.app/";
        return (
            <div id="performance-card" className="performance-card">
                <div className="card-content">
                    <img src="/assets/logo.png" alt="Career Catalyst Logo" className="logo" />
                    <h2><span style={{ color: 'black' }}>Career</span> Catalyst</h2>
                    <h3>Performance Certificate</h3>
                    <div className="certificate-details">
                        <div className="text-details">
                            <p><strong>Name:</strong> {userName}</p>
                            <p><strong>Test Type:</strong> {quizType}</p>
                            <p><strong>Score:</strong> {score} out of 10</p>
                            <p><strong>Percentage:</strong> {(score / 10) * 100}%</p>
                        </div>
                        <div className="qr-code">
                            <QRCode value={qrValue} size={64} />
                        </div>
                    </div>
                    <p className="encouragement">Congratulations on completing the test!</p>
                    <p className="encouragement">Keep pushing your limits and success will follow.</p>
                </div>
            </div>
        );
    };
    const downloadPerformanceCard = () => {
        const input = document.getElementById('performance-card');
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = `${userName}_${quizType}_Performance.png`;
            link.click();
        });
    };
    const renderQuizSelection = () => (
        <div className="quiz-selection text-center">
            <h2>Select Your Quiz</h2>
            <button onClick={() => handleQuizSelect('JEE')}>JEE</button>
            <button onClick={() => handleQuizSelect('NEET')}>NEET</button>
        </div>
    );

    const renderQuestion = () => {
        if (selectedQuestions.length === 0) {
            return <div>No questions available. Please select a quiz type.</div>;
        }
    
        const question = selectedQuestions[currentQuestion];
        return (
           
            <div className="question-container">
                
                <h3>{question.subject}</h3>
                <p><strong>Question {currentQuestion + 1} of {selectedQuestions.length}:</strong>{question.question} 
                </p>
                <div className="options">
                    {question.options && question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className={answers[currentQuestion] === option ? 'selected' : ''}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="navigation">
                    <button onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
                    {currentQuestion === selectedQuestions.length - 1 ? (
                        <button onClick={handleSubmit}>Submit</button>
                    ) : (
                        <button onClick={handleNext}>Next</button>
                    )}
                </div>
            </div>
            
        );
    };
    const renderAnalysis = () => {
        const score = calculateScore();
        return (
            <div className="analysis">
                <div className="text-center mt-3">
                    <h3>Quiz Analysis</h3>
                    <p>Your Score: {score} out of 10</p>
                </div>
    
                {renderPerformanceCard()}
                <div className="button-container">
                    <button onClick={downloadPerformanceCard} className="download-btn">Download Performance Card</button>
                </div>
                <div className="question-review">
                    {selectedQuestions.map((q, index) => (
                        <div key={index} className="review-item">
                            <p><strong>Q{index + 1}:</strong> {q.question}</p>
                            <p>Your Answer: {answers[index] || 'Not answered'}</p>
                            <p>Correct Answer: {q.correctAnswer}</p>
                        </div>
                    ))}
                </div>
                <button onClick={() => {
                    setQuizType(null);
                    setCurrentQuestion(0);
                    setAnswers({});
                    setQuizSubmitted(false);
                    setUserName('');
                    setSelectedQuestions([]);
                }}>Take Another Quiz</button>
            </div>
        );
    };

    return (

        <div className="take-a-quiz">
            <div className="container my-5">
                <div className="text-center mb-5 heading" data-aos="fade-up">
                    <h2 className="mb-3" id='prepare'>Challenge Your Knowledge</h2>
                    <p className="lead">
                        Welcome to the ultimate test of your scientific prowess! Whether you're preparing for JEE (Joint Entrance Examination)
                        or NEET (National Eligibility cum Entrance Test)
                    </p>
                </div>
            </div>
            <h1 className='text-center'>Take a Quiz</h1>
            {!quizType && renderQuizSelection()}
            {quizType && !userName && (
                <div className="user-name-input">
                    <input
                        type="text"
                        id="user-name"
                        value={userName}
                        onChange={handleUserNameChange}
                        placeholder="Enter your name"
                        className="name-input"
                    />
                    <button onClick={() => setCurrentQuestion(0)} className="start-btn">Start Quiz</button>
                </div>
            )}
            {quizType && userName && !quizSubmitted && (
                <>
                    <div className="timer">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
                    {renderQuestion()}
                </>
            )}
            {quizSubmitted && renderAnalysis()}
            {showConfetti && (
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={500}
            />
)}
        </div>
    );
}

export default TakeAQuiz;