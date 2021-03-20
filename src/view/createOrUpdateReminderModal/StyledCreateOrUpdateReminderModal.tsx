import styled from 'styled-components';

const StyledCreateOrUpdateReminderModal = styled.div`
    position: 'absolute';
    outline: 0;
    background-color: #FFF;
    padding: 25px 15px;

    .close {
        font-size: 18px;
        font-weight: 900;
        position: absolute;
        border: none;
        background: none;
        right: 5px;
        top: 8px;
        cursor: pointer;
    }

    @media screen and (min-width: 767px) {
        padding: 35px 15px;
    }
`;

export default StyledCreateOrUpdateReminderModal;