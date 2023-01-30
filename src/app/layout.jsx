import Header from '@/components/common/header';
import EmptyLayout from '@/components/layouts/empty';
import MainLayout from '@/components/layouts/main';
import './styles/globals.scss';

export default function RootLayout({ children }) {
    const Layout = MainLayout || EmptyLayout;
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
            </body>
        </html>
    );
}
