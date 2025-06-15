import Hero from "@/src/components/Admin/Pages/Main/Hero/Hero";
import MainList from "@/src/components/Admin/Pages/Main/MainList/MainList";
import Benefits from "@/src/components/Admin/Pages/Main/Benefits/Benefits";
import Clients from "@/src/components/Admin/Pages/Main/Clients/Clients";

interface Props {
    className?: string
}


const Page = ({}: Props) => {
    const pageObject = {
        hero: {
            title: '<h1 class="font-semibold text-2xl text-slate-800">Гідравлічні преси для макулатури та твердих побутових відходів</h1>',
            description: '<p>\n' +
                'З 2009 року наша компанія є одним з найбільших виробників вантажопідйомного обладнання на ринку України. Ми розробляємо, виробляємо, встановлюємо, модернізуємо і обслуговуємо вантажопідйомне обладнання.</p><br><br><p>Контроль якості – один з головних принципів виробництва вантажопідйомного обладнання на нашому підприємстві</p>',
            button: '<button class="text-red-500">Замовити дзвінок</button>'
        },
        products: {},
        benefits: {},
        clients: {}
    }
    return (
        <div className='Container mx-2'>
            <Hero page={pageObject.hero}/>
            <MainList/>
            <Benefits/>
            <Clients/>
        </div>
    );
};
export default Page