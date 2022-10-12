import Menu from '@/components/Menu';
import Link from 'next/link';

function Header() {
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__title">
                    <Link href="/">Tati&rsquo;s Wedding</Link>
                    <span>- Benvenuti al nostro matrimonio</span>
                </div>

                <div className="header__menu">
                    <Menu position="header" />
                </div>

            </div>
        </header>
    );
}

export default Header;