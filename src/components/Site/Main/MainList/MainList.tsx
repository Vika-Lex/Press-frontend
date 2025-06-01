import style from './MainList.module.scss'
import Container from '@/src/components/ui/Container/Container'

interface Props {
    className?: string
}


const MainList = ({}: Props) => {
    return (

        <Container>
            <ul className='flex flex-wrap gap-[40px] justify-center mt-12'>
                <li className={`${style.item} flex justify-between w-[45%] h-[350px] `}>
                    <div className='w-1/2 flex justify-center items-center '>
                        <img className='w-[120px] h-[230px] my-auto'
                             src='/images/press4t.png'
                             alt=''
                        />
                    </div>
                    <div className={`${style.descriptionCard} w-1/2`}>
                        <h2 className={`${style.title} font-bold uppercase`}>ГІДРАВЛІЧНИЙ
                            ПРЕС МІНІ</h2>
                        <p className={`${style.description} font-normal`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</p>
                        <p className={`${style.volume} font-bold `}>4 т</p>
                        <p className={`${style.price} font-bold`}>18000 грн</p>
                        <button type='button'
                                className={`${style.button} font-normal`}
                        >Детальніше
                        </button>
                    </div>

                </li>
                <li className={`${style.item} flex justify-between w-[45%] h-[350px] `}>
                    <div className='w-1/2 flex justify-center items-center '>
                        <img className='w-[200px] h-[340px] my-auto'
                             src='/images/press10t.png'
                             alt=''
                        />
                    </div>
                    <div className={`${style.descriptionCard} w-1/2`}>
                        <h2 className={`${style.title} font-bold uppercase`}>ГІДРАВЛІЧНИЙ
                            ПРЕС</h2>
                        <p className={`${style.description} font-normal`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt.</p>
                        <p className={`${style.volume} font-bold `}>10 т</p>
                        <p className={`${style.price} font-bold`}>26000 грн</p>
                        <button type='button'
                                className={`${style.button} font-normal`}
                        >Детальніше
                        </button>
                    </div>

                </li>
                <li className={`${style.item} flex justify-between w-[45%] h-[350px] `}>
                    <div className='w-1/2 flex justify-center items-center '>
                        <img className='w-[250] h-[350] my-auto'
                             src='/images/press15t.png'
                             alt=''
                        />
                    </div>
                    <div className={`${style.descriptionCard} w-1/2`}>
                        <h2 className={`${style.title} font-bold uppercase`}>СПАРЕНИЙ ГІДРАВЛІЧНИЙ ПРЕС</h2>
                        <p className={`${style.description} font-normal`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore.</p>
                        <p className={`${style.volume} font-bold `}>15 т</p>
                        <p className={`${style.price} font-bold`}>35000 грн</p>
                        <button type='button'
                                className={`${style.button} font-normal`}
                        >Детальніше
                        </button>
                    </div>

                </li>
                <li className={`${style.item} flex justify-between w-[45%] h-[350px] `}>
                    <div className='w-1/2 flex justify-center items-center '>
                        <img className='w-[200px] h-[350px] my-auto'
                             src='/images/press20t.png'
                             alt=''
                        />
                    </div>
                    <div className={`${style.descriptionCard} w-1/2`}>
                        <h2 className={`${style.title} font-bold uppercase`}>ГІДРАВЛІЧНИЙ
                            ПРЕС HA 20 Т</h2>
                        <p className={`${style.description} font-normal`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</p>
                        <p className={`${style.volume} font-bold `}>20 т</p>
                        <p className={`${style.price} font-bold`}>45000 грн</p>
                        <button type='button'
                                className={`${style.button} font-normal`}
                        >Детальніше
                        </button>
                    </div>

                </li>
            </ul>
        </Container>
       );
};
export default MainList