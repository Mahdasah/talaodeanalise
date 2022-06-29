import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Botao } from "../../components/Styles/Botao/styles";

export default function TaloesList({ res }) {
	const [query, setQuery] = useState("");
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	return (
		<>
			<h1>TALOES DE ANÁLISE DE PRODUTOS</h1>
			<label>
				Filtro
				<input
					placeholder="Filtro"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</label>
			<form>
				{res
					.filter((talao) => {
						if (query === "") {
							return talao;
						} else if (
							talao.talao.toLowerCase().includes(query.toLowerCase()) ||
							talao.data.toLowerCase().includes(query.toLowerCase()) ||
							talao.cliente.toLowerCase().includes(query.toLowerCase()) ||
							talao.produto.toLowerCase().includes(query.toLowerCase()) ||
							talao.descricao.toLowerCase().includes(query.toLowerCase()) ||
							talao.loja.toLowerCase().includes(query.toLowerCase())
						) {
							return talao;
						}
					})
					.map((talao, i) => {
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
	const data = await prisma.taloes.findMany({
		orderBy: {
			talao: "asc",
		},
	});
	if (data === 0) {
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
