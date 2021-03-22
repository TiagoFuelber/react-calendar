import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Reminder from '../domain/Reminder';

type state = [Reminder[], Dispatch<SetStateAction<Reminder[]>>];

interface IComponentProps {
    children: React.ReactNode
}

export const RemindersContext = createContext<state>([[], () => { }]);

const RemindersProvider: React.FC<IComponentProps> = ({ children }) => {
    let [reminders, setReminders] = useState<Reminder[]>([]);

    return (
        <RemindersContext.Provider value={[reminders, setReminders]}>
            {children}
        </RemindersContext.Provider>
    )
}

export default RemindersProvider;
