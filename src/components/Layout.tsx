import { ReactNode } from 'react';
import Header from '@/components/Header';

export default function Layout({ className, children }: { className: string, children: ReactNode }) {

    return (
        <>
            <Header />
            <main id="main-content" className={className}>
                {children}
            </main>
        </>
    );
}
