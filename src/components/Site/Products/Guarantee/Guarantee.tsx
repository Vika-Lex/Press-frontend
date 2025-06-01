import style from './Guarantee.module.scss'
interface Props {
    className?: string
}


const Guarantee = ({}: Props) => {
    return (
        <div className='flex flex-col items-center mt-[60px] mb-[60px]'>
            <img
                src='/images/guarantee.svg'
                 alt=''
            />
            <p className={style.text}>На всі вироби гарантія 12 місяців</p>
        </div>
    );
};
export default Guarantee