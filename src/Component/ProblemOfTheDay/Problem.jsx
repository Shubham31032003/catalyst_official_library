import React, { useState, useEffect } from 'react';
import TakeAQuiz from '../Quiz/TakeAQuiz';
import { Link } from 'react-router-dom';
function Problem({ isVisible, onClose }) {
    const problems = [
        {
            "subject": "Chemistry",
            "question": "A 0.1 M solution of a weak monoprotic acid HA has a pH of 4.5. Calculate the value of Ka for the acid and the percentage of acid that is ionized at equilibrium.",
            "options": ["Ka = 3.16 × 10^-6, 3.16%", "Ka = 1.78 × 10^-5, 1.33%", "Ka = 3.16 × 10^-5, 1.78%", "Ka = 1.78 × 10^-6, 0.42%"],
            "correctAnswer": "Ka = 3.16 × 10^-5, 1.78%",
            "explanation": "Use the pH to find [H+], then use ICE table and equilibrium calculations to determine Ka and percentage ionization."
        },
        {
            "subject": "Biology",
            "question": "In a population of 1000 individuals, 360 have genotype AA, 480 have Aa, and 160 have aa. What will be the allele frequencies after one generation, assuming Hardy-Weinberg equilibrium and random mating?",
            "options": ["A: 0.6, a: 0.4", "A: 0.5, a: 0.5", "A: 0.7, a: 0.3", "Frequencies will change significantly"],
            "correctAnswer": "A: 0.6, a: 0.4",
            "explanation": "Calculate initial allele frequencies, then apply Hardy-Weinberg principle. Frequencies remain constant under these conditions."
        },
        {
            "subject": "Mathematics",
            "question": "Find the area of the region bounded by the curves y = sin x, y = cos x, and the lines x = 0 and x = π/4.",
            "options": ["√2/2 - π/8", "√2/4", "1 - π/4", "√2/2 - π/4"],
            "correctAnswer": "√2/2 - π/4",
            "explanation": "Integrate the difference between sin x and cos x from 0 to π/4, considering the areas above and below where the curves intersect."
        },
        {
            "subject": "Physics",
            "question": "A uniformly charged non-conducting spherical shell of radius R has a total charge Q. A point charge q is placed at the center of the shell. What is the force on the point charge q?",
            "options": ["kQq/R^2", "Zero", "kQq/4R^2", "kQq/2R^2"],
            "correctAnswer": "Zero",
            "explanation": "By Gauss's law, the electric field inside a uniformly charged spherical shell is zero, so there's no force on the point charge at the center."
        },
        {
            "subject": "Chemistry",
            "question": "Calculate the standard cell potential and ΔG° for the reaction: 2Al(s) + 3I2(s) → 2AlI3(s) given E°(Al³⁺/Al) = -1.66 V and E°(I2/I⁻) = +0.54 V.",
            "options": ["2.20 V, -1272 kJ/mol", "3.74 V, -2166 kJ/mol", "1.12 V, -648 kJ/mol", "4.40 V, -2544 kJ/mol"],
            "correctAnswer": "4.40 V, -2544 kJ/mol",
            "explanation": "Calculate E°cell using reduction potentials, then use ΔG° = -nFE°cell. Remember to account for the stoichiometry of the reaction."
        },
        {
            "subject": "Biology",
            "question": "In a triple mutant strain of E. coli lacking enzymes for synthesizing arginine, histidine, and tryptophan, what is the probability of obtaining a revertant capable of growing without any of these amino acids after a single mutational event?",
            "options": ["1 in 10^9", "1 in 10^6", "1 in 10^18", "Virtually impossible"],
            "correctAnswer": "Virtually impossible",
            "explanation": "A single mutation cannot restore all three pathways simultaneously. The probability of three independent reversions occurring together is extremely low."
        },
        {
            "subject": "Mathematics",
            "question": "Find the volume of the solid obtained by rotating the region bounded by y = x^2, y = 4, and the y-axis about the line x = 3.",
            "options": ["8π", "16π", "24π", "32π"],
            "correctAnswer": "32π",
            "explanation": "Use the washer method with inner radius (3-x) and outer radius 3. Integrate from x=0 to x=2, as y=4 intersects x^2 at x=2."
        }
    ];
    const [currentProblem, setCurrentProblem] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        const today = new Date();
        const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
        setCurrentProblem(daysSinceEpoch % 7);
    }, []);

    useEffect(() => {
        if (isVisible) {
            setShowAnswer(false);
        }
    }, [isVisible]);

    const problem = problems[currentProblem];

    if (!isVisible) return null;

    return (
        <div className="position-fixed top-0 start-0 h-100 w-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}>
        <div className="container my-5 heading">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="bg-light rounded" style={{ boxShadow: '0px 0px 10px black', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                        <div className="p-3 text-white rounded-top text-center d-flex justify-content-between align-items-center" style={{ backgroundColor: '#bb590e' }}>
                            <h5 className="mb-0">Problem of the Day - {problem.subject}</h5>
                            <button className="btn-close btn-close-white" onClick={onClose}></button>
                        </div>
                        <div className="p-4 overflow-auto">
                            <p className="mb-4">{problem.question}</p>
                            <div className="d-flex flex-column">
                                {problem.options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`btn mb-2 ${showAnswer && option === problem.correctAnswer ? 'btn-success' : 'btn-outline-primary'}`}
                                        onClick={() => setShowAnswer(true)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {showAnswer && (
                                <div className="mt-4 p-3 bg-light border-start border-4 border-success rounded">
                                    <h6 className="text-success mb-2">Correct Answer: {problem.correctAnswer}</h6>
                                    <p className="mb-0"><strong>Explanation:</strong> {problem.explanation}</p>
                                </div>
                            )}
                            <button className='btn mt-3 custom_button'>
                                <Link to='/quiz' style={{ textDecoration: 'none', color: 'white' }}>Take A Quiz Also</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Problem;