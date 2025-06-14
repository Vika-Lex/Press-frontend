import Hero from "@/src/components/Admin/Pages/Main/Hero/Hero";
import MainList from "@/src/components/Admin/Pages/Main/MainList/MainList";
import Benefits from "@/src/components/Admin/Pages/Main/Benefits/Benefits";
import Clients from "@/src/components/Admin/Pages/Main/Clients/Clients";

interface Props {
    className?: string
}


const Page = ({}: Props) => {
    return (
        <div className='flex flex-col'>
            <Hero/>
            <MainList/>
            <Benefits/>
            <Clients/>
        </div>
    );
};
export default Page