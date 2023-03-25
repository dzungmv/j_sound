import StudyPage from '@/components/package/home/study';

export default async function Page() {
    const res = await fetch(`${process.env.API_URL}/song/study`, {
        cache: 'no-cache',
    });
    const data = await res.json();
    const studySongs = data.data;

    return (
        <>
            <StudyPage data={studySongs} />
        </>
    );
}
