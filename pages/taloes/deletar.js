import { useSession, signIn } from "next-auth/react";

export default function TaloesList({ res }) {
	const { data: session } = useSession();
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
			<form>
				{res.map((talao, i) => {
					return (
						<ul key={i}>
							<hr />
							<button type="submit" name="talaoid" value={talao.idtalao}>
								X
							</button>
							<li>idtalao: {talao.idtalao}</li>
							<li>talao: {talao.talao}</li>
							<li>data: {talao.data}</li>
							<li>clientid: {talao.cliente}</li>
							<li>tel: {talao.tel}</li>
							<li>produtoid: {talao.produto}</li>
							<li>numeracao: {talao.numeracao}</li>
							<li>descricao: {talao.descricao}</li>
							<li>obs: {talao.obs}</li>
							<li>recebidopor: {talao.recebidopor}</li>
							<li>lojaid: {talao.loja}</li>
						</ul>
					);
				})}
			</form>
		</>
	);
}

export async function getServerSideProps({ query }) {
	// console.log(query);
	const { PrismaClient } = require("@prisma/client");
	const prisma = new PrismaClient();
	if (query.talaoid) {
		await prisma.taloes.delete({
			where: {
				idtalao: parseInt(query.talaoid),
			},
		});
		return {
			redirect: {
				permanent: false,
				destination: "/taloes",
			},
		};
	}
	const data = await prisma.taloes.findMany();
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
