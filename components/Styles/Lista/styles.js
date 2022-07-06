import styled from "styled-components";
import '../../../public/dl.png';

export const StyledLista = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1em 1em;
    background-color: #EFE4A3;
    padding: .5em;
    align-items: center;
    margin-top: 0;
    overflow: hidden;
    margin-bottom: 30px;
    li{
        list-style: none;
        text-decoration: none;
        color: #2D2D2D;
        grid-column-start: 1;
        grid-column-end: 3;
        width: fit-content;
        width: 100%;
    }
    li span{
        font-size: 1.2rem;
        font-weight: 700;
        border-bottom: solid 2px #2D2D2D;
        width: 100%;
        display: inline-block;
    }
    /* DATA */
    li:nth-child(1){
        grid-column-start: 1;
        grid-column-end: 2;
    }
    /* NÚMERO DE TALÃO */
    li:nth-child(2){
        grid-column-start: 2;
        grid-column-end: 3;
        font-weight: 700;
        font-size: 1.5rem;
        border: none;
        color: #D13737;
        word-wrap: break-word;
        word-break: break-all;
        text-align: end;
    }
    /* CLIENTE */
    li:nth-child(3){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    /* TELEFONE */
    li:nth-child(4){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    /* PRODUTO */
    li:nth-child(5){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    /* REFERENCIA */
    li:nth-child(6){
        grid-column-start: 1;
        grid-column-end: 2;
    }
    /* NUMERAÇÃO */
    li:nth-child(7){
        grid-column-start: 2;
        grid-column-end: 3;
        span{
            word-wrap: break-word;
            height: auto;
            display: block;
            word-break: break-all;
        }
    }
    /* DESC */
    li:nth-child(8){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    /* OBS */
    li:nth-child(9){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    /* RECEBIDO POR */
    li:nth-child(10){
        grid-column-start: 1;
        grid-column-end: 2;
    }
    /* LOJA */
    li:nth-child(11){
        grid-column-start: 2;
        grid-column-end: 3;
    }
    div.textureDL{
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        grid-column-start: 1;
        grid-column-end: 3;
        span{
            margin: auto;
            font-weight: 700;
            color: #2D2D2D;
            font-size: 2em;
        }
        &::before{
            content: ' ';
            background-image: url('dl.png');
            background-repeat: repeat;
            background-size: 1em;
            background-position: rotate(30deg);
            width: 50%;
            margin-right: 50px;
            height: 100%;
        }
        &::after{
            content: " .";
            background-image: url('dl.png');
            background-repeat: repeat;
            background-size: 1em;
            width: 50%;
            margin-left: 50px;
            height: 100%;
        }
    }
    @media only screen and (min-width: 700px ) and (max-width: 1000px ){
        grid-template-columns: auto auto auto;
        div.textureDL{
            grid-column-end: 4;
        }
        li{
            grid-column-start: 1;
            grid-column-end: 3;
        }
        li:nth-child(2){
            grid-column-start: 3;
            grid-column-end: 3;
        }
        li:nth-child(3){
            grid-column-end: 3;
        }
        li:nth-child(4){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        li:nth-child(5){
            grid-column-start: 1;
            grid-column-end: 2;
        }
        li:nth-child(6){
            grid-column-start: 2;
            grid-column-end: 3;
        }
        li:nth-child(7){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        li:nth-child(8){
            grid-column-start: 1;
            grid-column-end: 4;
        }
        li:nth-child(9){
            grid-column-start: 1;
            grid-column-end: 4;
        }
        li:nth-child(10){
            grid-column-start: 1;
            grid-column-end: 2;
        }
        li:nth-child(11){
            grid-column-start: 3;
            grid-column-end: 4;
        }
    }
    @media only screen and (min-width: 1001px ){
        grid-template-columns: auto auto auto auto;
        width: 80%;
        margin: auto;
        margin-bottom: 30px;
        padding: 1em;
        div.textureDL{
            grid-column-end: 5;
        }
        li{
            grid-column-start: 1;
            grid-column-end: 5;
        }
        li:nth-child(2){
            grid-column-start: 3;
            grid-column-end: 5;
        }
        li:nth-child(3){
            grid-column-end: 3;
        }
        li:nth-child(4){
            grid-column-start: 3;
            grid-column-end: 5;
        }
        li:nth-child(5){
            grid-column-start: 1;
            grid-column-end: 3;
        }
        li:nth-child(6){
            grid-column-start: 3;
            grid-column-end: 4;
        }
        li:nth-child(7){
            grid-column-start: 4;
            grid-column-end: 5;
        }
        li:nth-child(8){
            grid-column-start: 1;
            grid-column-end: 5;
        }
        li:nth-child(9){
            grid-column-start: 1;
            grid-column-end: 5;
        }
        li:nth-child(10){
            grid-column-start: 1;
            grid-column-end: 3;
        }
        li:nth-child(11){
            grid-column-start: 4;
            grid-column-end: 5;
        }
    }
`;