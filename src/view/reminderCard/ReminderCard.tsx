import { SyntheticEvent, useState } from 'react';
import Reminder from '../../domain/Reminder';
import CreateOrUpdateReminderModal from '../createOrUpdateReminderModal/CreateOrUpdateReminderModal';
import StyledReminderCard from './StyledReminderCard';

interface IComponentProps {
    reminder: Reminder;
}

const ReminderCard: React.FC<IComponentProps> = ({ reminder }) => {
    let [reminderModalIsOpen, setReminderModalIsOpen] = useState(false);

    const openModal = (event: SyntheticEvent) => {
        event.stopPropagation();
        setReminderModalIsOpen(true);
    };

    const closeModal = () => setReminderModalIsOpen(false);

    return (
        <>
            <StyledReminderCard
                className="reminder-card"
                color={reminder.color}
                onClick={openModal}
            >
                {reminder.description}
            </StyledReminderCard>
            {reminderModalIsOpen
                ? (
                    <CreateOrUpdateReminderModal
                        onClose={closeModal}
                        reminder={reminder}
                    />
                )
                : null}
        </>
    );
}

export default ReminderCard;