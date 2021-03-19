import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '@material-ui/core';

test('renders a button on the screen', () => {
    render(<Button color="primary">Hello</Button>);
    expect(screen.getByPlaceholderText('button')).toHaveTextContent('Hello');
});
//