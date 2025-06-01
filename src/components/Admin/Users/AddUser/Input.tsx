interface Props {
    id: string
    name:string
    value: string
    label: string
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    errors: boolean
    errorMessage: string|undefined
}


const Input = ({id, name, value, label, placeholder, onChange, errors, errorMessage}: Props) => {
    return (
        <>

            <div className="w-1/2 flex flex-col">

                <label className="text-zinc-950 dark:text-white text-s inline-block mb-2 ml-2"
                       htmlFor={id}
                >{label}</label>
                <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type="text"
                    name={name}
                />
                {errors  && (
                    <span style={{color: 'red'}}>
                    {errorMessage}
                </span>
                )}
            </div>
        </>
    );
};
export default Input