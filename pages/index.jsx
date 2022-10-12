import Head from 'next/head';

import Layout from '@/components/Layout';

import { motion } from 'framer-motion';

import Countdown from '@/components/Countdown';

function Homepage() {
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

			<Layout className="page-homepage">
				<section className="section">
					<Countdown date="2021-09-11 13:30:00" />
					<h1>Tati&apos;s Wedding</h1>
				</section>
			</Layout>
		</>
	);
}

export default Homepage;