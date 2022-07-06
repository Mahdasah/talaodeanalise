import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import { Botao } from "./Styles";

export default function Navbar() {
	const { data: session } = useSession();
	return (
		<MenuHamburger>
			<ul className={""}>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/taloes">
						<a>Talões</a>
					</Link>
				</li>
				<li>
					<Link href="/taloes/criar">
					<a>Criar Talão</a>
					</Link>
				</li>
				{session && (
					<li>
						<Link href="#">
							<a onClick={() => signOut()}>Sign Out</a>
						</Link>
					</li>
				)}
			</ul>
		</MenuHamburger>
	);
}
const MenuHamburger = styled.nav`
	z-index: 99;
	display: none;
	position: fixed;
	top: 0;
	height: 100vh;
	width: 80%;
	background-color: white;
	box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
	text-align: center;
	&:before{
		content: 'MENU';
		font-weight: 1000;
		font-size: 2em;
		font-family: sans-serif;
	}
	ul{
		display: flex;
		list-style: none;
		flex-direction: column;
		padding: 0;
		li{
			a{
				display: block;
				padding: 50px 0;
				width: 100%;
				font-size: 1.5em;
				font-weight: 1000;
				font-family: arial;
				text-transform: uppercase;
				text-decoration: none;
				color: #2D2D2D;
				border-bottom: 1px solid #2D2D2D;
				&:hover{
					background-color: #2D2D2D;
					color: #EFE4A3;
				}
			}
			
		}
	}
	@media only screen and (min-width: 700px){
		ul{
			list-style: none;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			a{
				text-decoration: none;
				font-family: sans-serif;
				text-transform: uppercase;
				font-weight: 1000;
				padding: 15px;
				color: #EFE4A3;
				background-color: #2D2D2D;
			}
		}
	}
`;
const Menu = styled.ul`

	
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