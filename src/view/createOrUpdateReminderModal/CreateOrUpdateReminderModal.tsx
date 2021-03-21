import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { Button, Container, Dialog, FormControl, TextField, Typography } from '@material-ui/core';
import { eachDayOfInterval, format, setDate, setHours, setMinutes, setMonth, setYear } from 'date-fns/esm';
import StyledCreateOrUpdateReminderModal from './StyledCreateOrUpdateReminderModal';
import Reminder from '../../domain/Reminder';
import SelectYear from '../shared/SelectYear';
import SelectMonth from '../shared/SelectMonth';
import SelectHour from '../shared/SelectHours';
import SelectMinutes from '../shared/SelectMinutes';
import StyledForm from './StyledForm';
import SelectColor from '../shared/SelectColor';
import getForecast from '../../application/getForecast';
import AutoCompletePlaces from '../shared/AutocompletePlaces';
import IPlace from '../../domain/Place';
import SelectDay from '../shared/SelectDay';

type updateDateFn = (date: Date, value: number) => Date;

type textFieldEvent = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

interface ComponentProps {
    open: boolean,
    onClose: () => void,
    initialDate?: Date,
    reminder?: Reminder
};

const CreateOrUpdateReminderModal: React.FC<ComponentProps> = ({
    open,
    onClose,
    initialDate,
    reminder
}) => {
    let [reminderState, setReminderState] = useState(
        reminder || new Reminder({ date: initialDate } as Reminder)
    );
    let [weatherCode, setWeatherCode] = useState(0);

    const handleChangeDate = (fn: updateDateFn) => (newValue: number): void =>
        setReminderState(oldState => ({
            ...oldState,
            date: fn(oldState.date, newValue)
        }));

    const handleChangeProperty = (property: string) =>
        (event: React.ChangeEvent<HTMLInputElement> | string): void =>
            setReminderState(oldState => ({
                ...oldState,
                [property]: typeof event === 'string' ? event : event.target.value
            } as Reminder));

    const handleChangePlace = (place: IPlace): void => {
        setReminderState(oldState => ({
            ...oldState,
            city: place
        }));
    }

    const invalidForm = reminderState.description.length > 30;

    const { city, date } = reminderState;

    const updateForecast = async () => {
        const cityName = city.structured_formatting?.main_text;
        const days = eachDayOfInterval({
            start: new Date(format(new Date(), 'P')),
            end: reminderState.date
        }).length;

        const newWeatherCode = await getForecast(cityName, days);
        setWeatherCode(newWeatherCode);
    };

    useEffect(() => {
        if (city.structured_formatting) updateForecast();
    }, [city, date])

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Container>
                <StyledCreateOrUpdateReminderModal>
                    <button
                        className="close"
                        aria-label="close"
                        onClick={onClose}
                    >
                        &#10005;
                    </button>
                    <StyledForm noValidate autoComplete="off">
                        <FormControl className="description">
                            <TextField
                                error={invalidForm}
                                label="reminder"
                                value={reminderState.description}
                                onChange={handleChangeProperty('description') as textFieldEvent}
                                helperText="Max. 30 characters"
                            />
                        </FormControl>

                        <div className="year">
                            <SelectYear
                                label="year"
                                date={reminderState.date}
                                onChange={handleChangeDate(setYear)}
                            />
                        </div>

                        <div className="month">
                            <SelectMonth
                                label="month"
                                date={reminderState.date}
                                onChange={handleChangeDate(setMonth)}
                            />
                        </div>

                        <div className="date">
                            <SelectDay
                                label="day"
                                date={reminderState.date}
                                onChange={handleChangeDate(setDate)}
                            />
                        </div>

                        <div className="hours">
                            <SelectHour
                                label="hour"
                                date={reminderState.date}
                                onChange={handleChangeDate(setHours)}
                            />
                        </div>

                        <div className="minutes">
                            <SelectMinutes
                                label="mins"
                                date={reminderState.date}
                                onChange={handleChangeDate(setMinutes)}
                            />
                        </div>

                        <FormControl className="city">
                            <AutoCompletePlaces
                                label="city"
                                initialValue={reminderState.city}
                                onSelect={handleChangePlace}
                            />
                        </FormControl>

                        <div className="forecast">
                            {weatherCode
                                ? <i className={`icon wi wi-owm-${weatherCode}`}></i>
                                : <Typography variant="caption" gutterBottom>No forecast available</Typography>
                            }
                        </div>

                        <div className="select-color">
                            <SelectColor
                                label="color"
                                value={reminderState.color}
                                onChange={handleChangeProperty('color')}
                            />
                        </div>

                        <div className="actions">
                            <Button color="secondary">Delete</Button>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={invalidForm}
                            >
                                Save
                            </Button>
                        </div>
                    </StyledForm>
                </StyledCreateOrUpdateReminderModal>
            </Container>
        </Dialog>
    )
}

export default CreateOrUpdateReminderModal;