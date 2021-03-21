import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { getHours, isSameDay } from 'date-fns/esm';

const hoursInADay = ((): number[] => {
    let hours: number[] = [];
    for (let index = 1; index < 24; index++) {
        hours.push(index);
    }
    return hours;
})();

interface IComponentProps {
    label: string,
    date: Date,
    onChange: (value: number) => void
};

const SelectHour: React.FC<IComponentProps> = ({ label, date, onChange }) => {
    const isToday = isSameDay(date, new Date());

    return (
        <>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={getHours(date)}
                onChange={event => onChange(event.target.value as number)}
            >
                {hoursInADay
                    .map(hour => (
                        <MenuItem
                            key={hour}
                            value={hour}
                            disabled={isToday && hour < getHours(new Date())}
                        >
                            {hour}
                        </MenuItem>)
                    )}
            </Select>
        </>
    );
};

export default SelectHour;