import { addDays, format, isSameDay } from 'date-fns';
import { useContext } from 'react';
import { RemindersContext } from '../../../state/RemindersProvider';
import Day from '../Day/Day';
import StyledWeek from './StyledWeek';

interface IComponentProps {
    initDate: Date;
}

const Week: React.FC<IComponentProps> = ({
    initDate
}) => {
    let [reminders] = useContext(RemindersContext);
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
                <Day
                    key={format(day, 'P')}
                    day={day}
                    reminders={reminders.filter(reminder => isSameDay(day, reminder.date))}
                />
            ))}
        </StyledWeek>
    );
}

export default Week;