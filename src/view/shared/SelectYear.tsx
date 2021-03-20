import { InputLabel, MenuItem, Select } from '@material-ui/core';
import getYear from 'date-fns/getYear';
import getTenYears from '../../helpers/getTenYears';

interface IComponentProps {
    label: string,
    id: string,
    value: number,
    onChange: (value: number) => void,
};

const SelectYear: React.FC<IComponentProps> = ({
    label,
    id,
    value,
    onChange,
}) => (
    <>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
            label={label}
            id={id}
            value={value}
            onChange={event => onChange(event.target.value as number)}
        >
            {getTenYears(getYear(new Date())).map(year => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
        </Select>
    </>
)

export default SelectYear;