import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isSameMonth } from 'date-fns';
import { addDays, addMonths, format, startOfMonth, startOfWeek } from 'date-fns';
import CalendarHeader from './CalendarHeader.tsx/CalendarHeader';
import StyledCalendar from './StyledCalendar';
import Week from './Week/Week';
import getKeysFromEnum from '../../helpers/getKeysFromEnum';
import DaysOfWeek from '../../enums/DaysOfWeek';

const StyledWeekDaysIndicator = styled.div`
    display: flex;
    
    .day {
        flex: 1;
        font-size: 14px;
        padding: 5px 3px;
    }
`;

const WeekDaysIndicator: React.FC = () => {
    return (
        <StyledWeekDaysIndicator>
            {getKeysFromEnum(DaysOfWeek)
                .map(day => DaysOfWeek[day])
                .map(dayName => dayName.substr(0, 3))
                .map(day => (
                    <div key={day} className="day">{day}</div>
                ))
            }
        </StyledWeekDaysIndicator>
    );
};

const Calendar: React.FC = () => {
    let [dateVisible, setDateVisible] = useState(new Date());
    let [firstDayOfEachWeek, setFirstDayOfEachWeek] = useState<Date[] | null>(null);
    const previousMonth = () => setDateVisible(currentState => addMonths(currentState, -1));
    const nextMonth = () => setDateVisible(currentState => addMonths(currentState, 1));

    useEffect(() => {
        const getFirstDayOfEachWeek = () => {
            const calendarFirstDay = startOfWeek(startOfMonth(dateVisible));
            let day = calendarFirstDay;
            const days = [day];
            day = addDays(day, 7);

            while (isSameMonth(day, dateVisible)) {
                days.push(day);
                day = addDays(day, 7);
            };

            return days;
        };

        setFirstDayOfEachWeek([...getFirstDayOfEachWeek()]);
    }, [dateVisible]);

    return (
        <StyledCalendar>
            <CalendarHeader
                date={dateVisible}
                onNext={previousMonth}
                onPrevious={nextMonth}
            />
            <WeekDaysIndicator />
            {firstDayOfEachWeek?.map(day => {
                return (
                    <Week key={format(day, 'P')} initDate={day} />
                )
            })}
        </StyledCalendar>
    )
};

export default Calendar;