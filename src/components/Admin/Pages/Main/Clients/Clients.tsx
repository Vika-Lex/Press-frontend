import Container from "@/src/components/ui/Container/Container";
import style from "@/src/components/Site/Main/Clients/Clients.module.scss";

interface Props {
    className?: string
}


const Clients = ({}: Props) => {
    return (
        <Container>
            <div>
                <div className={style.titleWrapper}>
                    <h1 className={`${style.title} text-center font-bold uppercase `}>Наші клієнти</h1>
                    <div className={style.titleLine}></div>
                </div>
                <div className='flex items-center  mb-[40px] mt-[40px] justify-between ml-10 mr-20 mr-5 gap-16'>
                    <img className='w-[150px] h-[35px]'
                         src='/images/varus.png'
                         alt=''
                    />
                    <img className='w-[70px] h-[70px]'
                         src='/images/tetraPak.png'
                         alt=''
                    />
                    <img className='w-[130px] h-[60px]'
                         src='/images/silpo.png'
                         alt=''
                    />
                    <img className='w-[170px] h-[40px]'
                         src='/images/epicentr.png'
                         alt=''
                    />
                    <img className='w-[170px] h-[50px]'
                         src='/images/ukrposhta.png'
                         alt=''
                    />
                </div>
            </div>
        </Container>
    );
};
export default Clients