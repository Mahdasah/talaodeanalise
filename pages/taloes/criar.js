import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { Hint } from "react-autocomplete-hint";
import { Formulario, Botao } from "../../components/Styles";

export default function CriarTalao({ res }) {
	useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});
	// const [text, setText] = useState("");
	const [values, setValues] = useState([]);
	const handlerChange = (value) => {
		// console.log(value);
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
	return (
		<>
			<Formulario>
				<label>
					data:
					<input onChange={handlerChange} type="text" name="data" />
				</label>
				<label>
					talão:
					<input onChange={handlerChange} type="text" name="talao" />
				</label>
				<label>
					cliente:
					<Hint options={res}>
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
					<input onChange={handlerChange} type="text" name="tel" />
				</label>
				<label>
					produto:
					<input
						onChange={handlerChange}
						type="text"
						name="produto"
						value={values.produto}
					/>
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
					<input
						onChange={handlerChange}
						type="text"
						name="recebidopor"
						value={values.recebidopor}
					/>
				</label>
				<label>
					loja:
					<input
						onChange={handlerChange}
						type="text"
						name="loja"
						value={values.loja}
					/>
				</label>
				<Botao type="submit">Criar</Botao>
			</Formulario>
		</>
	);
}

export async function getServerSideProps({ query }) {
	const { PrismaClient } = require("@prisma/client");
	const prisma = new PrismaClient();
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
