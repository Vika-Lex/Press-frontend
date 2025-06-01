import {API_URL} from "@/src/constants";
import {UserInterface} from "@/src/types/UserInterface";


interface Response {
    body: UserInterface,
    message: string
}

interface Body {
    id: number,
    email:string,
    firstName: string,
    lastName: string
}

export async function updateUserItem(body:Body):Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/users/update/${body.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(body)

        })
        return await res.json()
    } catch (e) {
console.error('не вдалося змінити елемент', e)
        return null
    }
}