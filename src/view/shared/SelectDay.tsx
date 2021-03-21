import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { endOfMonth, getDate } from 'date-fns/esm';
import getMonth from 'date-fns/getMonth';

const daysOnMonth = (date: Date): number[] => {
    const daysQty = getDate(endOfMonth(date));
    let days: number[] = [];
    for (let index = 1; index <= daysQty; index++) {
        days.push(index);
    }
    return days;
};

interface IComponentProps {
    label: string,
    date: Date,
    onChange: (value: number) => void
};

const SelectDay: React.FC<IComponentProps> = ({ label, date, onChange }) => {
    const isCurrentMonth = getMonth(date) === getMonth(new Date());

    return (
        <>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={getDate(date)}
                onChange={event => onChange(event.target.value as number)}
            >
                {daysOnMonth(date)
                    .map(day => (
                        <MenuItem
                            disabled={isCurrentMonth && day < getDate(new Date())}
                            key={day}
                            value={day}
                        >
                            {day}
                        </MenuItem>)
                    )}
            </Select>
        </>
    )
};

export default SelectDay;