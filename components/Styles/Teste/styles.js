import styled from "styled-components";

export const TesteS = styled.button`
	padding: 5px;
	background-color: black;
	color: white;
	border-radius: 5px;
	&:hover {
		background-color: white;
		color: black;
	}
	${(props) =>
		props.red &&
		css`
			color: #d13737;
			background: none;
			padding: 5px;
		`};
`;
