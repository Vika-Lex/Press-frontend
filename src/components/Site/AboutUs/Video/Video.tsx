import Container from '@/src/components/ui/Container/Container';
import style from './Video.module.scss'
interface Props {
    className?: string
}


const Video = ({}: Props) => {
    return (
        <Container>
            <div className={style.img}>
                <iframe
                        src="https://www.youtube.com/embed/2jxeMWmoTSY?si=kIVhVrIAItIHs8sw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                ></iframe>
            </div>
        </Container>
    );
};
export default Video
