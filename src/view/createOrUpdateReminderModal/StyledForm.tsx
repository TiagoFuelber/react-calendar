import styled from 'styled-components';

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 25px;

    .description, .city, .select-color, .actions {
        grid-column: 1 / -1;
    }

    select, .MuiInputBase-root {
        width: 100%;
    }

    .actions {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (min-width: 767px) {
        grid-template-columns: repeat(4, 1fr);

        .actions {
            justify-content: flex-end;

            > :first-child {
                margin-right: 25px;
            }
        }
    }
`;

export default StyledForm;