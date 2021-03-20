import { InputLabel, MenuItem, Select } from '@material-ui/core';
import Months from '../../enums/Months';

interface IComponentProps {
    label: string,
    id: string,
    value: number,
    onChange: (value: number) => void
};

const SelectMonth: React.FC<IComponentProps> = ({ label, id, value, onChange }) => (
    <>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
            label={label}
            id={id}
            value={value}
            onChange={event => onChange((event.target.value as number) - 1)}
        >
            {Object.keys(Months)
                .filter(month => typeof Months[month as any] === 'number')
                .map(month => Months[month as any])
                .map(month => (
                    <MenuItem key={month} value={month}>
                        {Months[Number(month)]}
                    </MenuItem>)
                )}
        </Select>
    </>
);

export default SelectMonth;