import { v4 as uuidv4 } from 'uuid';

export const ALL_COLORS = [
    "rgb(235, 90, 70)",
    "rgb(235, 90, 0)",
    "rgb(97, 189, 79)",
    "rgb(242, 214, 0)",
    "rgb(255, 159, 26)",
    "rgb(235, 30, 10)",
    "rgb(195, 119, 224)",
    "rgb(0, 121, 191)",
    "rgb(0, 194, 224)",
    "rgb(81, 232, 152)",
    "rgb(255, 120, 203)",
    "rgb(179, 186, 197)"
] as const;

type ColorsTuple = typeof ALL_COLORS;

export type Colors = ColorsTuple[number];

class Reminder {
    id: string;
    description: string;
    date: Date;
    color: Colors;
    city: string;

    constructor(reminder: Reminder) {
        this.id = reminder.id || uuidv4();
        this.description = reminder.description || '';
        this.date = reminder.date;
        this.color = reminder.color || ALL_COLORS[0];
        this.city = reminder.city || '';
    }
};

export default Reminder;