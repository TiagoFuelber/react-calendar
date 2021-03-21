import styled from 'styled-components';

const StyledDay = styled.div`
    border-bottom: lightgrey 1px solid;
    height: 90px;
    padding: 3px;

    .day-indicator {
        font-size: 10px;
    }

    @media screen and (min-width: 767px) {
        height: 120px;
    }
`;

export default StyledDay;