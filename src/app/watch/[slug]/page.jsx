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
    const res = await fetch(`${process.env.API_URL}/song/${slug}`);
    const parseJsonGetSong = await res.json();
    const song = parseJsonGetSong.data;

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Video song={song} />
            </Suspense>
        </>
    );
}
