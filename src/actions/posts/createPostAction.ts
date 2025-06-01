'use server'

import {createPost} from "@/src/libs/posts/CreatePost";
import {revalidateTag} from "next/cache";

export async function createPostAction (post: {title:string, body:string}) {

    const data = createPost(post);
    revalidateTag('posts');
    return data
}