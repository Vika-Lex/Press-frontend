'use server'


import {revalidateTag} from "next/cache";
import {deletePost} from "@/src/libs/posts/DeletePost";

export async function deletePostAction ( id:number) {

   deletePost(id);
   revalidateTag('posts');

}