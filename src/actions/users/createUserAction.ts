'use server'

import {revalidateTag} from "next/cache";
import {createUserItem} from "@/lib/users/createUserItem";

interface Body {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role?: string,
}

export async function createUserAction(body:Body) {
    await createUserItem(body);
    revalidateTag('users')
}




// 'use server'
//
//
// import {revalidateTag} from "next/cache";
// import {createUser} from "@/src/libs/users/createUser";
//
// export async function createUserAction (user) {
//     const data = createUser(user)
//     // const data = createPost(post);
//     // revalidateTag('posts');
//     return data
// }