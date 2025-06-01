'use server'

import {getAllUsers} from "@/lib/users/getAllUsers";
import {revalidateTag} from "next/cache";

export async function getAllUsersAction(page:number) {
await getAllUsers();
revalidateTag('users')


    // try {
    //     const res = await getAllUsers(page);
    //    revalidateTag('users');
    //     return res
    // } catch (e) {
    //
    // }
}