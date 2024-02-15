import type {AppProps} from 'next';
import {Inter} from 'next/font/google';
import '../app/globals.css';

const inter = Inter({subsets: ['latin']});

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <nav>
                <h1>Travel Blog</h1>
            </nav>
            <Component {...pageProps} />
        </>
    );
}
