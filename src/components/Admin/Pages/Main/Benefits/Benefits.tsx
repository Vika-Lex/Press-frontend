import Container from "@/src/components/ui/Container/Container";
import style from "@/src/components/Site/Main/Benefits/Benefits.module.scss";

interface Props {
    className?: string
}


const Benefits = ({}: Props) => {
    return (
        <Container>
            <div className={`${style.benefitsSection}`}>
                <h1 className={`${style.title} text-center font-bold uppercase `}>Наші переваги</h1>
                <div className={`${style.benefitsSection} flex items-center justify-center gap-28`}>
                    <div className={style.benefits}>
                        <img src='/images/crane.svg'
                             alt=''
                        />
                        <p className={style.text}>Сучасний виробничий комлекс</p>
                    </div>
                    <div className={style.benefits}>
                        <img src='/images/engineering.svg'
                             alt=''
                        />
                        <p className={style.text}>Власне конструкторське бюро</p>
                    </div>
                    <div className={style.benefits}>
                        <img src='/images/growth.svg'
                             alt=''
                        />
                        <p className={style.text}>На ринку з 2009 року</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default Benefits