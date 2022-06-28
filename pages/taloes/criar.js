import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import styled from "styled-components";
import { Botao } from "../../components/Styles/Botao/styles";


const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function CriarTalao() {
	const { data: session } = useSession();
	const [values, setValues] = useState();
	const handlerChange = (value) => {
		console.log(values);
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};

	if (!session) {
		return (
			<>
				Not signed in <br />
				<Botao onClick={() => signIn()}>Sign in</Botao>
			</>
		);
	}
	return (
		<>
			<Formulario>
				<Label>
					talao:
					<Input onChange={handlerChange} type="text" name="talao" />
				</Label>
				<Label>
					data:
					<Input onChange={handlerChange} type="text" name="data" />
				</Label>
				<Label>
					cliente:
					<Input onChange={handlerChange} type="text" name="cliente" />
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
					numeracao:
					<Input onChange={handlerChange} type="text" name="numeracao" />
				</Label>
				<Label>
					descricao:
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
				<Botao type="submit">Criar</Botao>
			</Formulario>
		</>
	);
}
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
	&:focus{
		outline: none;
		border-bottom: 2px solid #D13737;
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
