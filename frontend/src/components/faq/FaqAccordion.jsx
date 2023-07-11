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
                <div key={index} className="border-b">
                    <div
                        className={`flex justify-between items-center py-3 px-4 cursor-pointer ${
                            activeIndex === index
                                ? 'bg-gray-200'
                                : 'bg-gray-100'
                        }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="text-lg font-semibold">
                            {faq.question}
                        </h3>
                        <span className="accordion-icon">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="bg-gray-100 p-4">
                            <p>{faq.answer}</p>
                        </div>
                    )}
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
