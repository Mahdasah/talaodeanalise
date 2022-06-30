import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import Botao from "../../components/Styles/Botao"
import { Formulario } from "../../components/Styles/criar";

export default function Talaoid({ res }) {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	const [values, setValues] = useState();
	const handlerChange = (value) => {
		// console.log(values);
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};
	return (
		<>
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
					talão:
					<input
						onChange={handlerChange}
						type="text"
						name="talao"
						defaultValue={res[0].talao}
					/>
				</label>
				<label>
					cliente:
					<input
						onChange={handlerChange}
						type="text"
						name="cliente"
						defaultValue={res[0].cliente}
					/>
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
						defaultValue={res[0].produto}
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
						defaultValue={res[0].recebidopor}
					/>
				</label>
				<label>
					loja:
					<input
						onChange={handlerChange}
						type="text"
						name="loja"
						defaultValue={res[0].loja}
					/>
				</label>
				<Botao type="submit">Atualizar</Botao>
			</Formulario>
		</>
	);
}

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
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
