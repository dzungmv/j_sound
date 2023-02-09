'use client';
import Header from '@/components/common/header';
import EmptyLayout from '@/components/layouts/empty';
import MainLayout from '@/components/layouts/main';
import { useEffect, useState } from 'react';
import './styles/globals.scss';

export default function RootLayout({ children }) {
    const [offline, setOffline] = useState(false);
    const [online, setOnline] = useState(false);
    const Layout = MainLayout || EmptyLayout;

    useEffect(() => {
        const handleOffline = () => {
            setOffline(true);
            setOnline(false);
        };
        const handleOnline = () => {
            setOffline(false);
            setOnline(true);
        };
        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);
        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, []);
    return (
        <html lang='en'>
            <head>
                <link
                    rel='stylesheet'
                    href='https://site-assets.fontawesome.com/releases/v6.1.2/css/all.css?fbclid=IwAR2Lefv1ZTLJsKEsnl4HGMf5XRZuPqx5yOFnFaOFbVgCiCeU87S0up6ptKU'
                />
            </head>
            <body>
                {/* <Header /> */}
                <Layout>{children}</Layout>

                {offline && (
                    <div className='notify offline'>
                        <i className='fa-solid fa-wifi-slash'></i>
                        <span>Please check your connection!</span>
                        <div className='close-nofify'>
                            <i
                                className='fa-solid fa-times'
                                onClick={() => setOffline(false)}
                            ></i>
                        </div>
                    </div>
                )}

                {online && (
                    <div className='notify online'>
                        <i className='fa-solid fa-wifi'></i>
                        <span>You are now connected!</span>
                        <div
                            className='close-nofify'
                            onClick={() => setOnline(false)}
                        >
                            <i className='fa-solid fa-times'></i>
                        </div>
                    </div>
                )}
            </body>
        </html>
    );
}
