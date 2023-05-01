import LofiVideo from '@/components/package/video/lofi';
import StudyVideo from '@/components/package/video/study';
import { Suspense } from 'react';
import Loading from './loading';

export async function generateMetadata({ params }) {
    try {
        const { slug } = params;
        const res = await fetch(`${process.env.API_URL}/song/${slug}`);
        const parseJson = await res.json();

        const song = parseJson.data;

        return {
            title: song.name,
        };
    } catch (error) {
        return {
            title: 'Product not found',
        };
    }
}

// export async function generateStaticParams() {
//     const getSongs = await fetch(`${process.env.API_URL}/song/get-songs`);
//     const parseJsonGetAllSongs = await getSongs.json();
//     const allSongs = parseJsonGetAllSongs.data;

//     return allSongs.map((song) => ({
//         slug: song.slug,
//     }));
// }

export default async function Page({ params }) {
    const { slug } = params;
    const getSong = await fetch(`${process.env.API_URL}/song/${slug}`);
    const parseJsonGetSong = await getSong.json();
    const song = parseJsonGetSong.data;

    return (
        <>
            <Suspense fallback={<Loading />}>
                <StudyVideo song={song} />
            </Suspense>
        </>
    );
}
