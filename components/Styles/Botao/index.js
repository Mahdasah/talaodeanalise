import { B } from "./styles";

export default function Botao({children, color = "black"}) {
	return (
	<B color={color}>
		{children}
	</B>
	);
}
