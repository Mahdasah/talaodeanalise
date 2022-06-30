<<<<<<< HEAD
import styled from "styled-components";
export default function Botao(props){
	return(
		<Botao>{props.children}</Botao>
	)
}

const Botao = styled.button`
	padding: 5px;
	background-color: black;
	color: white;
	border-radius: 5px;
	&:hover {
		background-color: white;
		color: black;
	}
	${props => props.red && css`
		color: #D13737;
		background: none;
		padding: 5px;
	`};
`;
=======
import { Botao } from "./styles";
export default function Button(props) {
	return <Botao>{props.children}</Botao>;
}
>>>>>>> main
