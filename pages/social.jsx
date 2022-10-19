import Head from 'next/head';

import Layout from '@/components/Layout';

function Social() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/social'} />
				<title>Social | Tati&rsquo;s Wedding</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Social | Tati's Wedding" />
				{/* <meta property="og:description" content="" /> */}
				{/* <meta property="og:image" content="" /> */}
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/social'} />
			</Head>

			<Layout className="page-social">
				<section className="section">
					<h1>Social</h1>
				</section>
			</Layout>
		</>
	);
}

export default Social;