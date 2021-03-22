import { SyntheticEvent, useState } from 'react';
import { format, isBefore } from 'date-fns';
import getDate from 'date-fns/getDate'
import CreateOrUpdateReminderModal from '../../createOrUpdateReminderModal/CreateOrUpdateReminderModal';
import StyledDay from './StyledDay';
import Reminder from '../../../domain/Reminder';
import ReminderCard from '../../reminderCard/ReminderCard';
import isMobile from '../../../helpers/isMobile';
import sortByTime from '../../../helpers/sortByTime';

interface IComponentProps {
    day: Date;
    reminders: Reminder[]
}

const Day: React.FC<IComponentProps> = ({ day, reminders }) => {
    let [reminderModalIsOpen, setReminderModalIsOpen] = useState(false);
    let [modalInitialDate] = useState<Date>(isBefore(day, new Date()) ? new Date() : day);

    const openModal = (event: SyntheticEvent) => {
        event.stopPropagation();
        setReminderModalIsOpen(true);
    };

    const closeModal = () => setReminderModalIsOpen(false);

    const REMINDERS_VISIBLE_MOBILE = 2;
    const REMINDERS_VISIBLE_DESKTOP = 3;
    const remindersVisible = isMobile()
        ? REMINDERS_VISIBLE_MOBILE
        : REMINDERS_VISIBLE_DESKTOP;

    return (
        <>
            <StyledDay data-testid={format(day, 'P')} onClick={openModal}>
                <span className="day-indicator">
                    {getDate(day)}
                </span>

                <div className="reminders">
                    {reminders
                        .sort(sortByTime)
                        .filter((reminder, i) => i < remindersVisible)
                        .map(reminder => (
                            <ReminderCard reminder={reminder} />
                        ))}
                </div>

                {reminders.length > remindersVisible
                    ? (
                        <div className="more-items">
                            {`+ ${reminders.length - remindersVisible}`}
                        </div>
                    )
                    : null}
            </StyledDay>
            {reminderModalIsOpen
                ? (
                    <CreateOrUpdateReminderModal
                        onClose={closeModal}
                        initialDate={modalInitialDate}
                    />
                )
                : null}
        </>
    )
};

export default Day;