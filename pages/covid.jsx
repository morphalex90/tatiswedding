import Head from 'next/head';

import Layout from '@/components/Layout';

import { motion } from 'framer-motion';

import Image from 'next/image';

function Covid() {
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

			<Layout className="page-covid">
				<section className="section">
					<h1>Covid-19</h1>
					<h3 className="text-center">Documentazione COVID necessaria</h3>
					<p>Il Green Pass e&rsquo; la documentazione che consente a ogni invitato di far parte della cerimonia.</p>
					<p>E’ necessario aver effettuato un tampone nelle 48 ore precedenti la data dell&rsquo;11 settembre 2021 oppure dimostrare di essere vaccinati tramite il Green Pass.</p>
					<p>Tutta questa documentazione dovrà essere inviata agli sposi (email o WhatsApp) con termine massimo la mattina dell&rsquo;11 settembre 2021 in quanto viene richiesta obbligatoriamente dalla sala ricevimenti.</p>
				</section>
			</Layout>
		</>
	);
}

export default Covid;