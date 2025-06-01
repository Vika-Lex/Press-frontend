import {API_URL} from "@/src/constants";
import {PostType} from "@/src/types/Post";

interface Params {
    title: string,
    body: string
}

export const createPost = async ({title, body}: Params) => {
    try {
        console.log(title,body,'params')
        const res = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify({title, body}),
        })
        const data: { message: string, data: PostType } = await res.json()
        console.log('data',data)
        return data.data

    } catch (e) {
        console.log('errir')
        return []
    }
}