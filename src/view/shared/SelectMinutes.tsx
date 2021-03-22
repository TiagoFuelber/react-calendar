import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { getMinutes, isSameDay } from 'date-fns';
import getHours from 'date-fns/getHours';

const minutesInAnHour = ((): number[] => {
    let hours: number[] = [];
    for (let index = 0; index < 60; index++) {
        hours.push(index);
    }
    return hours;
})();

interface IComponentProps {
    label: string,
    date: Date,
    onChange: (value: number) => void
};

const SelectMinutes: React.FC<IComponentProps> = ({ label, date, onChange }) => {
    const isNow = isSameDay(date, new Date()) && getHours(date) === getHours(new Date());

    return (
        <>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={getMinutes(date)}
                onChange={event => onChange(event.target.value as number)}
            >
                {minutesInAnHour
                    .map(minutes => (
                        <MenuItem
                            key={minutes}
                            value={minutes}
                            disabled={isNow && minutes < getMinutes(new Date())}
                        >
                            {minutes.toLocaleString('en-US', {
                                minimumIntegerDigits: 2,
                                useGrouping: false
                            })}
                        </MenuItem>)
                    )}
            </Select>
        </>
    );
};

export default SelectMinutes;