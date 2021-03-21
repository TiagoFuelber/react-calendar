import { InputLabel, MenuItem, Select } from '@material-ui/core';
import getMonth from 'date-fns/getMonth';
import Months from '../../enums/Months';

interface IComponentProps {
    label: string,
    date: Date,
    onChange: (value: number) => void
};

const SelectMonth: React.FC<IComponentProps> = ({ label, date, onChange }) => {
    const months = Object.keys(Months)
        .filter(month => typeof Months[month as any] === 'number')
        .map(month => Months[month as any])
        .filter(month => parseInt(month) >= getMonth(new Date()));

    return (
        <>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={getMonth(date) + 1}
                onChange={event => onChange((event.target.value as number) - 1)}
            >
                {months
                    .map(month => (
                        <MenuItem key={month} value={month}>
                            {Months[Number(month)]}
                        </MenuItem>)
                    )}
            </Select>
        </>
    )
};

export default SelectMonth;