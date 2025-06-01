interface Props {
    className?: string
}


const HeaderActions = ({}: Props) => {
    return (
        <>
            <div className='languages'>
                <button>UA</button>
                <button>EN</button>
            </div>
            <button className='burger'>
               <span></span>
            </button>
        </>
    );
};
export default HeaderActions