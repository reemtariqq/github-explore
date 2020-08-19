import axios from 'axios'

const getUsersByName = (username: string) => {
    return axios.get(`https://api.github.com/users/${username}`)
}

export {
    getUsersByName
}