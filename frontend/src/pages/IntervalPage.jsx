import { IntervalItem } from '../components/interval/IntervalItem';
import { IntervalTimer } from '../components/interval/IntervalTimer';

export const IntervalPage = () => {
    return (
        <>
            <div className="flex justify-center my-4">
                <IntervalTimer />
            </div>
            <div>
                <IntervalItem />
            </div>
        </>
    );
};
