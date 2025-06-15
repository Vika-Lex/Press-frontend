'use client'

import AddMenuItem from "@/src/components/Admin/Menu/AddMenuItem/AddMenuItem";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {API_URL} from "@/src/constants";
import PageItem from "@/src/components/Admin/Pages/PageItem";

interface Props {
    className?: string,
}

interface PageItem {
    id: number,
    name: string,
    href: string,
    content: string,
    createdAt: Date,
}

interface Items {
    code: number,
    items: PageItem[],

}

const getPages = async () => {
    const res = await fetch(`${API_URL}/pages`)
    return await res.json()
}

const PagesList = ({}: Props) => {
    const {data, isLoading, error} = useQuery<Items>({queryKey: ['pages'], queryFn: getPages});
    console.log(isLoading)
    console.log(data)

    return (
        <div className="px-2 mx-auto w-full">

            <AddMenuItem/>
            <div className="w-full flex justify-between items-center mb-3 mt-5 pl-3">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">Список страниц</h3>

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
                                Name
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
                    {data?.items.map(item => (
                       <PageItem key={item.id} item={item}/>
                    ))}

                    </tbody>
                </table>

                <div className="flex justify-between items-center px-4 py-3">

                    <div className="flex space-x-1">
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Prev
                        </button>
                        {/*{getCountPages().map(element => (*/}
                        {/*    <button key={element}*/}
                        {/*            onClick={handleClickPage}*/}
                        {/*            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease"*/}
                        {/*    >*/}
                        {/*        {element}*/}
                        {/*    </button>*/}

                        {/*))}*/}
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Next
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default PagesList