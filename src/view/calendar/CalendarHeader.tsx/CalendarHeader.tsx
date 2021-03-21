import { Icon, Typography } from '@material-ui/core';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import Months from '../../../enums/Months';
import StyledCalendarHeader from './StyledCalendarHeader';

interface IComponentProps {
    date: Date;
    onNext: () => void;
    onPrevious: () => void;
}

const CalendarHeader: React.FC<IComponentProps> = ({
    date,
    onNext,
    onPrevious
}) => {
    return (
        <StyledCalendarHeader>
            <Typography
                color="textSecondary"
                className="month-name"
                variant="body2"
            >
                {`${Months[getMonth(date) + 1]}, ${getYear(date)}`}
            </Typography >
            <div className="controls">
                <button onClick={onNext}>
                    <Icon>chevron_left</Icon>
                </button>
                <button onClick={onPrevious}>
                    <Icon>chevron_right</Icon>
                </button>
            </div>
        </StyledCalendarHeader>
    );
};

export default CalendarHeader;