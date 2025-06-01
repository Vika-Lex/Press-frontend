'use server'

import {getAllMenus} from "@/lib/menu/getAllMenus";
import {revalidateTag} from "next/cache";

export async function getAllMenusAction(page:number) {
    await getAllMenus();
    revalidateTag('menus')


    // try {
    //     const res = await getAllMenus(page);
    //     revalidateTag('menus')
    //     return res
    // } catch (e) {
    //
    // }
}