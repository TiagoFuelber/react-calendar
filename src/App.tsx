import { Container } from '@material-ui/core';
import RemindersProvider from './state/RemindersProvider';
import Calendar from './view/calendar/Calendar';
function App() {


  return (
    <RemindersProvider>
      <Container>
        <Calendar />
      </Container>
    </RemindersProvider>
  );
}

export default App;
