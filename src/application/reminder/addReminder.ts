import { Dispatch, SetStateAction } from 'react';
import Reminder from '../../domain/Reminder';

const addReminder = (
    reminder: Reminder,
    setReminder: Dispatch<SetStateAction<Reminder[]>>
): void => {
    setReminder(oldState => ([
        ...oldState.filter(item => item.id !== reminder.id),
        reminder
    ]))
}

export default addReminder;