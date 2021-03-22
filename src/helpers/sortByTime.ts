import Reminder from '../domain/Reminder';

const sortByTime = (a: Reminder, b: Reminder) =>
    a.date.getTime() - b.date.getTime();

export default sortByTime;