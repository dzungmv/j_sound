import Video from '@/components/package/video';
import { Suspense } from 'react';
import Loading from './loading';

export async function generateMetadata({ params }) {
    const { slug } = params;
    const res = await fetch(`${process.env.API_URL}/song/${slug}`);
    const parseJson = await res.json();
    const song = parseJson.data;

    return {
        title: song.name,
    };
}

export default async function Page({ params }) {
    const { slug } = params;
    const getSong = await fetch(`${process.env.API_URL}/song/${slug}`);
    const parseJsonGetSong = await getSong.json();
    const song = parseJsonGetSong.data;

    const getSongs = await fetch(`${process.env.API_URL}/song/all-songs`);
    const parseJsonGetAllSongs = await getSongs.json();
    const allSongs = parseJsonGetAllSongs.data;

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Video song={song} allSongs={allSongs} />
            </Suspense>
        </>
    );
}
