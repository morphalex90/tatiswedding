import Head from 'next/head';
import Layout from '@/components/Layout';

function Page404() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
				<title>404 | Tati&rsquo;s Wedding</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="404 | Tati's Wedding" />
				{/* <meta property="og:description" content="" /> */}
				{/* <meta property="og:image" content="" /> */}
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />
			</Head>

			<Layout className="page-404">
				<section className="section">
					<h1>Pagina non trovata</h1>
					<p>La pagina richiesta non è stata trovata.</p>
				</section>
			</Layout>
		</>
	);
}

export default Page404;