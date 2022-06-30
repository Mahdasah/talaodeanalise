// import { TesteS } from "../components/Styles/Teste/styles";
import styled from "styled-components";

const TesteS = styled.h1`
	padding: 5px;
	background-color: black;
	color: white;
	border-radius: 5px;
	&:hover {
		background-color: white;
		color: black;
	}
`;

export default function Teste() {
	return (
		<>
			<TesteS>Teste</TesteS>
			<div>Teste</div>
			<div>Teste</div>
		</>
	);
}
