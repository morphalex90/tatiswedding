// import { useState, useEffect } from 'react';
import Header from '@/components/Header';

export default function Layout(props) {
    // useEffect(() => {
    // }, []);

    return (
        <>
            <Header />
            <main id="main-content" className={props.className}>
                {props.children}
            </main>
        </>
    );
}
