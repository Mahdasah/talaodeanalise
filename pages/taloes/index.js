import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Botao } from "../../components/Styles/Botao/styles";

export default function TaloesList({ res }) {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	return (
		<>
			<h1>TALOES DE ANÁLISE DE PRODUTOS</h1>
			<form>
				{res.map((talao, i) => {
					return (
						<>
							<hr />
							<Botao
								tipo="bad"
								key={i}
								type="submit"
								name="talaoid"
								value={talao.idtalao}>
								X
							</Botao>
							<Link href={`/taloes/${talao.idtalao}`}>
								<a>
									<ul>
										{/* <li>idtalao: {talao.idtalao}</li> */}
										<li>talão: {talao.talao}</li>
										<li>data: {talao.data}</li>
										<li>cliente: {talao.cliente}</li>
										<li>tel: {talao.tel}</li>
										<li>produto: {talao.produto}</li>
										<li>numeração: {talao.numeracao}</li>
										<li>descrição: {talao.descricao}</li>
										<li>obs: {talao.obs}</li>
										<li>recebidopor: {talao.recebidopor}</li>
										<li>loja: {talao.loja}</li>
									</ul>
								</a>
							</Link>
						</>
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
				idtalao: query.talaoid,
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
	// console.log(data);
	if (data.length === 0) {
		return {
			redirect: {
				permanent: false,
				destination: "/taloes/criar",
			},
		};
	}
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
