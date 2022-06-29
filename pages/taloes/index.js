import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Botao } from "../../components/Styles/Botao/styles";
import { Lista } from "../../components/Styles/talao";

export default function TaloesList({ res }) {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	return (
		<>
			<h1 style={{textAlign:"center"}}>TALOES DE ANÁLISE DE PRODUTOS</h1>
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
