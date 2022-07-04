import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import styled, {keyframes} from "styled-components";

export default function Home() {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	return (
		<>
			<div style={{
				// TESTE PARA CENTRALIZAR VERTICALMENTE O MAINMENU
				height: 0
			}}>
				<MainMenu color="#EFE4A3">
					<li>
						<Link href="/taloes">
							<button>Talões</button>
						</Link>
					</li>
					<li>
						<Link href="/taloes/criar">
							<button>Criar Talão de Analise</button>
						</Link>
					</li>
					<li>
						<Link href="/taloes/criar">
							<button>Criar Talão</button>
						</Link>
					</li>
					<li>
						<Link href="/taloes/criar">
							<button>Login/Out</button>
						</Link>
					</li>
				</MainMenu>
			</div>
		</>
	);
}
const breatheAnimation = keyframes`
0% {letter-spacing: .1em; }
50% {letter-spacing: .2em;}
100% {letter-spacing: .1em;}
`;
const MainMenu = styled.ul.attrs(props => ({
	color : props.color || "white",
}))`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(2,50%);
	padding-left: 0;
	li{
		margin-top: auto;
		margin-left: 0;
		display: block;
	}
	li button{
	display: flex;
	height: calc(25vw - 55px);
	width: 100%;
	background-color: white;
	border: 1px solid black;
	text-decoration: none;
	color: black;
	font-size: 2rem;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	font-weight: 700;
	font-family: sans-serif;
	transition: 0.3s;
	background-color: #EFE4A3;
	}
	li button:hover{
		background-color: #2D2D2D;
		color: ${props => props.color};
		animation-name: ${breatheAnimation};
		animation-duration: 2s;
		animation-iteration-count: infinite;
		text-shadow: 0px 0px 20px black;
	}
	li button:active{
		color: #D13737;
		background-color: #EFE4A3;
	}
`;