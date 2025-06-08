import Container from '@/src/components/ui/Container/Container';
import style from './Advantages.module.scss'
interface Props {
    className?: string
}


const Advantages = ({}: Props) => {
    return (
        <section className={style.sectionAdvantages}
                 style={{ backgroundImage: "url('/images/achievements.jpg')" }}>
           <Container>
               <h2 className={style.title}>Наші досягнення</h2>
               <ul className={style.advantagesList}>
                   <li className={style.advantagesItem}>
                       <p className={style.digitalData}>2009</p>
                       <p className={style.description}>На ринку с 2009 року</p>
                   </li>
                   <li className={style.advantagesItem}>
                       <p className={style.digitalData}>&gt;3000</p>
                       <p className={style.description}>Успішно реалізованих проектів</p>
                   </li>
                   <li className={style.advantagesItem}>
                       <p className={style.digitalData}>&lt;2000</p>
                       <p className={style.description}>Задоволених клієнтів</p>
                   </li>
                   <li className={style.advantagesItem}>
                       <p className={style.digitalData}>&gt;90</p>
                       <p className={style.description}>Співробітників компанії</p>
                   </li>
                   <li className={style.advantagesItem}>
                       <p className={style.digitalData}>&gt;4000 м2</p>
                       <p className={style.description}>Виробничий комплекс</p>
                   </li>
                   <li className={style.advantagesItem}>
                       <p className={style.digitalData}>5 країн</p>
                       <p className={style.description}>Імпортують нашу продукцію</p>
                   </li>
               </ul>
           </Container>
        </section>
    );
};
export default Advantages