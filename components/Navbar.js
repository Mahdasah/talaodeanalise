import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
	const { data: session } = useSession();
	return (
		<nav>
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
				{!session && (
					<li>
						<Link href="#">
							<a onClick={() => signIn()}>Sign In</a>
						</Link>
					</li>
				)}
				{session && (
					<li>
						<Link href="#">
							<a onClick={() => signOut()}>Sign Out</a>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
