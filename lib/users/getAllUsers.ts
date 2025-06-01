import {API_URL} from "@/src/constants";
import {UserInterface} from "@/src/types/UserInterface";

interface Response {
   items: UserInterface[],
   total: number,
   page: number,
  totalPages: number

}
export async function getAllUsers(page=1, limit=5):Promise<Response|null> {
    try {
        const res = await fetch(`${API_URL}/users?page=${page}&limit=${limit}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            next: {
                tags: ['users']
            }
        })
        return await res.json()
    } catch (e) {
console.error('Не удалось получить юзеров', e)
        return null
    }
}