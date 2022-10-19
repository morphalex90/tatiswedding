import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/Layout';

import { motion } from 'framer-motion';

import sposi_1 from '@img/staff/sposi_1.jpeg';
import sposi_2 from '@img/staff/sposi_2.jpeg';
import testimoneSposa1 from '@img/staff/testimone_sposa_1.jpeg';
import testimoneSposa2 from '@img/staff/testimone_sposa_2.jpeg';
import testimoneSposo1 from '@img/staff/testimone_sposo_1.jpeg';
import testimoneSposo2 from '@img/staff/testimone_sposo_2.jpeg';
import damigelle from '@img/staff/damigelle.jpeg';
import webCreator from '@img/staff/web_creator.jpg';
import archistar from '@img/staff/archistar.jpg';

function Staff() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/staff'} />
				<title>Staff | Tati&rsquo;s Wedding</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Staff | Tati's Wedding" />
				{/* <meta property="og:description" content="" /> */}
				{/* <meta property="og:image" content="" /> */}
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/staff'} />
			</Head>

			<Layout className="page-staff">
				<section className="section">
					<h1>Wedding</h1>

					<div className="staff">
						<div className="staff__heading">Lo Sposo E La Sposa</div>
						<div className="staff__images">
							<div className="staff__images__single">
								<Image src={sposi_1} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'top center'} alt="Lo Sposo E La Sposa" title="Lo Sposo E La Sposa" />
							</div>
							<div className="staff__images__single">
								<Image src={sposi_2} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'top center'} alt="Lo Sposo E La Sposa" title="Lo Sposo E La Sposa" />

							</div>
						</div>
					</div>

					<div className="staff">
						<div className="staff__heading">I testimoni della sposa</div>
						<div className="staff__images">
							<div className="staff__images__single">
								<Image src={testimoneSposa1} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'top center'} alt="I testimoni della sposa" title="I testimoni della sposa" />
							</div>
							<div className="staff__images__single">
								<Image src={testimoneSposa2} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'top center'} alt="I testimoni della sposa" title="I testimoni della sposa" />
							</div>
						</div>
					</div>

					<div className="staff">
						<div className="staff__heading">I testimoni dello sposo</div>
						<div className="staff__images">
							<div className="staff__images__single">
								<Image src={testimoneSposo1} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'center'} alt="I testimoni dello sposo" title="I testimoni dello sposo" />
							</div>
							<div className="staff__images__single">

								<Image src={testimoneSposo2} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'center'} alt="I testimoni dello sposo" title="I testimoni dello sposo" />
							</div>
						</div>
					</div>

					<div className="staff">
						<div className="staff__heading">Le damigelle</div>
						<div className="staff__images">
							<div className="staff__images__single">
								<Image src={damigelle} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'top center'} alt="Le damigelle" title="Le damigelle" />
							</div>
						</div>
					</div>

					<div className="staff">
						<div className="staff__heading">Il web creator</div>
						<div className="staff__images">
							<div className="staff__images__single">
								<Image src={webCreator} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'top center'} alt="Il web creator" title="Il web creator" />
							</div>
						</div>
					</div>

					<div className="staff">
						<div className="staff__heading">L&rsquo;Archistar</div>
						<div className="staff__images">
							<div className="staff__images__single">
								<Image src={archistar} height={300} width={300} layout="fill" objectFit="cover" objectPosition={'center'} alt="L'Archistar" title="L'Archistar" />
							</div>
						</div>
					</div>

				</section>
			</Layout>
		</>
	);
}

export default Staff;