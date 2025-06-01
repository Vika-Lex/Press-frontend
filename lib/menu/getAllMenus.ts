import {API_URL} from "@/src/constants";
import {NavItemInterface} from "@/src/types/NavItem";


interface Response {
    items: NavItemInterface[],
    total: number,
    page: number,
    totalPages: number
}
export async function getAllMenus(page=1, limit=5):Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/menu?page=${page}&limit=${limit}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'

        })
        return await res.json()
    } catch (e) {
console.error('не удалось получить элементы', e)
        return null
    }
}