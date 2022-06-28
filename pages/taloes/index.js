import Talao from "../../components/Talao";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function TaloesList({ res }) {
	const { data: session } = useSession();
	const router = useRouter();
	if(router.isFallback){
		return <p>Loading...</p>
	}
	if (!session) {
		return (
			<>
				Not signed in <br />
				<button onClick={() => signIn()}>Sign in</button>
			</>
		);
	}
	return (
		<>
			<h1>TALOES DE ANÁLISE DE PRODUTOS</h1>
			{res.map((talao, i) => {
				return <Talao key={i} arr={talao} tipo="todos" />;
			})}
		</>
	);
}

export async function getServerSideProps() {
	const { PrismaClient } = require("@prisma/client");
	const prisma = new PrismaClient();
	const data = await prisma.taloes.findMany();
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
