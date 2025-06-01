import About from "@/src/components/Site/AboutUs/About/About";
import Advantages from "@/src/components/Site/AboutUs/Advantages/Advantages";
import Video from "@/src/components/Site/AboutUs/Video/Video"

interface Props {
    className?: string
}


const AboutPage = ({}: Props) => {
    return (
        <div>
            <About/>
            <Advantages/>
           <Video/>
        </div>
    );
};
export default AboutPage