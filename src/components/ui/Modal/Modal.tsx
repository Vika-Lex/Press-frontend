import React, {ReactNode} from "react";
import style from './Modal.module.scss'
import {createPortal} from "react-dom";
import {clsx} from "clsx";
import * as http from "node:http";

interface Props {
    className?: string;
    children: ReactNode;
    onOpenModal: ()=>void
}


const Modal = ({children, onOpenModal, className}: Props) => {

    return createPortal(
        <div className={style.backdrop} onClick={onOpenModal}>
            <div className={clsx(style.modal, className)} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body as HTMLElement
    )

};
export default Modal