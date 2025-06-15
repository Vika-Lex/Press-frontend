import {MdOutlineDelete, MdOutlineModeEdit, MdOutlineRemoveRedEye} from "react-icons/md";
import React, {useState} from "react";
import Link from "next/link";

interface PageItem {
    id: number,
    name: string,
    href: string,
    content: string,
    createdAt: Date,
  }


interface Props {
   item: any
}

const MenuItem = ({item}:Props) => {

    function getDate(dateString: string): string {
        const date = new Date(dateString)
        return date.toLocaleDateString('ru-RU')
    }





    const handleClickEditItem = () => {

    }

    const handleClickDeleteItem = () => {

    }

    return (
        <tr
            className="hover:bg-slate-50 border-b border-slate-200"
        >
            <td className="p-4 py-5">
                <p className="block font-semibold text-sm text-slate-800">{item.id}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{item.name}</p>
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

                <Link href={item.href}
                    className='text-orange-400'
                        onClick={handleClickEditItem}
                >
                    <MdOutlineModeEdit/>
                </Link>
                <button onClick={handleClickDeleteItem}
                        className='text-red-700'
                >
                    <MdOutlineDelete/>
                </button>

            </td>
        </tr>
    );
};
export default MenuItem