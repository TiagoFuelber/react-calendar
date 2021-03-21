import getDate from 'date-fns/getDate'
import StyledDay from './StyledDay';

interface IComponentProps {
    day: Date;
}

const Day: React.FC<IComponentProps> = ({ day }) => {
    return (
        <StyledDay>
            <span className="day-indicator">
                {getDate(day)}
            </span>
        </StyledDay>
    )
};

export default Day;