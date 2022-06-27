import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function Talaoid({ res }) {
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
				<button onClick={() => signIn()}>Sign in</button>
			</>
		);
	}
	return (
		<>
			<form>
				<label>
					talao:
					<input
						onChange={handlerChange}
						type="text"
						name="talao"
						defaultValue={res[0].talao}
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
					clientid:
					<input
						onChange={handlerChange}
						type="text"
						name="clientid"
						defaultValue={res[0].clientid}
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
					produtoid:
					<input
						onChange={handlerChange}
						type="text"
						name="produtoid"
						defaultValue={res[0].produtoid}
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
					lojaid:
					<input
						onChange={handlerChange}
						type="text"
						name="lojaid"
						defaultValue={res[0].lojaid}
					/>
				</label>
				<button type="submit">Atualizar</button>
			</form>
		</>
	);
}

export async function getServerSideProps(context) {
	const { query } = context;
	if (query.talao) {
		await prisma.taloes.update({
			where: {
				idtalao: parseInt(query.talaoid),
			},
			data: {
				talao: query.talao,
				data: query.data,
				clientid: query.clientid,
				tel: query.tel,
				produtoid: query.produtoid,
				numeracao: query.numeracao,
				descricao: query.descricao,
				obs: query.obs,
				recebidopor: query.recebidopor,
				lojaid: query.lojaid,
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
			idtalao: parseInt(query.talaoid),
		},
	});
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
