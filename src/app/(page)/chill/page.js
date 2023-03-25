import ChillPage from '@/components/package/home/chill';

export default async function Page() {
    const res = await fetch(`${process.env.API_URL}/song/chill`, {
        cache: 'no-cache',
    });

    const data = await res.json();

    const chillSongs = data.data;
    return (
        <>
            <ChillPage data={chillSongs} />
        </>
    );
}
