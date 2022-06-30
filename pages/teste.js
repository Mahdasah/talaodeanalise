import Link from "next/link";
import { TesteS } from "../components/Styles/Teste/styles";

export default function Teste() {
	return (
		<>
			<Link href={"#"}>
				<TesteS>Teste</TesteS>
			</Link>
			<Link href={"#"}>
				<TesteS red>Teste</TesteS>
			</Link>
			<div>Teste</div>
		</>
	);
}
