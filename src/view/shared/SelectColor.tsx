import { Icon } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { ALL_COLORS, Colors } from '../../domain/Reminder';

interface IColorProps {
    checked: boolean;
    color: Colors;
    onChange: (color: string) => void;
}

const StyledColor = styled.div`
    background-color: ${({ color }) => color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    caret-color: transparent;

    .icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 767px) {
        height: 55px;
        width: 55px;
    }
`;

const Color: React.FC<IColorProps> = ({ color, checked, onChange }) => {
    return (
        <StyledColor className="color" color={color} onClick={() => onChange(color)}>
            {checked && (
                <Icon
                    className="icon"
                    style={{ color: '#FFF' }}
                    fontSize="large"
                >
                    check
                </Icon>
            )}
        </StyledColor>
    );
}

const StyledSelectColor = styled.div`
    .colors {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 5px;
        grid-column-gap: 5px;
        margin-top: 15px;
    }

    @media screen and (min-width: 767px) {
        .colors {
            grid-template-columns: repeat(6, 1fr);
        }
    }
`;

interface IComponentProps {
    label: string;
    value: Colors;
    onChange: (value: string) => void;
}

const SelectColor: React.FC<IComponentProps> = ({ label, value, onChange }) => {

    return (
        <StyledSelectColor>
            <label>{label}</label>

            <div className="colors">
                {ALL_COLORS.map(color => (
                    <Color
                        checked={value === color}
                        color={color}
                        onChange={onChange}
                    />
                ))}
            </div>
        </StyledSelectColor>
    );
}

export default SelectColor;