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
					content="A unified platform to get updated from all your DAOs."
				/>
				<meta
					name="description"
					content="A platform for the next generation to manage all your DAOs."
				/>
				<meta
					name="keywords"
					content="DAO, DAOs, Drift, Drift-DAO, DAO tooling, DAO platform, tooling, platform"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Drift-DAO" />
				<meta
					name="twitter:description"
					content="A unified platform to get updated from all your DAOs."
				/>
				<meta name="twitter:image" content="/images/logo.jpg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					property="og:description"
					content="A unified platform to get updated from all your DAOs."
				/>

				<meta property="og:title" content="Drift-DAO" />

				<meta property="og:image" content="/images/logo.jpg" />
				<meta property="og:url" content="https://www.drift-dao.com/" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
