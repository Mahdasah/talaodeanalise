import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function Navbar() {
	const { data: session } = useSession();
	return (
		<nav>
			<Menu className={""}>
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
	li a{
		display: flex;
		background-color: white;
		border: 1px solid black;
		text-decoration: none;
		color: black;
		align-items: center;
		justify-content: center;
		font-family: sans-serif;
		margin: 5px;
		padding: 5px;
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