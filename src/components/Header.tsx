import Menu from '@/components/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <header className="header">
            <div className="header__container">

                <div className="header__title">
                    <Link href="/">
                        {router.pathname === '/' ? 'Welcome to Ostuni' : 'Tati\'s Wedding'}
                    </Link>
                    <span>- Benvenuti al nostro matrimonio</span>
                </div>

                <div className={'header__menu' + (isMobileMenuOpen ? ' is-open' : '')}>
                    <Menu />
                </div>

                <div className="header__mobile-menu-toggle">
                    <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Header;