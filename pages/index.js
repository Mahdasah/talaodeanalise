import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import styled from "styled-components";
import {Botao} from "../components/Styles";

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
				<MainMenu>
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
							<button>Talões</button>
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
const MainMenu = styled.ul`
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
	}
	li button:hover{
		background-color: #2D2D2D;
		color: #EFE4A3;
		transition: .2s;
	}
	li button:active{
		color: #D13737;
		background-color: #EFE4A3;
	}
`;