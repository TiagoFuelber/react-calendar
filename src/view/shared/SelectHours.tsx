import { InputLabel, MenuItem, Select } from '@material-ui/core';

const hoursInADay = ((): number[] => {
    let hours: number[] = [];
    for (let index = 1; index < 24; index++) {
        hours.push(index);
    }
    return hours;
})();

interface IComponentProps {
    label: string,
    id: string,
    value: number,
    onChange: (value: number) => void
};

const SelectHour: React.FC<IComponentProps> = ({ label, id, value, onChange }) => (
    <>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
            label={label}
            id={id}
            value={value}
            onChange={event => onChange(event.target.value as number)}
        >
            {hoursInADay
                .map(hour => (
                    <MenuItem key={hour} value={hour}>
                        {hour}
                    </MenuItem>)
                )}
        </Select>
    </>
);

export default SelectHour;