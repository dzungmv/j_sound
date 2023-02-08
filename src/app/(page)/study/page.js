import data from '@/components/common/data/data.json';
import StudyPage from '@/components/package/home/study';

export default function Page() {
    return (
        <>
            <StudyPage data={data} />
        </>
    );
}
