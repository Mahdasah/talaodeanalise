import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { Botao } from "../../components/Styles/Botao/styles";

export default function Userid({ res }) {
	const { data: session } = useSession();
	const [values, setValues] = useState();
	const handlerChange = (value) => {
		console.log(values);
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}));
	};
	console.log("first");
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
					<input
						onChange={handlerChange}
						type="text"
						name="user"
						defaultValue={res[0].user}
					/>
				</label>
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
					numeracao:
					<input
						onChange={handlerChange}
						type="text"
						name="numeracao"
						defaultValue={res[0].numeracao}
					/>
				</label>
				<label>
					descricao:
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
			</form>
		</>
	);
}

export async function getServerSideProps({ query }) {
	const { PrismaClient } = require("@prisma/client");
	const prisma = new PrismaClient();
	// const { query } = context;
	// console.log(query);
	if (query.user) {
		await prisma.user.update({
			where: {
				iduser: parseInt(query.userid),
			},
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
	const data = await prisma.user.findMany({
		where: {
			iduser: parseInt(query.userid),
		},
	});
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
