import styled from "styled-components";

const StyledStatus = styled.span`
    color: ${props => props.theme.main};
    border-bottom: 2px solid ${props => props.theme.main};
`;

StyledStatus.defaultProps = {
    theme: {
        main: "black",
    }
}

export {StyledStatus};