import { Suspense } from 'react';
import MainPage from '@/components/package/home/main';

export const metadata = {
    title: 'Jsound - Music for everyone',
};

export default async function Home() {
    const res = await fetch(
        `${process.env.API_URL}/song/get-songs?page=1&limit=4`
    );
    const data = await res.json();

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <MainPage data={data} />
            </Suspense>
        </>
    );
}
