import style from './Hero.module.scss'
import Container from '@/src/components/ui/Container/Container'
interface Props {
    className?: string
}


// const HeaderSite =() => {
//     return (
//         <Header>
//          <nav></nav>
//             <button></button>
//         </Header>
//     )
// }


const Hero = ({}: Props) => {
    return (

        <Container>
            <div className='mt-10'>
                <h1 className={`${style.titleHero} text-center font-bold uppercase `}>Гідравлічні
                    преси для макулатури та твердих побутових відходів</h1>
                <div className='flex mt-10 '>
                    <div className='w-1/2'>
                        <img className='w-[420px] h-[270px] mx-auto'
                             src='/images/mainImage.png'
                             alt=''
                        />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <p className={style.description}>З 2009 року наша компанія є одним з найбільших виробників
                            вантажопідйомного обладнання на ринку України. Ми розробляємо,
                            виробляємо, встановлюємо, модернізуємо і обслуговуємо
                            вантажопідйомне обладнання.</p>
                        <p className={`${style.description} mt-7`}>Контроль якості – один з головних принципів
                            виробництва
                            вантажопідйомного обладнання на нашому підприємстві</p>
                        <button className={`${style.button} w-[350px] h-[62px] mt-10  font-bold uppercase flex items-center justify-center gap-3`}
                                type='button'
                        >
                            {/*<PhoneIconGrey/>*/}
                            Замовити дзвінок
                        </button>
                    </div>
                </div>
            </div>
        </Container>

    );
};
export default Hero