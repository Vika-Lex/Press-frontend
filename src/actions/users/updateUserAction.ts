'use server'

import {revalidateTag} from "next/cache";
import {updateUserItem} from "@/lib/users/updateUserItem";

interface Body {
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role?: string,
}

export async function updateUserAction(body:Body) {
    await updateUserItem(body);
    revalidateTag('users')
}
