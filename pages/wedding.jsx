import Head from 'next/head';

import Layout from '@/components/Layout';

import { motion } from 'framer-motion';

import wedding1 from '@img/wedding/1.webp';
import wedding2 from '@img/wedding/2.webp';
import wedding3 from '@img/wedding/3.webp';
import Image from 'next/image';

function Wedding() {
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

			<Layout className="page-wedding">
				<section className="section">
					<h1>Wedding</h1>

					<Image src={wedding1} alt="Partecipazione parte 1" title="Partecipazione parte 1" />
					<Image src={wedding2} alt="Partecipazione parte 2" title="Partecipazione parte 2" />
					<Image src={wedding3} alt="Partecipazione parte 3" title="Partecipazione parte 3" />

				</section>
			</Layout>
		</>
	);
}

export default Wedding;