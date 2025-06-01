'use client'

import {IoIosClose} from "react-icons/io";
import {NavItemInterface} from "@/src/types/NavItem";
import style from './MenuModal.module.scss'
import {useFormik} from "formik";
import {clsx} from "clsx";
import React from "react";
import {updateMenuItem} from "@/lib/menu/updateMenuItem";
import {updateMenuItemAction} from "@/src/actions/menu/updateMenuItemAction";
import {getAllMenusAction} from "@/src/actions/menu/getAllMenusAction";
import {getAllMenus} from "@/lib/menu/getAllMenus";
import {Editor} from "@tinymce/tinymce-react";

interface Response {
    items: NavItemInterface[],
    total: number,
    page: number,
    totalPages: number
}
interface Props {
    className?: string;
    menuItem?: NavItemInterface;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setModalContent: React.Dispatch<React.SetStateAction<NavItemInterface>>;
    modalContent: NavItemInterface;
    page: number,
    setLinks: React.Dispatch<React.SetStateAction<Response|null>>;
}

const MenuModal = ({setIsModalOpen, setModalContent, modalContent, page, setLinks}: Props) => {
    const initialValues = {
        label: modalContent.label,
        href: modalContent.href,
        id: modalContent.id
    }

    const handleSubmitForm = (values) => {
        try {
            updateMenuItemAction(values)
            setLinks(prevState => {
                const links = prevState?.items.map(el => el.id === modalContent.id ? {...modalContent,...values} : el);

                return {...prevState,items:links}
            })
                setModalContent({
                    id: 0,
                    label: '',
                    href: '',
                    order: 0,
                    createdAt: ''
                });
                setIsModalOpen(false)


        } catch (e) {

        }
        updateMenuItemAction(values).then(res => {

        });
    }

    const handleCloseModal = () => {

        setIsModalOpen(false)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmitForm
    })
    return (
        <div className={style.backdrop}>
            <div className={style.modal}>
                <button type='button'
                        className={style.close}
                        onClick={handleCloseModal}
                >
                    <IoIosClose/>
                </button>
                <form onSubmit={formik.handleSubmit}
                      className={style.form}
                >
                    <label>
                        <p>Назва</p>
                        <input onChange={formik.handleChange}
                               value={formik.values.label}
                               type='text'
                               name='label'
                               className={clsx(style.formControl, 'py-[3px] px-[5px]')}
                        />
                    </label>
                    <label>
                        <p>URL</p>
                        <input onChange={formik.handleChange}
                               value={formik.values.href}
                               type='text'
                               name='href'
                               className={clsx(style.formControl, 'py-[3px] px-[5px]')}
                        />
                    </label>



                    <button type='submit'>Змінити</button>
                </form>
            </div>
        </div>
    );
};
export default MenuModal