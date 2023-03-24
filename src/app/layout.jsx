// 'use client';
// import Header from '@/components/common/header';
import EmptyLayout from '@/components/layouts/empty';
import MainLayout from '@/components/layouts/main';
// import { useEffect, useState } from 'react';
import './styles/globals.scss';

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link
                    rel='stylesheet'
                    href='https://site-assets.fontawesome.com/releases/v6.1.2/css/all.css?fbclid=IwAR2Lefv1ZTLJsKEsnl4HGMf5XRZuPqx5yOFnFaOFbVgCiCeU87S0up6ptKU'
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
