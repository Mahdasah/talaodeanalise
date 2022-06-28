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
		<>
			<Link href="/taloes">
				<button>Talões</button>
			</Link>
			<Link href="/taloes/criar">
				<button>Criar Talão de Analise</button>
			</Link>
			<Link href="/taloes/deletar">
				<button>Deletar Talão de Analise</button>
			</Link>
		</>
	);
}
