import data from '@/components/common/data/data.json';
import Header from '@/components/common/header';
import Video from '@/components/package/video';

export default function Page({ video }) {
    return (
        <>
            <Header />
            <Video data={video} />
        </>
    );
}

export function getStaticPaths() {
    return {
        paths: data.map((video) => ({
            params: {
                videoId: video.id.toString(),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const video_data = await data.find((video) => video.id === 1);

    if (!video_data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            video: video_data,
        },
    };
}
