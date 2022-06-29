import styled from "styled-components";

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 15px 15px;
    background-color: #EFE4A3;
    padding: 25px;
    width: 1000px;
    height: auto;
    margin: auto;
    align-items: center;
    
    li{
        list-style: none;
        text-decoration: none;
        color: #2D2D2D;
    }
    li span{
        font-size: 1.2rem;
        font-weight: 700;
        border-bottom: solid 2px #2D2D2D;
        width: 100%;
        display: inline-block;
    }
    li:nth-child(1){
        grid-column-start: 1;
        grid-column-end: 2;
        span{
            margin-right: 5px;
            width: auto;
        }
    }
    li:nth-child(2){
        font-weight: 700;
        margin-left: auto;
        font-size: 1.5rem;
        border: none;
        color: red;
        grid-column-start: 5;
        grid-column-end: 5;
    }
    li:nth-child(3){
        grid-column-start: 1;
        grid-column-end: 4;
    }
    li:nth-child(4){
        grid-column-start: 4;
        grid-column-end: 6;
    }
    li:nth-child(5){
        grid-column-start: 1;
        grid-column-end: 4;
    }
    li:nth-child(6){
        grid-column-start: 4;
        grid-column-end: 6;
        span{
            width: fit-content;
            display: block;
            /* border: none; */
        }
    }
    li:nth-child(7){
        grid-column-start: 1;
        grid-column-end: 6;
    }
    li:nth-child(8){
        grid-column-start: 1;
        grid-column-end: 6;
    }
    li:nth-child(9){
        grid-column-start: 1;
        grid-column-end: 4;
    }
    li:nth-child(10){
        grid-column-start: 4;
        grid-column-end: 6;
    }
    div{
        height: 100px;
        background-color: #2D2D2D;
        width: 100%;
        display: block;
    }
`;