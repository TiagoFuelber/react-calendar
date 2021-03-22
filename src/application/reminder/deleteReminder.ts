import { Dispatch, SetStateAction } from 'react';
import Reminder from '../../domain/Reminder';

const deleteReminder = (
    reminder: Reminder,
    setReminders: Dispatch<SetStateAction<Reminder[]>>
): void => {
    setReminders(oldState => ([
        ...oldState.filter(item => item.id !== reminder?.id)
    ]))
}

export default deleteReminder;