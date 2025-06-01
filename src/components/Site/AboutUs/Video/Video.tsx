import Container from '@/src/components/ui/Container/Container';
import style from './Video.module.scss'
interface Props {
    className?: string
}


const Video = ({}: Props) => {
    return (
        <Container>
            <div className={style.img}>
                <img
                    src='/images/video.jpg'
                    alt=''
            />
            </div>
        </Container>
    );
};
export default Video
