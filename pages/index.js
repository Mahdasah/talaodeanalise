import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
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
			<Link href="/taloes">
				<Botao color="white">Talões</Botao>
			</Link>
			<Link href="/taloes/criar">
				<Botao color="white">Criar Talão de Analise</Botao>
			</Link>
		</>
	);
}
