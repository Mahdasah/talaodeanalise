import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { Formulario } from "../../components/Styles/criar";
import { Botao } from "../../components/Styles/Botao";
import { Hint } from "react-autocomplete-hint";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function CriarTalao({ res }) {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	const [text, setText] = useState();
	const [values, setValues] = useState();
	const handlerChange = (value) => {
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
					<Hint options={res}>
						<input
							value={text}
							onChange={(e) => setText(e.target.value)}
							name="cliente"
						/>
					</Hint>
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
					referência:
					<input onChange={handlerChange} type="text" name="referencia" />
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
				<Botao type="submit">Criar</Botao>
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
				referencia: query.referencia,
				numeracao: query.numeracao,
				descricao: query.descricao,
				obs: query.obs,
				recebidopor: query.recebidopor,
				loja: query.loja,
			},
		});
		await prisma.clientes.upsert({
			where: {
				label: query.cliente,
			},
			update: { label: query.cliente },
			create: { label: query.cliente },
		});
		return {
			redirect: {
				permanent: false,
				destination: "/taloes",
			},
		};
	}
	const data = await prisma.clientes.findMany({});
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
