import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import "./default.css";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export function reportWebVitals(metric) {
	console.log(metric);
}
