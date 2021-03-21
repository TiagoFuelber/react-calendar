import styled from 'styled-components';

const StyledCalendarHeader = styled.div`
    background: lightgrey;
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;

    .controls {
        display: none;
        
        button {
            color: #FFF;
            background: none;
            border: none;
            font-size: 30px;
            font-weight: 900;
            outline: none;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 767px) {
        text-align: initial;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .controls {
            display: initial;
        }
    }
`;

export default StyledCalendarHeader;