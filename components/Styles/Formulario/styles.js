import styled from "styled-components";

export const StyledFormulario = styled.form`
    *::selection{
        background-color: #D13737;
        color: white;
    }
    box-sizing: border-box;
	display: grid;
	grid-template-columns: auto auto auto auto;
    gap: 15px 50px;
    width: 80%;
    margin: auto;
    padding: 10px 50px;
	background-color: #efe4a3;
    label{
        color: #2d2d2d;
	    font-weight: 700;
    }
    label input{
        display: inline-block;
        background: none;
        border: none;
        border-bottom: 2px solid #2d2d2d;
        padding: 10px;
        margin-left: 5px;
        font-weight: 700;
        transition: .5s;
        width: 100%;
        &:focus{
            outline: none;
            border-bottom: 2px solid #D13737;
            color: #D13737  ;
        }
    }
    label:nth-child(1){
        color: black;
        grid-column-start: 1;
        grid-column-end: 2;
    }
    label:nth-child(2){
        grid-column-start: 5;
        grid-column-end: 6;
        text-align: end;
        input{
            float: right;
            text-align: center;
            font-size: 1.1em;
            color: #D13737;
            width: 60px;
        }
    }
    label:nth-child(3){
        grid-column-start: 1;
        grid-column-end: 4;
    }
    label:nth-child(4){
        grid-column-start: 4;
        grid-column-end: 6;
    }
    label:nth-child(5){
        grid-column-start: 1;
        grid-column-end: 4;
    }
    label:nth-child(6){
        grid-column-start: 4;
        grid-column-end: 5;
    }
    label:nth-child(7){
        grid-column-start: 5;
        grid-column-end: 6;
    }
    label:nth-child(8){
        grid-column-start: 1;
        grid-column-end: 6;
    }
    label:nth-child(9){
        grid-column-start: 1;
        grid-column-end: 6;
    }
    label:nth-child(10){
        grid-column-start: 1;
        grid-column-end: 4;
    }
    label:nth-child(11){
        grid-column-start: 4;
        grid-column-end: 6;
    }
`;