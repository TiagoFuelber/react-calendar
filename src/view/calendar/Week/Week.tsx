import { addDays, format } from 'date-fns/esm';
import Day from '../Day/Day';
import StyledWeek from './StyledWeek';

interface IComponentProps {
    initDate: Date;
}

const Week: React.FC<IComponentProps> = ({
    initDate
}) => {
    const getDays = () => {
        const days = [];

        for (let index = 0; index < 7; index++) {
            days.push(addDays(initDate, index));
        }
        return days;
    }

    return (
        <StyledWeek>
            {getDays().map(day => (
                <Day key={format(day, 'P')} day={day} />
            ))}
        </StyledWeek>
    );
}

export default Week;