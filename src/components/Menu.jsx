import Link from 'next/link';
import { useRouter } from "next/router";

function Menu(props) {
    const router = useRouter();

    return (
        <nav className="main-menu">
            <ul>
                <li><Link href="/"><a className={router.pathname === '/' ? 'is-active' : null} title="Home">Home</a></Link></li>
                <li><Link href="/wedding"><a className={router.pathname === '/wedding' ? 'is-active' : null} title="Wedding">Wedding</a></Link></li>
                <li><Link href="/covid"><a className={router.pathname === '/covid' ? 'is-active' : null} title="Covid">Covid</a></Link></li>
                <li><Link href="/location"><a className={router.pathname === '/location' ? 'is-active' : null} title="Location">Location</a></Link></li>
                <li><Link href="/noleggio"><a className={router.pathname === '/noleggio' ? 'is-active' : null} title="Noleggio">Noleggio</a></Link></li>
                <li><Link href="/crea-la-tua-vacanza"><a className={router.pathname === '/crea-la-tua-vacanza' ? 'is-active' : null} title="Crea la tua vacanza">Crea la tua vacanza</a></Link></li>
                <li><Link href="/social"><a className={router.pathname === '/social' ? 'is-active' : null} title="Social">Social</a></Link></li>
                <li><Link href="/staff"><a className={router.pathname === '/staff' ? 'is-active' : null} title="Staff">Staff</a></Link></li>
            </ul>
        </nav>
    );
}

export default Menu;