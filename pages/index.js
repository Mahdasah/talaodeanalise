import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Botao } from "../components/Styles/Botao/styles";

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
                <Botao>Talões</Botao>
            </Link>
            <Link href="/taloes/criar">
                <Botao>Criar Talão de Analise</Botao>
            </Link>
        </>
    );
}
