import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { Formulario } from "../../components/Styles/criar";
import { Botao } from "../../components/Styles/Botao/styles";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function CriarTalao() {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	const [values, setValues] = useState();
	const handlerChange = (value) => {
		console.log(values);
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};
	return (
		<>
			<Formulario>
				<label>
					talão:
					<input onChange={handlerChange} type="text" name="talao" />
				</label>
				<label>
					data:
					<input onChange={handlerChange} type="text" name="data" />
				</label>
				<label>
					cliente:
					<input onChange={handlerChange} type="text" name="cliente" />
				</label>
				<label>
					tel:
					<input onChange={handlerChange} type="text" name="tel" />
				</label>
				<label>
					produto:
					<input onChange={handlerChange} type="text" name="produto" />
				</label>
				<label>
					numeração:
					<input onChange={handlerChange} type="text" name="numeracao" />
				</label>
				<label>
					descrição:
					<input onChange={handlerChange} type="text" name="descricao" />
				</label>
				<label>
					obs:
					<input onChange={handlerChange} type="text" name="obs" />
				</label>
				<label>
					recebidopor:
					<input onChange={handlerChange} type="text" name="recebidopor" />
				</label>
				<label>
					loja:
					<input onChange={handlerChange} type="text" name="loja" />
				</label>
				<Botao type="submit">
					Criar
				</Botao>
			</Formulario>
		</>
	);
}

export async function getServerSideProps({ query }) {
	if (query.talao) {
		await prisma.taloes.create({
			data: {
				talao: query.talao,
				data: query.data,
				cliente: query.cliente,
				tel: query.tel,
				produto: query.produto,
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
	return { props: {} };
}
