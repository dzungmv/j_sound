import Header from '@/components/common/header';

export default function Page({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
