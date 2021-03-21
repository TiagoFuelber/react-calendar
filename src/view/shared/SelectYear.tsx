import { InputLabel, MenuItem, Select } from '@material-ui/core';
import getYear from 'date-fns/getYear';
import getTenYears from '../../helpers/getTenYears';

interface IComponentProps {
    label: string,
    date: Date,
    onChange: (value: number) => void,
};

const SelectYear: React.FC<IComponentProps> = ({
    label,
    date,
    onChange,
}) => (
    <>
        <InputLabel>{label}</InputLabel>
        <Select
            label={label}
            value={getYear(date)}
            onChange={event => onChange(event.target.value as number)}
        >
            {getTenYears(getYear(new Date())).map(year => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
        </Select>
    </>
)

export default SelectYear;