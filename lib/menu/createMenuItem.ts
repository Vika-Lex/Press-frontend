import {API_URL} from "@/src/constants";
import {NavItemInterface} from "@/src/types/NavItem";


interface Response {
    body: NavItemInterface,
    message: string
}

interface Body {
    label: string,
    href: string,

}

export async function createMenuItem(body:Body):Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/menu/create`, {
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