import data from '@/components/common/data/data.json';
import LofiPage from '@/components/package/home/lofi';

// const ChillPage = dynamic(() => import('@/components/package/home/chill'), {
//     loading: () => <p>Loading...</p>,
// });

export default function Page() {
    return (
        <>
            <LofiPage data={data} />
        </>
    );
}
