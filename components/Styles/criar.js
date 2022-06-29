import styled from "styled-components";

export const Formulario = styled.form`
	display: grid;
	column-gap: 10px;
	row-gap: 15px;
	background-color: #efe4a3;
	grid-template: auto auto auto auto;
    label{
        color: #2d2d2d;
	    font-weight: 700;
    }
    input{
        background: none;
        border: none;
        border-bottom: 2px solid #2d2d2d;
        padding: 10px;
        margin-left: 5px;
        font-weight: 700;
        &:focus {
            outline: none;
            border-bottom: 2px solid #d13737;
        }
    }
`;