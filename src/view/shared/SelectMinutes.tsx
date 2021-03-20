import { InputLabel, MenuItem, Select } from '@material-ui/core';

const minutesInAnHour = ((): number[] => {
    let hours: number[] = [];
    for (let index = 1; index < 60; index++) {
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

const SelectMinutes: React.FC<IComponentProps> = ({ label, id, value, onChange }) => (
    <>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
            label={label}
            id={id}
            value={value}
            onChange={event => onChange(event.target.value as number)}
        >
            {minutesInAnHour
                .map(minutes => (
                    <MenuItem key={minutes} value={minutes}>
                        {minutes}
                    </MenuItem>)
                )}
        </Select>
    </>
);

export default SelectMinutes;