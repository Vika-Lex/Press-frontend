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

export async function deleteUserItem(body:Body):Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/users/delete/${body.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(body)

        })
        return await res.json()
    } catch (e) {
console.error('не вдалося видалити елемент', e)
        return null
    }
}