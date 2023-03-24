// import LofiPage from '@/components/package/home/lofi';

import LofiPage from '@/components/package/home/lofi';

export const metadata = {
    title: 'Lofi',
};

export default async function Page() {
    const res = await fetch(`${process.env.API_URL}/song/lofi`);

    const data = await res.json();

    const lofiSongs = data.data;

    return (
        <>
            <LofiPage data={lofiSongs} />
        </>
    );
}
