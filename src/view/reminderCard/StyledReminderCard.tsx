import styled from 'styled-components';

const StyledReminderCard = styled.div`
    font-size: 10px;
    padding: 3px;
    background-color: ${({ color }) => color};
    border-radius: 3px;
    color: #FFF;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;

    @media screen and (min-width: 767px) {
        font-size: 12px;
        padding: 3px 7px;
    }
`;

export default StyledReminderCard;