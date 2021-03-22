import styled from 'styled-components';

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 25px;

    .description,
    .year, 
    .city, 
    .select-color, 
    .actions,
    .forecast {
        grid-column: 1 / -1;
    }

    select, .MuiInputBase-root {
        width: 100%;
    }

    .actions {
        display: flex;
        justify-content: space-between;
    }

    .forecast {
        display: flex;
        justify-content: center;
        caret-color: transparent;
        background: lightcyan;
        border-radius: 5px;
        padding: 20px;

        .icon.wi {
            color: grey;
            font-size: 35px;
        }
    }

    @media screen and (min-width: 767px) {
        grid-template-columns: repeat(3, 1fr);

        .year {
            grid-column: auto;
        }

        .actions {
            justify-content: flex-end;

            > :not(:last-child) {
                margin-right: 25px;
            }
        }
    }
`;

export default StyledForm;