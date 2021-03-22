import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calendar from './view/calendar/Calendar';
import userEvent from '@testing-library/user-event';
import Day from './view/calendar/Day/Day';

const setUp = () => {
  const utils = render(<Calendar />);
  userEvent.click(screen.getByTestId('03/21/2021'))

  return utils;
}

const fillInAReminderWithLongText = (screen) => {
  const reminderInput = screen.getByLabelText('reminder');
  fireEvent.change(reminderInput, { target: { value: 'Reminder with a text longer than 30 characters' } });
  return reminderInput;
}

const fillInAReminder = (screen) => {
  const reminderInput = screen.getByLabelText('reminder');
  fireEvent.change(reminderInput, { target: { value: 'Reminder test' } });
}

test('ability to add a new reminder', () => {
  render(<Day day={new Date()} reminders={[]} />)
  userEvent.click(screen.getByTestId('03/21/2021'));
  fillInAReminder(screen);
  expect(screen.getByTestId('dialog')).toBeVisible()
  userEvent.click(screen.getByTestId('save'));
  expect(screen.getAllByText('Reminder test')).toBeVisible();
});

test('a reminder should keep maximum characteres at 30', () => {
  setUp();
  const input = fillInAReminderWithLongText(screen);
  expect(input).toBeInvalid();
  expect(screen.getByTestId('save')).toBeDisabled();
});
//