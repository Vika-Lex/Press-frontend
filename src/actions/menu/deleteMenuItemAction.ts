'use server'

import {revalidateTag} from "next/cache";
import {deleteMenuItem} from "@/lib/menu/deleteMenuItem";

interface Body {
    label: string,
    href: string,
    id: number

}

export async function deleteMenuItemAction(body:Body) {
    await deleteMenuItem(body);
    revalidateTag('menus')



}