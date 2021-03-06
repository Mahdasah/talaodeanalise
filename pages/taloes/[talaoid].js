import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { Hint } from "react-autocomplete-hint";
import styled from "styled-components";
import { Botao, Formulario, Status } from "../../components/Styles";


export default function Talaoid({ res, clientes }) {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	const [values, setValues] = useState({
		cliente: res[0].cliente,
		produto: res[0].produto,
		recebidopor: res[0].recebidopor,
		loja: res[0].loja,
	});
	const handlerChange = (value) => {
		let n = value.target.name;
		let str = value.target.value;
		if (["cliente", "produto", "recebidopor", "loja"].includes(n)) {
			let arr = value.target.value.split(" ");
			for (var i = 0; i < arr.length; i++) {
				arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
			}
			str = arr.join(" ");
		}
		setValues((prevValue) => ({
			...prevValue,
			[n]: str,
		}));
	};
	const theme = {
		main: ""
	}
	const status = {
		name: "Status",
		warning: "#ffb01e",
		good: "mediumseagreen",
		bad: "#D13737"
	}
	// SERÁ O TEMA DO STATUS
	theme.main = status.bad
	return (
		<>
			<Body>
				<h1 style={{
					margin: "15px 0"
				}}>
					Talão de Análise Status: <Status theme={theme}>{status.name}</Status>
				</h1>
				<Formulario>
					<label>
						data:
						<input
							onChange={handlerChange}
							type="text"
							name="data"
							defaultValue={res[0].data}
						/>
					</label>
					<label>
						<span>Talão Nº</span>
						
						<input
							onChange={handlerChange}
							type="text"
							name="talao"
							defaultValue={res[0].talao}
						/>
					</label>
					<label>
						cliente:
						<Hint options={clientes}>
							<input
								onChange={(e) => {
									handlerChange(e);
								}}
								name="cliente"
								value={values.cliente}
							/>
						</Hint>
					</label>
					<label>
						tel:
						<input
							onChange={handlerChange}
							type="text"
							name="tel"
							defaultValue={res[0].tel}
						/>
					</label>
					<label>
						produto:
						<input
							onChange={handlerChange}
							type="text"
							name="produto"
							value={values.produto}
							// defaultValue={res[0].produto}
						/>
					</label>
					<label>
						referencia:
						<input
							onChange={handlerChange}
							type="text"
							name="referencia"
							defaultValue={res[0].referencia}
						/>
					</label>
					<label>
						numeração:
						<input
							onChange={handlerChange}
							type="text"
							name="numeracao"
							defaultValue={res[0].numeracao}
						/>
					</label>
					<label>
						descrição:
						<input
							onChange={handlerChange}
							type="text"
							name="descricao"
							defaultValue={res[0].descricao}
						/>
					</label>
					<label>
						obs:
						<input
							onChange={handlerChange}
							type="text"
							name="obs"
							defaultValue={res[0].obs}
						/>
					</label>
					<label>
						recebidopor:
						<input
							onChange={handlerChange}
							type="text"
							name="recebidopor"
							value={values.recebidopor}
							// defaultValue={res[0].recebidopor}
						/>
					</label>
					<label>
						loja:
						<input
							onChange={handlerChange}
							type="text"
							name="loja"
							value={values.loja}
							// defaultValue={res[0].loja}
						/>
					</label>
					<div className="textureDL"><span>Datelli</span></div>
					<Botao type="submit">Atualizar</Botao>
				</Formulario>
				<h2 style={{
					margin: "15px 0"
				}}>
					Fotos
				</h2>
				<div>
					<Fotos>
						<ul>
							<li>
								<img src="" alt="Sem Foto" />
							</li>
							<li>
								<img src="" alt="Sem Foto" />
							</li>
							<li>
								<img src="" alt="Sem Foto" />
							</li>
							<li>
								<img src="" alt="Sem Foto" />
							</li>
							<li>
								<img src="" alt="Sem Foto" />
							</li>
							<li>
								<img src="" alt="Sem Foto" />
							</li>
						</ul>
					</Fotos>
				</div>
			</Body>
		</>
	);
}
const Body = styled.div`
	margin: 0 15px;
`;
const Fotos = styled.section`
	display: flex;
	justify-content: center;
	margin: 10px;
	ul{
		margin: auto;
		list-style: none;
		display: grid;
		gap: 15px;
		grid-template-columns: auto;
		padding: 0;
		li{
			width: 250px;
			height: 250px;
			background-color: aqua;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	@media only screen and (min-width: 700px ) and ( max-width: 1099px ){
		ul{
			grid-template-columns: auto auto;
		}
	}
	@media only screen and (min-width: 1100px ){
		ul{
			display: flex;
			flex-wrap: wrap;
			align-self: center;
			justify-content: center;
			margin: auto;
			padding: 0;
			li{
				
			}
		}
	}
`;
export async function getServerSideProps({ query }) {
	const { PrismaClient } = require("@prisma/client");
	const prisma = new PrismaClient();
	if (query.talao) {
		await prisma.taloes.update({
			where: {
				idtalao: query.talaoid,
			},
			data: {
				talao: query.talao,
				data: query.data,
				cliente: query.cliente,
				tel: query.tel,
				produto: query.produto,
				referencia: query.referencia,
				numeracao: query.numeracao,
				descricao: query.descricao,
				obs: query.obs,
				recebidopor: query.recebidopor,
				loja: query.loja,
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
		where: {
			idtalao: query.talaoid,
		},
	});
	const data2 = await prisma.clientes.findMany({});
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
			clientes: JSON.parse(JSON.stringify(data2)),
		},
	};
}
