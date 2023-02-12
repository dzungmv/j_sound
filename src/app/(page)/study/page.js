'use client';
import data from '@/components/common/data/data.json';
import dynamic from 'next/dynamic';
// import StudyPage from '@/components/package/home/study';
const StudyPage = dynamic(() => import('@/components/package/home/study'), {
    ssr: false,
});

export default function Page() {
    return (
        <>
            <StudyPage data={data} />
        </>
    );
}
