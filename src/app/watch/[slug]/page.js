import Video from '@/components/package/video';

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
    const all_songs = await fetch(`${process.env.API_URL}/song/all-songs`);
    const [getSong, getAllSongs] = await Promise.all([res, all_songs]);

    const parseJsonGetSong = await getSong.json();
    const parseJsonGetAllSongs = await getAllSongs.json();

    const song = parseJsonGetSong.data;

    const allSongs = parseJsonGetAllSongs.data;

    return (
        <>
            <Video song={song} allSongs={allSongs} />
        </>
    );
}
