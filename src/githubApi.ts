import axios from 'Axios'

async function fetchGithubUser(username: string){
    const res = await axios.get('https://api.github.com/users/' + username)
    return res.data
    
}

export default  fetchGithubUser;