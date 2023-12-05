import Head from 'next/head';
import Layout from '@/components/Layout';

import madonnaDellaNova from '@img/location/madonna_della_nova.jpg';
import chiesaSanLuigi from '@img/location/chiesa_san_luigi.jpeg';
import vittoriano from '@img/location/vittoriano.jpg';

function Location() {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + '/location'} />
				<title>Location | Tati&rsquo;s Wedding</title>
				{/* <meta name="description" content="" /> */}

				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Location | Tati's Wedding" />
				{/* <meta property="og:description" content="" /> */}
				{/* <meta property="og:image" content="" /> */}
				<meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL + '/location'} />
			</Head>

			<Layout className="page-location">
				<section className="section">
					<h1>I luoghi del Tati&rsquo;s Wedding</h1>

					<div className="location">
						<div className="location__heading">Per il vostro Soggiorno</div>
						<div className="d-flex">
							<div className="location__image" style={{ background: 'url(' + madonnaDellaNova.src + ') center no-repeat' }}>
								<div className="location__details">
									<div className="location__title">Madonna della Nova</div>
									<div className="location__address">Via S. Giovanni Bosco 10<br />72017 - Ostuni</div>
								</div>
							</div>

							<div className="location_map">
								<iframe width={600} height={450} frameBorder={0} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12094.964450096983!2d17.588994!3d40.7237153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadbc10601972851!2sCentro%20Di%20Spiritualita%20Madonna%20Della%20Nova!5e0!3m2!1sit!2suk!4v1567161010493!5m2!1sit!2suk"></iframe>
							</div>
						</div>
					</div>

					<div className="location">
						<div className="location__heading">Qui pronunceremo il nostro Sì</div>
						<div className="d-flex">
							<div className="location__image" style={{ background: 'url(' + chiesaSanLuigi.src + ') center no-repeat' }}>
								<div className="location__details">
									<div className="location__title">Chiesa di San Luigi</div>
									<div className="location__address">Via Alberto Carlo<br />72017 - Ostuni</div>
								</div>
							</div>

							<div className="location_map">
								<iframe width={600} height={450} frameBorder={0} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12094.36081501444!2d17.5729037!3d40.7270369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x426fdf1ec4902e9!2sChiesa%20di%20San%20Luigi!5e0!3m2!1sit!2suk!4v1567120480479!5m2!1sit!2suk"></iframe>
							</div>
						</div>
					</div>

					<div className="location">
						<div className="location__heading">Aprite la pancia e scaldate i muscoli...ci sarà da divertirsi!</div>
						<div className="d-flex">
							<div className="location__image" style={{ background: 'url(' + vittoriano.src + ') center no-repeat' }}>
								<div className="location__details">
									<div className="location__title">Il Vittoriano Ricevimenti</div>
									<div className="location__address">Via Virgilio 12<br />72022 - Latiano</div>
								</div>
							</div>

							<div className="location_map">
								<iframe width={600} height={450} frameBorder={0} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12125.131498034647!2d17.7190904!3d40.5574301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x813e8ea917ddb581!2sIl%20Vittoriano%20Ricevimenti!5e0!3m2!1sit!2suk!4v1567120555042!5m2!1sit!2suk"></iframe>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export default Location;