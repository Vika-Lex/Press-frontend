import style from "./CompanyIntro.module.scss";
import Container from '@/src/components/ui/Container/Container'

interface Props {
    className?: string
}


const CompanyIntro = ({}: Props) => {
    return (
        <Container>
            <h1 className={style.products}>Продукція</h1>
            <div className='mt-7'>
                <p className={style.text}>З 2009 року наша компанія є одним з найбільших виробників вантажопідйомного
                    обладнання на ринку України. Ми розробляємо, виробляємо, встановлюємо, модернізуємо і обслуговуємо
                    вантажопідйомне обладнання.</p>
                <p className={`${style.text} mt-7`}>Виробничий комплекс, розташований в місті Дніпро, оснащений сучасним
                    обладнанням і верстатами (в т.ч. унікальні власні розробки, які не мають аналогів).</p>
            </div>
        </Container>
    );
};
export default CompanyIntro