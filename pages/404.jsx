import Head from 'next/head';

import Layout from '@/components/Layout';

import { motion } from 'framer-motion';

import Image from 'next/image';

function Page404() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
				<title>Piero Nanni</title>
				<meta name="description" content="PHP / Js Developer in love with Next.js, London based" />

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Piero Nanni" />
				<meta property="og:description" content="PHP / Js Developer in love with Next.js, London based" />
				<meta property="og:image" content="" />
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