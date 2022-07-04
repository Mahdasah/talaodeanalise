import { StyledStatus } from "./styles";

export default function Status(props){
    
    return(
        <StyledStatus {...props}>{props.children}</StyledStatus>
    );
}