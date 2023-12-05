import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

import ostuni1 from '@img/ostuni/1.jpeg';
import ostuni2 from '@img/ostuni/2.jpeg';
import ostuni3 from '@img/ostuni/3.jpg';

function Vacanza() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/crea-la-tua-vacanza'} />
				<title>Crea la tua vacanza | Tati&rsquo;s Wedding</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Crea la tua vacanza | Tati's Wedding" />
				{/* <meta property="og:description" content="" /> */}
				{/* <meta property="og:image" content="" /> */}
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/crea-la-tua-vacanza'} />
			</Head>

			<Layout className="page-vacanza">
				<section className="section">
					<h1>Perché fare la vacanza ad Ostuni?</h1>
					<p>La più bella cittadina dell&rsquo;Alto Salento, la città bianca di <strong>OSTUNI</strong> è un rinomato centro turistico che vanta un territorio tutto da scoprire.
						Adagiata su tre colli, Ostuni sfoggia un centro storico, visibile dalla costa e dalle colline vicine, veramente suggestivo, caratterizzato da quel bianco che l&rsquo;ha portata ad essere conosciuta in tutto il mondo come la città bianca.</p>
					<p>Il centro storico di Ostuni, definito dai suoi abitanti “La Terra“, un tempo era completamente dipinto con calce bianca, che oggi è rimasta solo in parte. Le case si arrampicano sui fianchi scoscesi di un colle e il borgo è caratterizzato da un groviglio di stradine tortuose, un susseguirsi di piazzette, vicoli e corti. La parte inferiore del borgo è circondato dall&rsquo;antica cinta muraria in cui si incastonano le uniche due entrate della città rimaste integre: Porta Nova e Porta San Demetrio.</p>
					<div className="text-center">
						<Image src={ostuni1} alt="Ostuni 1" title="Ostuni 1" />
					</div>
					<p>&nbsp;</p>
					<p>Vicoli di cianche, archi in pietra viva, piazzette affollate: tutto magicamente adornato dal bianco. In cima al colle sorge la cattedrale, risalente al XV secolo; da vedere la colonna barocca di Sant&rsquo;Oronzo, patrono della cittadina e la chiesa di San Vito Martire, sede del Museo delle Civiltà preclassiche delle Murge meridionali.</p>
					<p>&nbsp;</p>
					<div className="text-center">
						<Image src={ostuni2} alt="Ostuni 2" title="Ostuni 2" />
					</div>
					<p>&nbsp;</p>
					<p>Abbandonando il centro storico si può fare un giro tra le mura aragonesi che circondano Ostuni e godere del panorama, perdendosi nei propri pensieri davanti alla piana degli ulivi e l’azzurro del mare Adriatico.</p>
					<p>&nbsp;</p>
					<div className="text-center">
						<Image src={ostuni3} alt="Ostuni 3" title="Ostuni 3" />
					</div>
				</section>
			</Layout>
		</>
	);
}

export default Vacanza;