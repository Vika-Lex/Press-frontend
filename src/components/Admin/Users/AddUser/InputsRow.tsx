interface Props {
    className?: string
    children: React.ReactNode
}


const InputsRow = ({children}: Props) => {
    return (
        <>
            <div className='flex items-start justify-between gap-3'>
                {children}
            </div>
        </>
    );
};
export default InputsRow