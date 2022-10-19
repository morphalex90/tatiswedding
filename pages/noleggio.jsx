import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/Layout';

import { motion } from 'framer-motion';

import ostuniLeft from '@img/ostuni/ostuni_left.jpeg';
import ostuniRight from '@img/ostuni/ostuni_right.jpeg';



function Noleggio() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/noleggio'} />
				<title>Noleggio | Tati&rsquo;s Wedding</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Noleggio | Tati's Wedding" />
				{/* <meta property="og:description" content="" /> */}
				{/* <meta property="og:image" content="" /> */}
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/noleggio'} />
			</Head>

			<Layout className="page-noleggio">
				<section className="section">
					<h1>Arrivare ad Ostuni e noleggio</h1>

					<ul>
						<li>Potete raggiungere Ostuni in <strong>macchina</strong>, prendendo la E55 Adriatica (A14) per Bari e lì, una volta terminata l&apos;autostrada, prendendo la SS16 fino all&apos;uscita Ostuni-Villanova.</li>
						<li>Ottima anche l&apos;opzione <strong>treno</strong>: la stazione ferroviaria di Ostuni della linea Adriatica si trova ad appena 3 km dal centro, e circa 5 km dal Centro di Spiritualità Madonna della Nova dove si pernotterà.</li>
						<li>Mentre per chi preferisce l&apos;<strong>aereo</strong>, l&apos;aeroporto di Brindisi dista appena 37 km dal centro; quello di Bari dista invece 100 km.</li>
					</ul>

					<div className="d-flex rent__description">
						<div style={{ background: 'url(' + ostuniLeft.src + ') no-repeat center right', height: 323 }}></div>
						<div style={{ padding: 20 }}>
							<h3>Stai pianificando di prendere un&apos;auto a noleggio?</h3>
							<p>Ecco qualche indicazione di siti:</p>

							<a href="http://www.palmauto.it/noleggio-a-breve-termine/" target="_blank" rel="noreferrer" title="www.palmauto.it">www.palmauto.it</a>
							<a href="https://www.whitecitysrls.it/" target="_blank" rel="noreferrer" title="www.whitecitysrls.it">www.whitecitysrls.it</a>
							<a href="https://www.kayak.it/horizon/sem/cars/destination/-c46921?lang=it&skipapp=true&gclid=EAIaIQobChMI0LGI6Mi55AIVR-J3Ch1Q4QK4EAAYASAAEgKLePD_BwE" target="_blank" rel="noreferrer" title="www.kayak.it">www.kayak.it</a>
							<a href="https://www.skyscanner.it/noleggio-auto-a/noleggio-auto-a-ostuni/30404560.html?ksh_id=_k_EAIaIQobChMI0LGI6Mi55AIVR-J3Ch1Q4QK4EAAYAiAAEgK42fD_BwE_k_&associateID=SEM_GGC_00065_00100&utm_source=google&utm_medium=cpc&utm_campaign=IT-CarHire-Search-IT-DSA&utm_term=&kpid=google_1423752129_54772355246_353996511502_dsa-455115697323_c_&gclid=EAIaIQobChMI0LGI6Mi55AIVR-J3Ch1Q4QK4EAAYAiAAEgK42fD_BwE" target="_blank" rel="noreferrer" title="www.skyscanner.it">www.skyscanner.it</a>
						</div>
						<div style={{ background: 'url(' + ostuniRight.src + ') no-repeat center right', height: 323 }}></div>
					</div>


					<div className="location">
						<div className="location__heading">Stazione di Ostuni</div>
						<div className="d-flex">
							<div className="location_map">
								<iframe width={600} height={450} frameBorder={0} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24185.371361416008!2d17.562951964134204!3d40.736253427064376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x13464364a351765d%3A0xfc7960853773c327!2sOstuni%2C%20Zona%20Sisri%2C%20BR%2C%20Italia!3m2!1d40.752193!2d17.580711!4m5!1s0x13464f6f7f85f7a5%3A0xadbc10601972851!2sCentro%20Di%20Spiritualita;%20Madonna%20Della%20Nova%2C%20Via%20San%20Giovanni%20Bosco%2C%20Ostuni%2C%20BR%2C%20Italy!3m2!1d40.723715299999995!2d17.588994!5e0!3m2!1sit!2suk!4v1570887775184!5m2!1sit!2suk"></iframe>
							</div>
						</div>
					</div>

					<div className="location">
						<div className="location__heading">Aeroporto di Brindisi</div>
						<div className="d-flex">
							<div className="location_map">
								<iframe width={600} height={450} frameBorder={0} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d96784.4919638362!2d17.697132554574516!3d40.70666978576748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x13467a08b74a2e29%3A0x66e96d2f414ca34b!2sAeroporto%20del%20Salento%2C%20Contrada%20Baroncino%2C%2072100%20Brindisi%20BR%2C%20Italia!3m2!1d40.6567625!2d17.9453492!4m5!1s0x13464f6f7f85f7a5%3A0xadbc10601972851!2sCentro%20Di%20Spiritualita;%20Madonna%20Della%20Nova%2C%20Via%20San%20Giovanni%20Bosco%2C%20Ostuni%2C%20BR%2C%20Italy!3m2!1d40.723715299999995!2d17.588994!5e0!3m2!1sit!2suk!4v1570887430516!5m2!1sit!2suk"></iframe>
							</div>
						</div>
					</div>

					<div className="location">
						<div className="location__heading">Aeroporto di Bari</div>
						<div className="d-flex">
							<div className="location_map">
								<iframe width={600} height={450} frameBorder={0} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d386032.18872100813!2d16.89858327018732!3d40.89652445508422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x1347ef757723e589%3A0xd0baa738e6f01b02!2sAeroporto%20di%20Bari%2C%20Viale%20Enzo%20Ferrari%2C%20Bari%2C%20BA%2C%20Italia!3m2!1d41.137508!2d16.765202!4m5!1s0x13464f6f7f85f7a5%3A0xadbc10601972851!2sCentro%20Di%20Spiritualita;%20Madonna%20Della%20Nova%2C%20Via%20San%20Giovanni%20Bosco%2C%20Ostuni%2C%20BR%2C%20Italy!3m2!1d40.723715299999995!2d17.588994!5e0!3m2!1sit!2suk!4v1570888679541!5m2!1sit!2suk"></iframe>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export default Noleggio;