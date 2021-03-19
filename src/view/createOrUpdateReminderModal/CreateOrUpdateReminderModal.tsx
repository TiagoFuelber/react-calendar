import React from 'react';
import { Container, Dialog, Typography } from '@material-ui/core';
import StyledCreateOrUpdateReminderModal from './StyledCreateOrUpdateReminderModal';

interface ComponentProps {
    open: boolean,
    onClose: () => void
}

const CreateOrUpdateReminderModal: React.FC<ComponentProps> = ({ open, onClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Container>
                <StyledCreateOrUpdateReminderModal>
                    <button
                        className="close"
                        aria-label="close"
                        onClick={onClose}
                    >
                        &#10005;
                    </button>
                    <Typography variant='body1'>Reminder Reminder Reminder</Typography>
                </StyledCreateOrUpdateReminderModal>
            </Container>
        </Dialog>
    )
}

export default CreateOrUpdateReminderModal;