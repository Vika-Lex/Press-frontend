import {API_URL} from "@/src/constants";

export const createUser = async (user) => {
    try {
        const res = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user),
        })
        const data = await res.json()
        console.log('data',data)
        return data

    } catch (e) {
        console.log('errir')
        return []
    }
}