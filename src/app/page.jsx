import MainLayout from '@/components/layouts/main';
import HomPage from '@/components/package/home';

export default function Home() {
    return (
        <>
            <HomPage />
        </>
    );
}

Home.Layout = MainLayout;
