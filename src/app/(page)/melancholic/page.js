import MelancholicPage from '@/components/package/home/melancholic';

export const metadata = {
    title: 'Melancholic',
};

export default async function Page() {
    const res = await fetch(`${process.env.API_URL}/song/sadness`, {
        cache: 'no-cache',
    });

    const data = await res.json();
    const melancholicSongs = data.data;
    return (
        <>
            <MelancholicPage data={melancholicSongs} />
        </>
    );
}
