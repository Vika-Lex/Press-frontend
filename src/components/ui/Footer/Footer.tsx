import Container from '@/src/components/ui/Container/Container';
import style from './Footer.module.scss'

interface Props {
    className?: string
}


const Footer = ({}: Props) => {
    return (
        <footer >
            <Container className={style.footerBorder}>
                <div className='flex justify-between items-center'>
                    <p className={`${style.text} ml-10`}>© DIASON PRESS, 2023</p>
                    <p className={`${style.text} mr-10`}>Вироблено в Україні</p>
                </div>
            </Container>
        </footer>
    );
};
export default Footer