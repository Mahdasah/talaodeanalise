import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import styled from "styled-components";
import { Botao } from "../../components/Styles/Botao/styles";
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
		console.log(values);
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};
	console.log(res);
	// const options = ["orange", "banana", "apple"];

	return (
		<>
			<Formulario>
				<Label>
					talão:
					<Input onChange={handlerChange} type="text" name="talao" />
				</Label>
				<Label>
					data:
					<Input onChange={handlerChange} type="text" name="data" />
				</Label>
				<Label>
					cliente:
					<Hint options={res}>
						<input
							value={text}
							onChange={(e) => {
								setText(e.target.value);
							}}
							name="cliente"
						/>
					</Hint>
				</Label>
				<Label>
					tel:
					<Input onChange={handlerChange} type="text" name="tel" />
				</Label>
				<Label>
					produto:
					<Input onChange={handlerChange} type="text" name="produto" />
				</Label>
				<Label>
					referência:
					<Input onChange={handlerChange} type="text" name="referencia" />
				</Label>
				<Label>
					numeração:
					<Input onChange={handlerChange} type="text" name="numeracao" />
				</Label>
				<Label>
					descrição:
					<Input onChange={handlerChange} type="text" name="descricao" />
				</Label>
				<Label>
					obs:
					<Input onChange={handlerChange} type="text" name="obs" />
				</Label>
				<Label>
					recebidopor:
					<Input onChange={handlerChange} type="text" name="recebidopor" />
				</Label>
				<Label>
					loja:
					<Input onChange={handlerChange} type="text" name="loja" />
				</Label>
				<Botao $red type="submit">
					Criar
				</Botao>
			</Formulario>
		</>
	);
}
// RED : #D13737;
// GRAY-BLACK : #2D2D2D;
// YELLOW : #EFE4A3;
const Formulario = styled.form`
	display: grid;
	column-gap: 10px;
	row-gap: 15px;
	background-color: #efe4a3;
	grid-template: auto auto auto auto;
`;
const Label = styled.label`
	color: #2d2d2d;
	font-weight: 700;
`;
const Input = styled.input`
	background: none;
	border: none;
	border-bottom: 2px solid #2d2d2d;
	padding: 10px;
	margin-left: 5px;
	font-weight: 700;
	&:focus {
		outline: none;
		border-bottom: 2px solid #d13737;
	}
`;

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
		await prisma.clientes.create({
			data: {
				label: query.cliente,
			},
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
