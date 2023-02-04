import data from '@/components/common/data/data.json';
import dynamic from 'next/dynamic';

const ChillPage = dynamic(() => import('@/components/package/home/chill'), {
    loading: () => <p>Loading...</p>,
});

export default function Page() {
    return (
        <>
            <ChillPage data={data} />
        </>
    );
}
