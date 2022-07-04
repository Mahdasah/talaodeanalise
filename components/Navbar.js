import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import { Botao } from "./Styles";

export default function Navbar() {
	const { data: session } = useSession();
	return (
		<nav>
			<Menu className={""}>
				<li>
					<Link href="/">
						<a><Botao>Home</Botao></a>
					</Link>
				</li>
				<li>
					<Link href="/taloes">
						<a><Botao>Talões</Botao></a>
					</Link>
				</li>
				<li>
					<Link href="/taloes/criar">
					<a><Botao>Criar Talão</Botao></a>
					</Link>
				</li>
				{session && (
					<li>
						<Link href="#">
							<a onClick={() => signOut()}><Botao>Sign Out</Botao></a>
						</Link>
					</li>
				)}
			</Menu>
			<hr />
		</nav>
	);
}
const Menu = styled.ul`
	list-style: none;
	li{
		margin-top: auto;
		margin-left: 0;
		display: inline-block;
	}
	/* li a{
		display: flex;
		background-color: #EFE4A3;
		border: 1px solid black;
		text-decoration: none;
		color: black;
		align-items: center;
		justify-content: center;
		font-family: sans-serif;
		margin: 5px;
		padding: 5px;
		transition: .2s;
		text-transform: uppercase;
		font-weight: 700;
	} */
	/* li a:hover{
		background-color: #2D2D2D;
		color: #EFE4A3;
		letter-spacing: 0.1em;
	}
	li a:active{
		color: #D13737;
		background-color: #EFE4A3;
	} */
`;