import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
export default function Home() {

	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	return (
		<div className="home">
			<Link href="/taloes">
				<button>Talões</button>
			</Link>
			<Link href="/taloes/criar">
				<button>Criar Talão de Analise</button>
			</Link>
		</div>
	);
}
