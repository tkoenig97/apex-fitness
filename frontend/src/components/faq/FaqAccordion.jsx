import { useState } from 'react';
import PropTypes from 'prop-types';

export const FaqAccordion = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <div key={index} className="accordion">
                    <div
                        className={`accordion-header ${
                            activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {faq.question}
                    </div>
                    <div
                        className={`accordion-content ${
                            activeIndex === index ? 'active' : ''
                        }`}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

FaqAccordion.propTypes = {
    faqs: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};
