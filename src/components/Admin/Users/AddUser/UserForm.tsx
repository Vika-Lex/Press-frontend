"use client"

import InputsRow from "@/src/components/Admin/Users/AddUser/InputsRow";
import Input from "./Input";
import {useFormik} from "formik";
import {useRouter} from "next/navigation";
import {createUserAction} from "@/src/actions/users/createUserAction";
import {useState} from "react";
import {clsx} from "clsx";
import * as Yup from "yup"


interface Props {
    className?: string
}

interface FormValues {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    password_confirmation: string
}

const UserForm = ({}: Props) => {

    const [isSubmitActive, setIsSubmitActive] = useState<boolean>(false)
    const router = useRouter();

    const shema = Yup.object().shape({
        firstName: Yup.string().required('Це поле обов`язковe для заповнення').min(3, 'Повинно бути мінімум 3 символи').max(15, 'Повинно бути не більше 15 символів'),
        lastName: Yup.string().required('Це поле обов`язковe для заповнення').min(3, 'Повинно бути мінімум 3 символи').max(15, 'Повинно бути не більше 15 символів'),
        email: Yup.string().email().required('Це поле обов`язково для заповнення'),
        password: Yup.string().required('Пароль обов`язковий').min(6, 'Повинно бути мінімум 6 символів'),
        password_confirmation: Yup.string().required('Підтвердження пароля обов`язкове').oneOf([Yup.ref('password')], "Паролі не співпадають")
    });

    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirmation: ''
        },
        validationSchema: shema,
        onSubmit: values => {
            setIsSubmitActive(true)
            try {
                if (values.password === values.password_confirmation) {
                    createUserAction(values)
                    router.push('/admin/users')
                }
            } catch (e) {
                console.error('Виникла помилка при створенні користувача')
            }

            setIsSubmitActive(false)
        }
    })
    console.log(Object(formik.errors).hasOwnProperty('email'))
    console.log(formik.errors.email)
    return (

        <div className="flex flex-col justify-center items-center bg-white w-8/12 mx-auto px-3">

            <div
                className="flex flex-col w-full"
            >
                <p className="text-[32px] font-bold text-zinc-950 dark:text-white">Реєстрація</p>

                <div className="relative my-4">
                    <div className="relative flex items-center py-1">
                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                    </div>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}
                          className="mb-4"
                    >
                        <div>
                            <InputsRow>
                                <Input id='email'
                                       name='email'
                                       value={formik.values.email}
                                       label='E-mail'
                                       placeholder='Введіть вашу пошту'
                                       onChange={formik.handleChange}
                                       errors={Boolean(formik.errors.email)}
                                       errorMessage={formik.errors.email}
                                />

                                {formik.touched.email && formik.errors.email ? (
                                    <div>
                                        {formik.errors.email}
                                    </div>
                                ) : null}

                            </InputsRow>
                            <InputsRow>
                                <Input id='firstname'
                                       name='firstName'
                                       value={formik.values.firstName}
                                       label='Імя'
                                       placeholder='Введіть ваше імя'
                                       onChange={formik.handleChange}
                                       errors={Boolean(formik.errors.firstName)}
                                       errorMessage={formik.errors.firstName}

                                />
                                <Input id='lastname'
                                       name='lastName'
                                       value={formik.values.lastName}
                                       label='Прізвище'
                                       placeholder='Введіть ваше прізвище'
                                       onChange={formik.handleChange}
                                       errors={Boolean(formik.errors.lastName)}
                                       errorMessage={formik.errors.lastName}
                                />

                            </InputsRow>
                            <InputsRow>
                                <Input id='password'
                                       name='password'
                                       value={formik.values.password}
                                       label='Пароль'
                                       placeholder='Введіть ваш пароль'
                                       onChange={formik.handleChange}
                                       errors={Boolean(formik.errors.password)}
                                       errorMessage={formik.errors.password}
                                />
                                <Input id='password_confirmation'
                                       name='password_confirmation'
                                       value={formik.values.password_confirmation}
                                       label='Підтвердіть пароль'
                                       placeholder='Підтвердіть ваш пароль'
                                       onChange={formik.handleChange}
                                       errors={Boolean(formik.errors.password_confirmation)}
                                       errorMessage={formik.errors.password_confirmation}
                                />

                            </InputsRow>

                            <button
                                disabled={isSubmitActive}
                                className={clsx('mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-white text-s font-medium bg-primary', {'bg-gray-400': isSubmitActive})}
                                type="submit"
                            >Створити
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};
export default UserForm