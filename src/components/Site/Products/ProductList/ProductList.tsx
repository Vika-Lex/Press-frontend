import Container from '@/src/components/ui/Container/Container';
import style from './ProductList.module.scss'
interface Props {
    className?: string
}


const ProductList = ({}: Props) => {
    return (
        <>
            <Container>
                <ul className='flex flex-wrap gap-x-9 '>
                    <li className={`${style.item} flex flex-col justify-center  w-[260] h-[320] mt-10`}>
                        <img className='w-[90px] h-[200px] mx-auto '
                             src='/images/press4t.png'
                             alt=''
                        />
                        <div className={`${style.descriptions} flex flex-col`}>
                            <p className={style.text}>Гідравлічний Прес Міні</p>
                            <p className={style.price}>18000 грн</p>
                        </div>
                    </li>

                    <li className={`${style.item} flex flex-col justify-center  w-[260] h-[320] mt-10`}>
                        <img className='w-[90px] h-[200px] mx-auto '
                             src='/images/press10t.png'
                             alt=''
                        />
                        <div className={`${style.descriptions} flex flex-col`}>
                            <p className={style.text}>Гідравлічний Прес</p>
                            <p className={style.price}>26000 грн</p>
                        </div>
                    </li>

                    <li className={`${style.item} flex flex-col justify-between w-[260] h-[320] mt-10`}>
                        <img className='w-[150px] h-[150px] mx-auto my-auto'
                             src='/images/press15t.png'
                             alt=''
                        />
                        <div className={`${style.descriptions} flex flex-col`}>
                            <p className={`${style.text} mt-0`}>Спарений Гідравлічний Прес</p>
                            <p className={style.price}>35000 грн</p>
                        </div>
                    </li>

                    <li className={`${style.item} flex flex-col justify-center  w-[260] h-[320] mt-10`}>
                        <img className='w-[90px] h-[200px] mx-auto '
                             src='/images/press4t.png'
                             alt=''
                        />
                        <div className={`${style.descriptions} flex flex-col`}>
                            <p className={style.text}>Гідравлічний Прес Міні</p>
                            <p className={style.price}>18000 грн</p>
                        </div>
                    </li>

                    <li className={`${style.item} flex flex-col justify-between w-[260] h-[320] mt-10`}>
                        <img className='w-[150px] h-[150px] mx-auto my-auto'
                             src='/images/press15t.png'
                             alt=''
                        />
                        <div className={`${style.descriptions} flex flex-col`}>
                            <p className={`${style.text} mt-0`}>Спарений Гідравлічний Прес 15т</p>
                            <p className={style.price}>48000 грн</p>
                        </div>
                    </li>

                    <li className={`${style.item} flex flex-col justify-center  w-[260] h-[320] mt-10`}>
                        <img className='w-[90px] h-[200px] mx-auto '
                             src='/images/press4t.png'
                             alt=''
                        />
                        <div className={`${style.descriptions} flex flex-col`}>
                            <p className={style.text}>Гідравлічний Прес на 25 т</p>
                            <p className={style.price}>50000 грн</p>
                        </div>
                    </li>

                </ul>
            </Container>
        </>
    );
};
export default ProductList