import { useState } from 'react';
import { Button, Container } from '@material-ui/core';
import CreateOrUpdateReminderModal from './view/createOrUpdateReminderModal/CreateOrUpdateReminderModal';

function App() {
  let [reminderModalIsOpen, setReminderModalIsOpen] = useState(false);
  let [modalInitialDate, setModalInitialDate] = useState<Date>(new Date());

  const handleModal = (initialDate: Date) => () => {
    setModalInitialDate(initialDate);
    setReminderModalIsOpen(state => !state);
  };

  const closeModal = () => setReminderModalIsOpen(false);

  return (
    <Container>
      <Button
        color="primary"
        onClick={handleModal(new Date())}
      >
        Add a reminder
      </Button>
      <CreateOrUpdateReminderModal
        open={reminderModalIsOpen}
        onClose={closeModal}
        initialDate={modalInitialDate}
      />
    </Container>
  );
}

export default App;
