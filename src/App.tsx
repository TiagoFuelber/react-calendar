import { useState } from 'react';
import { Button, Container } from '@material-ui/core';
import CreateOrUpdateReminderModal from './view/createOrUpdateReminderModal/CreateOrUpdateReminderModal';

function App() {
  let [createOrUpdateReminderModalIsOpen, setCreateOrUpdateReminderModalIsOpen] = useState(false);

  const handleModal = () => setCreateOrUpdateReminderModalIsOpen(state => !state);

  return (
    <Container>
      <Button
        color="primary"
        onClick={handleModal}
      >
        Add a reminder
      </Button>
      <CreateOrUpdateReminderModal
        open={createOrUpdateReminderModalIsOpen}
        onClose={handleModal}
      />
    </Container>
  );
}

export default App;
