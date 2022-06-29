import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Botao } from "../../components/Styles/Botao/styles";
import { Lista } from "../../components/Styles/talao";

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
			<h1 style={{textAlign:"center"}}>TALOES DE ANÁLISE DE PRODUTOS</h1>
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
								value={talao.idtalao}
								style={{position:"absolute"}}>
								X
							</Botao>
							<Link href={`/taloes/${talao.idtalao}`}>
								<Lista style={{cursor:"pointer"}}>
									{/* <li>idtalao: {talao.idtalao}</li> */}
									<li><p style={{margin:0}}>Data</p> <span>{talao.data}</span></li>
									<li>{talao.talao}</li>
									<li>Cliente: <span>{talao.cliente}</span></li>
									<li>Tel: <span>{talao.tel}</span></li>
									<li>Produto: <span>{talao.produto}</span></li>
									<li>Referência: <span>{talao.referencia}</span></li>
									<li>Numeração:<span>{talao.numeracao}</span></li>
									<li>descrição: <span>{talao.descricao}</span></li>
									<li>obs: <span>{talao.obs}</span></li>
									<li>recebidopor: <span>{talao.recebidopor}</span></li>
									<li>loja: <span>{talao.loja}</span></li>
									<div></div>
								</Lista>
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
