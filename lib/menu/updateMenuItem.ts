import {API_URL} from "@/src/constants";
import {NavItemInterface} from "@/src/types/NavItem";


interface Response {
    body: NavItemInterface,
    message: string
}

interface Body {
    label: string,
    href: string,
    id: number

}

export async function updateMenuItem(body:Body):Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/menu/update/${body.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(body)

        })
        return await res.json()
    } catch (e) {
console.error('не удалось изменить элемент', e)
        return null
    }
}