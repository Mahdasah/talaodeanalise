import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Botao } from "../components/Styles/Botao/styles";

export default function Home() {

<<<<<<< HEAD

    useSession({
        required: true,
        onUnauthenticated() {
            signIn();
        },
    });
    return (
        <>
            <Link href="/taloes">
                <Botao>Talões</Botao>
            </Link>
            <Link href="/taloes/criar">
                <Botao>Criar Talão de Analise</Botao>
            </Link>
            <Link href="/taloes/deletar">
				<Botao>Deletar Talão de Analise</Botao>
            </Link>
        </>
    );
=======
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
>>>>>>> main
}
