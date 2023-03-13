// import MainPage from '@/components/package/home/main';
'use client';
import MainPage from '@/components/package/home/main';
import dynamic from 'next/dynamic';

// const MainPage = dynamic(() => import('@/components/package/home/main'), {
//     ssr: false,
// });

export default function Home() {
    return (
        <>
            <MainPage />
        </>
    );
}
