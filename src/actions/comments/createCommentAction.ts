'use server'

import {revalidateTag} from "next/cache";
import {createComment} from "@/src/libs/Comments/createComment";

export async function createCommentAction (comment) {
const data = createComment(comment)
    // const data = createComment(comment);
    // revalidateTag('posts');
    return data
}