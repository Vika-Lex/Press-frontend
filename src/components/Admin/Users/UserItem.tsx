import React from "react";
import {UserInterface} from "@/src/types/UserInterface";
import {MdOutlineDelete, MdOutlineModeEdit, MdOutlineRemoveRedEye} from "react-icons/md";
import {deleteUserAction} from "@/src/actions/users/deleteUserAction";
import {it} from "node:test";

interface Props {
    className?: string,
    item: UserInterface,
    setUsers: React.Dispatch<React.SetStateAction<Response | null>>,
    page: number,
    setIsModalUserOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setModalUserContent: React.Dispatch<React.SetStateAction<UserInterface>>
}

interface Response {
    items: UserInterface[],
    total: number,
    page: number,
    totalPages: number

}


const UserItem = ({item, setIsModalUserOpen, setUsers, setModalUserContent}: Props) => {
    function getDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU')
    }

    const handleClickEditItem = () => {
        setModalUserContent(item);
        setIsModalUserOpen(true)
    }

    const handleClickDeleteItem = () => {
        const status = confirm('Вы уверены, что хотите удалить?')

        if(status) {
            deleteUserAction(item).then(res => {

                setUsers(prevState => {
                    const users = prevState?.items.filter(user => user.id !== item.id)??[];
                    if (prevState) {
                        return {...prevState,
                            items:users}
                    }
                    return null

                })
            })
        }


    }


    return (
        <tr key={item.id}
            className="hover:bg-slate-50 border-b border-slate-200"
        >
            <td className="p-4 py-5">
                <p className="block font-semibold text-sm text-slate-800">{item.id}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{item.email}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{item.firstName}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{item.lastName}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{getDate(item.createdAt)}</p>
            </td>
            <td className="p-4 py-5 flex items-center gap-5">
                <button onClick={handleClickEditItem}
                        className='text-orange-400'
                >
                    <MdOutlineModeEdit/>
                </button>
                <button onClick={handleClickDeleteItem}
                        className='text-red-700'
                >
                    <MdOutlineDelete/>
                </button>

            </td>
        </tr>
    );
};
export default UserItem