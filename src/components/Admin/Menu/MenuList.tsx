"use client"

import AddMenuItem from "@/src/components/Admin/Menu/AddMenuItem/AddMenuItem";
import React, {useEffect, useState} from "react";
import {NavItemInterface} from "@/src/types/NavItem";
import {getAllMenus} from "@/lib/menu/getAllMenus";
import {useRouter} from "next/navigation";
import MenuItem from "@/src/components/Admin/Menu/MenuItem";
import MenuModal from "@/src/components/Admin/Menu/MenuModal/MenuModal";


interface Props {
    className?: string,
}

interface PaginatorInterface {
    items: NavItemInterface[],
    total: number,
    page: number,
    totalPages: number
}

interface Response {
    items: NavItemInterface[],
    total: number,
    page: number,
    totalPages: number
}

const MenuList = ({}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<NavItemInterface>({
        id: 0,
        label: '',
        href: '',
        order: 0,
        createdAt: ''
    })

    const [links, setLinks] = useState<Response | null>({
        items: [],
        total: 0,
        page: 1,
        totalPages: 1
    })

    const [page, setPage] = useState<number>(1)
    const router = useRouter();
    useEffect(() => {
        console.log('---23423------')
        getAllMenus(page).then(res => {

            console.log(res)
            setLinks(res)
        })
    }, [page]);

    function getCountPages(): number[] {
        const arr: number[] = []
        // @ts-ignore
        for (let i = 1; i <= links?.totalPages; i++) {
            arr.push(i)
        }
        return arr
    }

    const handleClickPage = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        setPage(Number(target.textContent))

    }

    return (

        <div className="px-2 mx-auto w-full">

            <AddMenuItem/>
            <div className="w-full flex justify-between items-center mb-3 mt-5 pl-3">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">Список пунктов меню</h3>

                </div>
                <div className="ml-3">
                    <div className="w-full max-w-sm min-w-[200px] relative">
                        <div className="relative">
                            <input
                                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                placeholder="Search for invoice..."
                            />
                            <button
                                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                                type="button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     strokeWidth="3"
                                     stroke="currentColor"
                                     className="w-8 h-8 text-slate-600"
                                >
                                    <path strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                    <tr>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                                ID
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                                Label
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                                Href
                            </p>
                        </th>

                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                                Дата создания
                            </p>
                        </th>
                        <th className="p-4 border-b border-slate-200 bg-slate-50">
                            <p className="text-sm font-normal leading-none text-slate-500">
                                Действия
                            </p>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {links?.items.map(item => (
                        <MenuItem key={item.id}
                                  item={item}
                                  setLinks={setLinks}
                                  page={page}
                                  setModalContent={setModalContent}
                                  setIsModalOpen={setIsModalOpen}
                        />
                    ))}

                    </tbody>
                </table>

                <div className="flex justify-between items-center px-4 py-3">

                    <div className="flex space-x-1">
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Prev
                        </button>
                        {getCountPages().map(element => (
                            <button key={element}
                                    onClick={handleClickPage}
                                    className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease"
                            >
                                {element}
                            </button>

                        ))}
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <MenuModal setModalContent={setModalContent}
                           page={page}
                           setLinks={setLinks}
                           setIsModalOpen={setIsModalOpen}
                           modalContent={modalContent}
                />
            )}
        </div>

    );
};
export default MenuList