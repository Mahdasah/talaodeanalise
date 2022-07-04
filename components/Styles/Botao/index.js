import { B } from "./styles";

export default function Botao({children, color = "black", bg = "white"}) {
	return (
	<B >
		{children}
	</B>
	);
}
