import {MdOutlineDelete, MdOutlineModeEdit, MdOutlineRemoveRedEye} from "react-icons/md";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/fa";
import React, {useState} from "react";
import {NavItemInterface} from "@/src/types/NavItem";
import {API_URL} from "@/src/constants";
import {getAllMenus} from "@/lib/menu/getAllMenus";
import {deleteMenuItemAction} from "@/src/actions/menu/deleteMenuItemAction";


interface Props {
    className?: string,
    item: NavItemInterface,
    setLinks: React.Dispatch<React.SetStateAction<Response|null>>,
    page: number,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setModalContent: React.Dispatch<React.SetStateAction<NavItemInterface>>
}

interface Response {
    items: NavItemInterface[],
    total: number,
    page: number,
    totalPages: number
}

const MenuItem = ({item, setLinks, page, setIsModalOpen, setModalContent}: Props) => {
    const [isIncrementActive, setIsIncrementActive] = useState<boolean>(false)
    const [isDecrementActive, setIsDecrementActive] = useState<boolean>(false)
    function getDate(dateString:string):string {
        const date = new Date(dateString)
        return date.toLocaleDateString('ru-RU')
    }

    const handleIncrementOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(item);
        setIsIncrementActive(true);
        fetch(`${API_URL}/menu/increment`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            getAllMenus(page).then(res => {
                setLinks(res);
                setIsIncrementActive(false)
            })
        })
    }

    const handleDecrementOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(item);
        setIsDecrementActive(true)
        fetch(`${API_URL}/menu/decrement`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            getAllMenus(page).then(res => {
                setLinks(res);
                setIsDecrementActive(false)
            })
        })
    }

    const handleClickEditItem = () => {
        setModalContent(item);
        setIsModalOpen(true)
    }

    const handleClickDeleteItem = () => {
        deleteMenuItemAction(item)
    }

    return (
        <tr key={item.id}
            className="hover:bg-slate-50 border-b border-slate-200"
        >
            <td className="p-4 py-5">
                <p className="block font-semibold text-sm text-slate-800">{item.id}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{item.label}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{item.href}</p>
            </td>

            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{getDate(item.createdAt)}</p>
            </td>
            <td className="p-4 py-5 flex items-center gap-5">
                <button className='text-sky-700'>
                    <MdOutlineRemoveRedEye/>
                </button>

                <button className='text-orange-400' onClick={handleClickEditItem}>
                    <MdOutlineModeEdit/>
                </button>
                <button onClick={handleClickDeleteItem} className='text-red-700'>
                    <MdOutlineDelete/>
                </button>
                <button onClick={handleIncrementOrder} disabled={isIncrementActive}>
                    <FaArrowAltCircleDown className={isIncrementActive?'text-slate-500':'text-slate-900'} />

                </button>
                <button onClick={handleDecrementOrder} disabled={isDecrementActive}>
                    <FaArrowAltCircleUp className={isDecrementActive?'text-slate-500':'text-slate-900'}/>
                </button>
            </td>
        </tr>
    );
};
export default MenuItem