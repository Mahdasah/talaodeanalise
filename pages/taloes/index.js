import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Botao } from "../../components/Styles/Botao/styles";
import Pagination from "@etchteam/next-pagination";

export default function TaloesList({ res, total }) {
	console.log(total);
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
			<Pagination total={total} />
		</>
	);
}

export async function getServerSideProps({ query }) {
	console.log(query);
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
	const total = (await prisma.taloes.findMany()).length;
	if (query.page && !query.size) {
		const data = await prisma.taloes.findMany({
			take: 20,
			skip: 20 * parseInt(query.page) - 20,
			orderBy: {
				talao: "asc",
			},
		});
		if (total === 0) {
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
				total: total,
			},
		};
	} else if (query.page && query.size) {
		const data = await prisma.taloes.findMany({
			take: parseInt(query.size),
			skip: parseInt(query.size) * parseInt(query.page) - parseInt(query.size),
			orderBy: {
				talao: "asc",
			},
		});
		if (total === 0) {
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
				total: total,
			},
		};
	} else {
		const data = await prisma.taloes.findMany({
			take: 20,
			skip: 0,
			orderBy: {
				talao: "asc",
			},
		});
		if (total === 0) {
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
				total: total,
			},
		};
	}
}
