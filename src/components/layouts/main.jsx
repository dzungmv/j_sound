import Header from '../common/header';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
