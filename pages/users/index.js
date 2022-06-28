import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Botao } from "../../components/Styles/Botao/styles";

export default function UsersList({ res }) {
	const { data: session } = useSession();
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
			<h1>USERS</h1>
			<form>
				{res.map((user, i) => {
					return (
						<>
							<hr />
							<Botao
								tipo="bad"
								key={i}
								type="submit"
								name="userid"
								value={user.iduser}>
								X
							</Botao>
							<Link href={`/users/${user.iduser}`}>
								<a>
									<ul>
										<li>iduser: {user.iduser}</li>
										<li>user: {user.user}</li>
										<li>data: {user.data}</li>
										<li>cliente: {user.cliente}</li>
										<li>tel: {user.tel}</li>
										<li>produto: {user.produto}</li>
										<li>numeracao: {user.numeracao}</li>
										<li>descricao: {user.descricao}</li>
										<li>obs: {user.obs}</li>
										<li>recebidopor: {user.recebidopor}</li>
										<li>loja: {user.loja}</li>
									</ul>
								</a>
							</Link>
						</>
					);
				})}
			</form>
		</>
	);
}

export async function getServerSideProps({ query }) {
	// console.log(query);
	const { PrismaClient } = require("@prisma/client");
	const prisma = new PrismaClient();
	if (query.userid) {
		await prisma.user.delete({
			where: {
				iduser: parseInt(query.userid),
			},
		});
		return {
			redirect: {
				permanent: false,
				destination: "/users",
			},
		};
	}
	const data = await prisma.user.findMany();
	if (data.length === 0) {
		return {
			redirect: {
				permanent: false,
				destination: "/users/criar",
			},
		};
	}
	return {
		props: {
			res: JSON.parse(JSON.stringify(data)),
		},
	};
}
