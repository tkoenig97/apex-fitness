import { FaqAccordion } from '../components/faq/FaqAccordion';

export const FaqPage = () => {
    // Test object for accordion component
    const faqs = [
        {
            question: 'How many days a week should I work out?',
            answer: 'The recommended frequency is at least 3-5 days per week. However, it depends on your goals, fitness level, and availability. Remember to include both cardio and strength training exercises.',
        },
        {
            question: 'What is the best exercise for weight loss?',
            answer: "There isn't a single best exercise for weight loss. A combination of cardio exercises (e.g., running, cycling) and strength training (e.g., weightlifting) can help you burn calories, build muscle, and achieve weight loss goals.",
        },
    ];

    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <FaqAccordion faqs={faqs} />
        </div>
    );
};
