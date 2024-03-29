import Head from 'next/head';

export default function SEO({ data }) {
    const { title, description, image } = data;
    return (
        <Head>
            <title>JSound</title>
            <meta name='title' content={title} />
            <meta name='description' content={description} />

            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://metatags.io/' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />

            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content='https://metatags.io/' />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={description} />
            <meta property='twitter:image' content={image}></meta>
        </Head>
    );
}
