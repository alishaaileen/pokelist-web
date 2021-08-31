import { API_URL } from '../constants'

export const fetchData = async (url) => {
    try {
        const data = await fetch(url)

        return data
    } catch (e) {
        return e
    }

}