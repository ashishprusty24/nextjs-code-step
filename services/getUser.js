export default async function getUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json()
}