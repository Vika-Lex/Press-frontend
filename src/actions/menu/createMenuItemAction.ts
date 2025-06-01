'use server'

import {revalidateTag} from "next/cache";
import {createMenuItem} from "@/lib/menu/createMenuItem";

interface Body {
    label: string,
    href: string

}

export async function createMenuItemAction(body:Body) {
    await createMenuItem(body);
    revalidateTag('menus')



}