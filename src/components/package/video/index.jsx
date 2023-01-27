import styles from './video.module.scss';

const Video = ({ data }) => {
    return (
        <div className={styles.wrapperVideo}>
            <iframe key={data.id} src={data.link} />
        </div>
    );
};

export default Video;
