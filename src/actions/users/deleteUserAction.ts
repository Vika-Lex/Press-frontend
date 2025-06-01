'use server'

import {revalidateTag} from "next/cache";
import {deleteUserItem} from "@/lib/users/deleteUserItem";

interface Body {
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role?: string,
}

export async function deleteUserAction(body:Body) {
    await deleteUserItem(body);
    revalidateTag('users')
}
