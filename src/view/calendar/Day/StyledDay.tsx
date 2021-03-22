import styled from 'styled-components';

const StyledDay = styled.div`
    border-bottom: lightgrey 1px solid;
    height: 90px;
    padding: 3px;
    position: relative;
    cursor: pointer;

    .day-indicator {
        font-size: 10px;
    }

    .reminders {
        display: grid;
        grid-row-gap: 3px;
        margin-top: 3px;
    }

    .more-items {
        font-size: 10px;
        text-align: right;
    }

    .disabled {
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .1);
    }

    @media screen and (min-width: 767px) {
        height: 120px;
    }
`;

export default StyledDay;