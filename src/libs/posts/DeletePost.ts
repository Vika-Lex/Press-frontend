import {API_URL} from "@/src/constants";
import {PostType} from "@/src/types/Post";



export const deletePost = async (id:number) => {
    try {

        const res = await fetch(`${API_URL}/posts/${id}`, {
            method: "DELETE",
            headers:{
              "Content-Type":"application/json"
            }
        })
        const data: { message: string} = await res.json()
        console.log('data',data)


    } catch (e) {

    }
}