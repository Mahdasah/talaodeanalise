import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import {Botao, Filtro, Lista} from "../../components/Styles";
import styled from "styled-components";

export default function TaloesList({ res }) {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	const [query, setQuery] = useState("");
	return (
		<>
			<h1 style={{ textAlign: "center", margin: 5 }}>TALOES DE ANÁLISE DE PRODUTOS</h1>
			<label>
				<Filtro
					placeholder="Pesquise aqui!"
					onChange={(e) => setQuery(e.target.value)}
					name="filtro"
					style={{
						margin: "15px auto"
					}}
				/>
			</label>
			<form>
				{res.filter((talao) => {
						if (query === "") {
							return talao;
						} else if (
							talao.talao.includes(query) ||
							talao.data.includes(query) ||
							talao.cliente
								.toLowerCase()
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")
								.includes(
									query
										.toLowerCase()
										.normalize("NFD")
										.replace(/[\u0300-\u036f]/g, "")
								) ||
							talao.produto
								.toLowerCase()
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")
								.includes(
									query
										.toLowerCase()
										.normalize("NFD")
										.replace(/[\u0300-\u036f]/g, "")
								) ||
							talao.referencia.toLowerCase().includes(query.toLowerCase()) ||
							talao.descricao
								.toLowerCase()
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")
								.includes(
									query
										.toLowerCase()
										.normalize("NFD")
										.replace(/[\u0300-\u036f]/g, "")
								) ||
							talao.loja
								.toLowerCase()
								.normalize("NFD")
								.replace(/[\u0300-\u036f]/g, "")
								.includes(
									query
										.toLowerCase()
										.normalize("NFD")
										.replace(/[\u0300-\u036f]/g, "")
								)
						) {
							return talao;
						}
					})
					.map((talao, i) => {
						return (
							<div key={i}>
								<div style={{
									width: "100%", 
									margin: "auto"
								}}>
								<TopBorder >
								<button 
									style={{
										backgroundColor: "#EFE4A3",
										color: "#2D2D2D",
										border: "none",
										margin: 10,
										padding: "10px 15px"
									}}
									type="submit"
									name="talaoid"
									value={talao.idtalao}>
									X
								</button>
								</TopBorder>
								<Link href={`/taloes/${talao.idtalao}`}>
									<a style={{textDecoration: "none", margin:0}}>
										<Lista style={{ cursor: "pointer", marginTop:0 }}>
											{/* <li>idtalao: {talao.idtalao}</li> */}
											<li>
												<p style={{ margin: 0 }}>Data</p>{" "}
												<span>{talao.data}</span>
											</li>
											<li>{talao.talao}</li>
											<li>
												Cliente: <span>{talao.cliente}</span>
											</li>
											<li>
												Tel: <span>{talao.tel}</span>
											</li>
											<li>
												Produto: <span>{talao.produto}</span>
											</li>
											<li>
												Referência: <span>{talao.referencia}</span>
											</li>
											<li>
												Numeração:<span>{talao.numeracao}</span>
											</li>
											<li>
												descrição: <span>{talao.descricao}</span>
											</li>
											<li>
												obs: <span>{talao.obs}</span>
											</li>
											<li>
												recebidopor: <span>{talao.recebidopor}</span>
											</li>
											<li>
												loja: <span>{talao.loja}</span>
											</li>
											<div className="textureDL"><span>Datelli</span></div>
										</Lista>
									</a>
								</Link>
								</div>
							</div>
						);
					})}
			</form>
		</>
	);
}
const TopBorder = styled.div`
	background-color: #2D2D2D;
	display: flex;
	justify-content: end;
	margin: auto;
	padding: .5em;
	margin-top: 5px;
	@media only screen and (min-width: 1001px ){
		width: 80%;

	}
`;
export async function getServerSideProps({ query }) {
	// const start = performance.now();
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
	// const duration = performance.now() - start;
	// console.log(`server${duration}`);
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
