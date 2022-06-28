import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { Botao } from "../../components/Styles/Botao/styles";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function CriarUser() {
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
			<form>
				<label>
					user:
					<input onChange={handlerChange} type="text" name="user" />
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
					numeracao:
					<input onChange={handlerChange} type="text" name="numeracao" />
				</label>
				<label>
					descricao:
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
			</form>
		</>
	);
}

export async function getServerSideProps({ query }) {
	if (query.user) {
		await prisma.user.create({
			data: {
				user: query.user,
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
				destination: "/users",
			},
		};
	}
	return { props: {} };
}
