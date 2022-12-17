import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Drift-DAO</title>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="A unified platform for all your DAOs."
				/>
				<meta
					name="description"
					content="A platform for the next generation to manage all your DAOs."
				/>
				<meta
					name="keywords"
					content="DAO, DAOs, Drift, Drift-DAO, DAO tooling, DAO platform, tooling, platform"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
