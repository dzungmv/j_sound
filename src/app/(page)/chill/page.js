'use client';
import data from '@/components/common/data/data.json';
import dynamic from 'next/dynamic';
// import ChillPage from '@/components/package/home/chill';

const ChillPage = dynamic(() => import('@/components/package/home/chill'), {
    ssr: false,
});

export default function Page() {
    return (
        <>
            <ChillPage data={data} />
        </>
    );
}
