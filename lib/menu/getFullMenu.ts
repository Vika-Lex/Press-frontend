import {API_URL} from "@/src/constants";
import {NavItemInterface} from "@/src/types/NavItem";


interface Response {
    items: NavItemInterface[],

}
export async function getFullMenus():Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/menu/full`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            next: {
                tags: ['menus']
            }
        })
        return await res.json()
    } catch (e) {
console.error('не удалось получить элементы', e)
        return null
    }
}