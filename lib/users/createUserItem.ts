import {API_URL} from "@/src/constants";
import {UserInterface} from "@/src/types/UserInterface";


interface Response {
    body: UserInterface,
    message: string
}

interface Body {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role?: string,
}

export async function createUserItem(body:Body):Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/users/create`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)

        })
        return await res.json()
    } catch (e) {
console.error('Не вдалося створити елемент', e)
        return null
    }
}