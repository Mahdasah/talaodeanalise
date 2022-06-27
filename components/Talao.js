import Link from "next/link";

export default function Talao({ arr }) {
	return (
		<>
			<Link href={`/taloes/${arr.idtalao}`}>
				<a>
					<ul>
						<hr />
						<li>idtalao: {arr.idtalao}</li>
						<li>talao: {arr.talao}</li>
						<li>data: {arr.data}</li>
						<li>clientid: {arr.clientid}</li>
						<li>tel: {arr.tel}</li>
						<li>produtoid: {arr.produtoid}</li>
						<li>numeracao: {arr.numeracao}</li>
						<li>descricao: {arr.descricao}</li>
						<li>obs: {arr.obs}</li>
						<li>recebidopor: {arr.recebidopor}</li>
						<li>lojaid: {arr.lojaid}</li>
					</ul>
				</a>
			</Link>
		</>
	);
}
