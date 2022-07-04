import styled, {keyframes} from "styled-components";

const effect = keyframes`
    0%{
        color: #EFE4A3;
        background-color: #2D2D2D;
    }
    25%{
        color: #D13737;
        background-color: white;
    }
    50%{
        color: #D13737;
        background-color: white;
    }
    75%{
        color: #EFE4A3;
        background-color: #2D2D2D;
    }
    100%{
        color: #EFE4A3;
        background-color: #2D2D2D;
    }
`
const B = styled.button`
    box-sizing: border-box;
    color: #EFE4A3;
    background-color: #2D2D2D;
    border: 1px solid black;
    margin: 1px;
    padding: 5px;
    &:hover{
        background-color: #EFE4A3;
        color: #2D2D2D;
        cursor: pointer;
    }
    &::selection{
        border-color: #D13737;
    }
    &:active{
        background-color: #D13737;
        color: white;
    }
`;

export {B, effect}