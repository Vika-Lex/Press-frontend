'use server'

import {revalidateTag} from "next/cache";
import {updateMenuItem} from "@/lib/menu/updateMenuItem";

interface Body {
    label: string,
    href: string,
    id: number

}

export async function updateMenuItemAction(body:Body) {
    await updateMenuItem(body);
    revalidateTag('menus')



}