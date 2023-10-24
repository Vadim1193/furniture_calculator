import styled from "styled-components";
import { useState } from "react";
import { updateCash, updateSheet } from "../../store/reducer";
import { useDispatch } from 'react-redux';

export const CalcContainer = styled.div`
    max-width: 900px;
    padding: 10px 5px;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.4);
    margin-bottom: 15px;
    border-radius: 10px;
    background: white;
    
    @media (max-width: 767px) {
        margin-bottom: 10px;
    }
`;

export const NumberInputProduct = ({ placeholderValue, idInput, onValueBlur, className }) => {
    const [valueInput, setValueInput] = useState('');
    
    const onBlurHandler = (event) => {
        const newValueInput = event.target.value;
        setValueInput(newValueInput);
        onValueBlur(idInput, newValueInput);
    }

    return (
        <input
            type="text"
            className={`input input_number ${className}`}
            pattern="[0-9]*"
            placeholder={placeholderValue}
            onBlur={onBlurHandler}
            onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9.-]/, '');
            }}
        />
    )
}

const NumberInput = ({ id, updateAction, placeholderValue}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onBlurHandler = (event) => {
        const newValueNumInput = event.target.value;
        setValue(newValueNumInput);
        dispatch(updateAction({ newValueNumInput, id }));
    }

    return (
        <input
            type="text"
            className="input input_unit"
            pattern="[0-9]*"
            onBlur={onBlurHandler}
            placeholder={placeholderValue}
            onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9.-]/, '');
            }}
        />
    );
}

export const NumberInputCash = ({ id }) => {
    return (
        <NumberInput id={id} updateAction={updateCash} placeholderValue={'грн.'}/>
    );
}

export const NumberInputSheet = ({ id }) => {
    return (
        <NumberInput id={id} updateAction={updateSheet} placeholderValue={'листи.'}/>
    );
}

export const MySpan = ({value = 'x', nameClass = 'multiply'}) => <span className={nameClass}>{value}</span>;

export const BtnCount = styled.button`
    padding: 7px 17px;
    border: 1px solid black;
    background: white;
    position: relative;
    z-index: 3;
    border-radius: 9px;
    overflow: hidden;
    transition: all 0.6s ease 0s;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -1px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        z-index: -1;
        background-color: #0074d9;
        transform: translateX(-100%);
        transition: all 0.6s ease 0s;
    }

    &:hover::before{ 
        transform: translateX(1%);
    }

    &:hover { 
        color: white;
    }
`;