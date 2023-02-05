import data from '@/components/common/data/data.json';

import MelancholicPage from '@/components/package/home/melancholic';

export default function Page() {
    return (
        <>
            <MelancholicPage data={data} />
        </>
    );
}
