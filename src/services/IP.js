const API_KEY = "at_6WDYrT3cfRGi4vFQ9DewL6Er6CJJ3"
const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`


export default async function fetchData (ip){
    
    try {
        const res = await fetch(`${url}&ipAddress=${ip}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}