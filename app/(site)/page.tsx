import MainList from "@/src/components/Site/Main/MainList/MainList";
import Hero from "@/src/components/Site/Main/Hero/Hero";
import Benefits from "@/src/components/Site/Main/Benefits/Benefits";
import Clients from "@/src/components/Site/Main/Clients/Clients";


export default function Home() {
    return (
        <div >
            <Hero/>
            <MainList/>
            <Benefits/>
            <Clients/>
        </div>
    );
}
