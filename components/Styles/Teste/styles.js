import styled from "styled-components";

export const TesteS = styled.button`
	padding: 5px;
	background-color: ${(props) => (props.red ? "red" : "black")};
	color: white;
	border-radius: 5px;
	&:hover {
		background-color: ${(props) => (props.red ? "blue" : "white")};
		color: ${(props) => (props.red ? "white" : "black")};
	}
`;
