import Image from 'next/image';

const SliderComp = (data, touchDisabled, infinite, autoplay) => {
    return (
        <div className='wrapper_item'>
            {data.map((item, index) => {
                return (
                    <div key={index} className='slide-user--item'>
                        <Image />
                    </div>
                );
            })}
        </div>
    );
};
