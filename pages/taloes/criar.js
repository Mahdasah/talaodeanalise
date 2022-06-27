import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";

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
				<button onClick={() => signIn()}>Sign in</button>
			</>
		);
	}
	return (
		<>
			<form>
				<label>
					talao:
					<input onChange={handlerChange} type="text" name="talao" />
				</label>
				<label>
					data:
					<input onChange={handlerChange} type="text" name="data" />
				</label>
				<label>
					clientid:
					<input onChange={handlerChange} type="text" name="clientid" />
				</label>
				<label>
					tel:
					<input onChange={handlerChange} type="text" name="tel" />
				</label>
				<label>
					produtoid:
					<input onChange={handlerChange} type="text" name="produtoid" />
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
					lojaid:
					<input onChange={handlerChange} type="text" name="lojaid" />
				</label>
				<button type="submit">Criar</button>
			</form>
		</>
	);
}

export async function getServerSideProps(context) {
	const { query } = context;
	if (query.talao) {
		await prisma.taloes.create({
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
	return { props: {} };
}
