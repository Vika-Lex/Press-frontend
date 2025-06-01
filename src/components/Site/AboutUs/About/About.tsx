import Container from '@/src/components/ui/Container/Container';
import style from './About.module.scss'

interface Props {
    className?: string
}


const About = ({}: Props) => {
    return (

            <Container>
            <h1 className={style.titlePage}>Про нас</h1>
            <ul>
                <li className={style.item}>
                    <div className={style.containerImg}>
                        <img
                            src='/images/teamGroup.png'
                            alt=''
                        />
                    </div>
                    <div className={style.content}>
                        <p className={style.numberItem}>01</p>
                        <div className={style.contentBlock}>
                            <h2 className={style.titleContent}>найбільший виробник
                                з 2009 року</h2>
                            <p className={style.textContent}>З 2009 року наша компанія є одним з найбільших виробників
                                вантажопідйомного обладнання на
                                ринку
                                України. Ми розробляємо, виробляємо, встановлюємо, модернізуємо і обслуговуємо
                                вантажопідйомне
                                обладнання.</p>
                            <p className={style.textContent}>
                                Виробничий комплекс, розташований в місті Дніпро, оснащений сучасним обладнанням і
                                верстатами (в
                                т.ч. унікальні власні розробки, які не мають аналогів).</p>
                        </div>
                    </div>
                </li>

                <li className={style.item}>
                    <div className={style.content}>
                        <p className={style.numberItem}>02</p>
                        <div className={style.contentBlock}>
                            <h2 className={style.titleContent}>Гарантія та обслуговування всього обладнання</h2>
                            <p className={style.textContent}>Наше конструкторське бюро протягом 7 років постійно
                                розробляє і
                                впроваджує у виробництво більш нові та досконалі рішення, які дозволяють задовольнити
                                будь-які побажання замовників. На все обладнання надається відповідальна гарантія, а
                                також
                                гарантійне та пост-гарантійне обслуговування.</p>
                        </div>
                    </div>
                    <div className={style.containerImg}>
                        <img
                            src='/images/signatureGuarantee.png'
                            alt=''
                        />
                    </div>
                </li>

                <li className={style.item}>
                    <div className={style.containerImg}>
                        <img
                            src='/images/productionСomplex.png'
                            alt=''
                        />
                    </div>
                    <div className={style.content}>
                        <p className={style.numberItem}>03</p>
                        <div className={style.contentBlock}>
                            <h2 className={style.titleContent}>Сучасний виробничий комплекс</h2>
                            <p className={style.textContent}>Виробничий комплекс, розташований в місті Дніпро, оснащений
                                сучасним обладнанням і верстатами (в т.ч. унікальні власні розробки, які не мають
                                аналогів).</p>
                            <p className={style.textContent}>
                                Висока продуктивність і колектив професіоналів дозволяють випускати обладнання високої
                                якості і в обумовлені терміни.</p>
                            <p className={style.textContent}>
                                Конструкторське бюро та технічні фахівці нашої компанії готові спроектувати і
                                реалізувати замовлення будь-якого масштабу і складності – від типового до унікального
                                ексклюзивного рішення.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </Container>

    );
};
export default About