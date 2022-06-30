import { B } from "./styles";

export default function Botao({children, color = "black", bg = "white"}) {
	return (
	<B color={color}>
		{children}
	</B>
	);
}
