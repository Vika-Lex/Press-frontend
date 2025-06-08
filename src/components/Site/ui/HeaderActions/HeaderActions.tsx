'use client'
import style from './HeaderActions.module.scss'
import {useState} from "react";
import {clsx} from "clsx";
interface Props {
    className?: string
}


const HeaderActions = ({}: Props) => {
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)
    return (
        <>
            {/*<div className='languages'>*/}
            {/*    <button>UA</button>*/}
            {/*    <button>EN</button>*/}
            {/*</div>*/}
            <button onClick={()=> setIsActiveMenu(!isActiveMenu)} className={clsx(style.icon, {[style.active]:isActiveMenu})}>
               <span></span>
            </button>
        </>
    );
};
export default HeaderActions