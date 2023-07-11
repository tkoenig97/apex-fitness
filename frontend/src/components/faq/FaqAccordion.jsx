import { useState } from 'react';
import PropTypes from 'prop-types';

export const FaqAccordion = ({ faqs }) => {
    // State to track which question is opened
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggles question to open on click or close if another is opened
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* Displays an Accordion item for each item in faqs object */}
            {faqs.map((faq, index) => (
                <div key={index} className="border-b">
                    {/* Accordion header */}
                    <div
                        className={`flex justify-between items-center py-3 px-4 cursor-pointer ${
                            activeIndex === index
                                ? 'bg-gray-200'
                                : 'bg-gray-100'
                        } transition duration-1000 ease-in-out`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {/* FAQ question */}
                        <h3 className="text-lg font-semibold">
                            {faq.question}
                        </h3>
                        {/* Accordion icon (Indicates open or closed) */}
                        <span className="accordion-icon">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {/* Accordion content */}
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
