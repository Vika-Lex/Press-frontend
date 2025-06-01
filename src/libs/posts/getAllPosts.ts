import {API_URL} from "@/src/constants";
import {PostType} from "@/src/types/Post";

export const getAllPosts = async () => {
    try {
        const res = await fetch(`${API_URL}/posts`, {
            next: {tags: ['posts']}
        })
        const data:{message:string,data:PostType[]} = await res.json()
        return data.data

    } catch (e) {
return []
    }
}