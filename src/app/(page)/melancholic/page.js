'use client';

import data from '@/components/common/data/data.json';
import dynamic from 'next/dynamic';

import MelancholicPage from '@/components/package/home/melancholic';
// const MelancholicPage = dynamic(() => import('@/components/package/home/melancholic'), {
//     ssr: false,
// })

export default function Page() {
    return (
        <>
            <MelancholicPage data={data} />
        </>
    );
}
