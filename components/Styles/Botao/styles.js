import styled, {keyframes} from "styled-components";

const effect = keyframes`
    0%{
        color: #EFE4A3;
        background-color: #2D2D2D;
    }
    50%{
        color: #D13737;
        background-color: white;
    }
    100%{
        color: #EFE4A3;
        background-color: #2D2D2D;
    }
`
const B = styled.button`
    color: #EFE4A3;
    background-color: #2D2D2D;
    border: 1px solid black;
    margin: 1px;
    
    &:hover{
        animation: ${effect};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
    outline-color: #D13737;
    &::selection{
        border-color: #D13737;
    }
`;

export {B, effect}