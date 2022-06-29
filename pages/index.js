import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import Botao from "../components/Styles/Botao";

export default function Home() {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	return (
		<>
			<Link href="/taloes">
				<button>Talões</button>
			</Link>
			<Link href="/taloes/criar">
				<button>Criar Talão de Analise</button>
			</Link>
		</>
	);
}
