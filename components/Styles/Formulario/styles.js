import styled from "styled-components";
import '../../../public/dl.png';

export const StyledFormulario = styled.form`
    *::selection{
        background-color: #D13737;
        color: white;
        box-sizing: border-box;
    }
	display: grid;
	grid-template-columns: auto;
    gap: 1em 1em;
    margin: auto;
    padding: 10px 15px;
	background-color: #efe4a3;
    label{
        color: #6d6d6d;
	    font-weight: 700;
        width: 100%;
    }
    label input{
        display: inline-block;
        background: none;
        border: none;
        border-bottom: 2px solid #2d2d2d;
        padding: 10px 0;
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
        grid-column-start: 1;
        grid-column-end: 2;
    }
    label:nth-child(2){
        grid-column-start: 2;
        grid-column-end: 3;
        text-align: end;
        input{
            display: block;
            text-align: end;
            color: #D13737;
        }
    }
    label:nth-child(3){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    label:nth-child(4){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    label:nth-child(5){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    label:nth-child(6){
        grid-column-start: 1;
        grid-column-end: 2;
    }
    label:nth-child(7){
        grid-column-start: 2;
        grid-column-end: 3;
    }
    label:nth-child(8){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    label:nth-child(9){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    label:nth-child(10){
        grid-column-start: 1;
        grid-column-end: 2;
    }
    label:nth-child(11){
        grid-column-start: 2;
        grid-column-end: 3;
    }
    div.textureDL{
        height: 50px;
        width: 100%;
        display: flex;
        grid-column-start: 1;
        grid-column-end: 3;
        align-items: center;
        span{
            margin: auto;
            font-weight: 700;
            color: #2D2D2D;
            font-size: 2em;
        }
    }
    button{
        grid-column-start: 1;
        grid-column-end: 3;
    }
    @media only screen and (min-width: 700px) and (max-width: 1099px){
        grid-template-columns: auto auto auto;
        label:nth-child(1){
            grid-column-end: 2;
        }
        label:nth-child(2){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        label:nth-child(3){
            grid-column-end: 3;
        }
        label:nth-child(4){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        label:nth-child(5){
            grid-column-end: 2;
        }
        label:nth-child(6){
            grid-column-start: 2;
            grid-column-end: 3;
        }
        label:nth-child(7){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        label:nth-child(8){
            grid-column-end: 4;
        }
        label:nth-child(9){
            grid-column-end: 4;
        }
        label:nth-child(11){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        div.textureDL, button{
            grid-column-end: 4;
        }
    }
    @media only screen and (min-width: 1100px){
        grid-template-columns: auto auto auto auto;
        div.textureDL, button{
            grid-column-end: 5;
        }
        label:nth-child(2){
            grid-column-start: 4;
            grid-column-end: 5;
        }
        label:nth-child(3){
            grid-column-start: 1;
            grid-column-end: 4;
        }
        label:nth-child(4){
            grid-column-start: 4;
            grid-column-end: 5;
        }
        label:nth-child(5){
            grid-column-end: 3;
        }
        label:nth-child(6){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        label:nth-child(7){
            grid-column-start: 4;
            grid-column-end: 5;
        }
        label:nth-child(8){
            grid-column-end: 5;
        }
        label:nth-child(9){
            grid-column-end: 5;
        }
        label:nth-child(10){
            grid-column-start: 1;
            grid-column-end: 2;
        }
        label:nth-child(11){
            grid-column-start: 4;
            grid-column-end: 5;
        }
    }
`;