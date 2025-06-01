"use client"

import Input from "./Input";
import {useFormik} from "formik";
import {createMenuItemAction} from "@/src/actions/menu/createMenuItemAction";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {clsx} from "clsx";


interface Props {
    className?: string
}

const MenuForm = ({}: Props) => {
    const [isSubmitActive, setIsSubmitActive] = useState<boolean>(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            href: '',
            label: ''

        },
        onSubmit: values => {
            console.log(values)
            setIsSubmitActive(true)
            try {
                createMenuItemAction(values);
                router.push('/admin/menu')

            } catch (e) {

            }
            setIsSubmitActive(false)
        }
    })

    return (
        <div className="flex flex-col justify-center items-center bg-white w-8/12 mx-auto px-3">

            <div
                className="flex flex-col w-full "
            >
                <p className="text-[32px] font-bold text-zinc-950 dark:text-white text-center">Создание пункта меню</p>

                <div className="relative my-4">
                    <div className="relative flex items-center py-1">
                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                    </div>
                </div>
                <div className='flex flex-col justify-center w-full'>
                    <form onSubmit={formik.handleSubmit}
                          className="mb-4"
                    >
                        <div className="">

                            <Input id='href'
                                   name='href'
                                   value={formik.values.href}
                                   label='Href'
                                   placeholder='Введите путь'
                                   onChange={formik.handleChange}
                            />
                            <Input id='label'
                                   name='label'
                                   value={formik.values.label}
                                   label='Label'
                                   placeholder='Введите название'
                                   onChange={formik.handleChange}
                            />


                            <button disabled={isSubmitActive}
                                    className={clsx('mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium bg-primary', {'bg-gray-400':isSubmitActive})}
                                    type="submit"
                            >Создать
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};
export default MenuForm