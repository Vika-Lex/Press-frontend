import {API_URL} from "@/src/constants";
export const createComment = async (comment) => {
    try {

        const res = await fetch(`${API_URL}/comments`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(comment),
        })
        const data = await res.json()
        console.log('data',data)
        return data

    } catch (e) {
        console.log('errir')
        return []
    }
}