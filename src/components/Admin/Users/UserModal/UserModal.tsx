'use client'

import style from './UserModal.module.scss'
import {IoMdCloseCircleOutline} from "react-icons/io";
import {useFormik} from "formik";
import {clsx} from "clsx";
import {UserInterface} from "@/src/types/UserInterface";
import React from "react";
import {updateUserAction} from "@/src/actions/users/updateUserAction";

interface Response {
    items: UserInterface[],
    total: number,
    page: number,
    totalPages: number
}

interface Props {
    className?: string,
    item?: UserInterface,
    setIsModalUserOpen: React.Dispatch<React.SetStateAction<boolean>>
    setModalUserContent: React.Dispatch<React.SetStateAction<UserInterface>>
    modalUserContent: UserInterface
    page: number
    setUsers: React.Dispatch<React.SetStateAction<Response | null>>
}

const UserModal = ({setIsModalUserOpen, setModalUserContent, modalUserContent, page, setUsers}: Props) => {
        const initialValues = {
            email: modalUserContent.email,
            firstName: modalUserContent.firstName,
            lastName: modalUserContent.lastName,
            id: modalUserContent.id
        }

        const handleSubmitForm = (values) => {
            try {
                updateUserAction(values);
                setUsers(prevState => {
                        const users = prevState?.items.map(el => el.id === modalUserContent.id ? {...modalUserContent, ...values} : el)
                        return {
                            ...prevState, items: users
                        }
                    }
                )
                setModalUserContent({
                    id: 0,
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    role: '',
                    createdAt: ''
                });
                setIsModalUserOpen(false)
            } catch
                (e) {

            }
        }

        const handleCloseModal = () => {
            setIsModalUserOpen(false)
        }

        const formik = useFormik({
            initialValues,
            onSubmit: handleSubmitForm

        })
        return (
            <div className={style.backdrop}>
                <div className={style.modal}>
                    <button onClick={handleCloseModal}
                            type='button'
                            className={style.close}
                    >
                        <IoMdCloseCircleOutline/>
                    </button>
                    <form onSubmit={formik.handleSubmit}
                          className={style.form}
                    >
                        <label>
                            <p>E-mail</p>
                            <input type='text'
                                   name='email'
                                   className={clsx(style.formControl, 'py-[5px] px-[10px]')}
                                   onChange={formik.handleChange}
                                   value={formik.values.email}
                            />
                        </label>
                        <label>
                            <p>First Name</p>
                            <input type='text'
                                   name='firstName'
                                   className={clsx(style.formControl, 'py-[5px] px-[10px]')}
                                   onChange={formik.handleChange}
                                   value={formik.values.firstName}
                            />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input type='text'
                                   name='lastName'
                                   className={clsx(style.formControl, 'py-[5px] px-[10px]')}
                                   onChange={formik.handleChange}
                                   value={formik.values.lastName}
                            />
                        </label>
                        <button type='submit'>Змінити</button>
                    </form>
                </div>

            </div>
        );
    }
;
export default UserModal