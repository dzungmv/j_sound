export default function Head() {
    const seo = {
        title: 'JSound',
        description: 'JSound - Music for everyone',
        image: 'https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/seo-img.jpg',
    };
    return (
        <>
            <meta
                content='width=device-width, initial-scale=1'
                name='viewport'
            />
            <link
                rel='icon'
                href='https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/j-brand.svg'
            />

            {/* reel apple touch icon */}
            <link
                rel='apple-touch-icon'
                href='https://jungjung261.blob.core.windows.net/nextjs-project/jmusic/j-brand.svg'
            />

            <title>{seo.description}</title>
            <meta name='title' content={seo.title} />
            <meta name='description' content={seo.description} />

            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://metatags.io/' />
            <meta property='og:title' content={seo.title} />
            <meta property='og:description' content={seo.description} />
            <meta property='og:image' content={seo.image} />

            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content='https://metatags.io/' />
            <meta property='twitter:title' content={seo.title} />
            <meta property='twitter:description' content={seo.description} />
            <meta property='twitter:image' content={seo.image}></meta>
        </>
    );
}
