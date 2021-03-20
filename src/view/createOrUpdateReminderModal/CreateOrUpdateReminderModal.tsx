import React, { ChangeEventHandler, useState } from 'react';
import { Button, Container, Dialog, FormControl, TextField } from '@material-ui/core';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import { getHours, getMinutes, setHours, setMinutes, setMonth, setYear } from 'date-fns/esm';
import StyledCreateOrUpdateReminderModal from './StyledCreateOrUpdateReminderModal';
import Reminder from '../../domain/Reminder';
import SelectYear from '../shared/SelectYear';
import SelectMonth from '../shared/SelectMonth';
import SelectHour from '../shared/SelectHours';
import SelectMinutes from '../shared/SelectMinutes';
import StyledForm from './StyledForm';
import SelectColor from '../shared/SelectColor';

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


    const handleChangeDate = (fn: updateDateFn) => (newValue: number): void =>
        setReminderState(oldState => ({
            ...oldState,
            date: fn(oldState.date, newValue)
        }));

    const handleChangeProperty = (property: string) => (event: React.ChangeEvent<HTMLInputElement> | string): void =>
        setReminderState(oldState => ({
            ...oldState,
            [property]: typeof event === 'string' ? event : event.target.value
        } as Reminder));

    const invalidForm = reminderState.description.length > 30;

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
                                id="description"
                                label="reminder"
                                value={reminderState.description}
                                onChange={handleChangeProperty('description') as textFieldEvent}
                                helperText="Max. 30 characters"
                            />
                        </FormControl>

                        <div className="year">
                            <SelectYear
                                label="year"
                                id="year"
                                value={getYear(reminderState.date)}
                                onChange={handleChangeDate(setYear)}
                            />
                        </div>

                        <div className="month">
                            <SelectMonth
                                label="month"
                                id="month"
                                value={getMonth(reminderState.date) + 1}
                                onChange={handleChangeDate(setMonth)}
                            />
                        </div>

                        <div className="hours">
                            <SelectHour
                                label="hour"
                                id="hour"
                                value={getHours(reminderState.date)}
                                onChange={handleChangeDate(setHours)}
                            />
                        </div>

                        <div className="minutes">
                            <SelectMinutes
                                label="mins"
                                id="minutes"
                                value={getMinutes(reminderState.date)}
                                onChange={handleChangeDate(setMinutes)}
                            />
                        </div>

                        <FormControl className="city">
                            <TextField
                                id="city"
                                label="city"
                                value={reminderState.city}
                                onChange={handleChangeProperty('city') as textFieldEvent}
                            />
                        </FormControl>

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