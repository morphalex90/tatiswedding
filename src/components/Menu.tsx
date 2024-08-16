import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
    const router = useRouter();

    return (
        <nav className="main-menu">
            <ul>
                <li><Link href="/" className={router.pathname === '/' ? 'is-active' : ''} title="Home">Home</Link></li>
                <li><Link href="/wedding" className={router.pathname === '/wedding' ? 'is-active' : ''} title="Wedding">Wedding</Link></li>
                <li><Link href="/covid" className={router.pathname === '/covid' ? 'is-active' : ''} title="Covid">Covid</Link></li>
                <li><Link href="/location" className={router.pathname === '/location' ? 'is-active' : ''} title="Location">Location</Link></li>
                <li><Link href="/noleggio" className={router.pathname === '/noleggio' ? 'is-active' : ''} title="Noleggio">Noleggio</Link></li>
                <li><Link href="/crea-la-tua-vacanza" className={router.pathname === '/crea-la-tua-vacanza' ? 'is-active' : ''} title="Crea la tua vacanza">Crea la tua vacanza</Link></li>
                <li><Link href="/social" className={router.pathname === '/social' ? 'is-active' : ''} title="Social">Social</Link></li>
                <li><Link href="/staff" className={router.pathname === '/staff' ? 'is-active' : ''} title="Staff">Staff</Link></li>
            </ul>
        </nav>
    );
}
