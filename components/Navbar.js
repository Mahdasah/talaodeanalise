import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function Navbar() {
	const { data: session } = useSession();
	return (
		<nav>
			<MainMenu className={""}>
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
			</MainMenu>
			<hr />
		</nav>
	);
}
const MainMenu = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: auto auto auto auto;
	li{
		margin-top: auto;
		margin-left: 0;
		display: inline-block;
	}
	li a{
		display: flex;
		height: 200px;
		width: 250px;
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
	li a:hover{
		background-color: #2D2D2D;
		color: #EFE4A3;
		transition: .2s;
	}
	li a:active{
		color: #D13737;
		background-color: #EFE4A3;
	}
`;