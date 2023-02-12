'use client';
import data from '@/components/common/data/data.json';
// import LofiPage from '@/components/package/home/lofi';
import dynamic from 'next/dynamic';

const LofiPage = dynamic(() => import('@/components/package/home/lofi'), {
    ssr: false,
});

export default function Page() {
    return (
        <>
            <LofiPage data={data} />
        </>
    );
}
