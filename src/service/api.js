import axios from 'axios'

const api = async (email, name, text) => {
  return await axios.post('https://api-send-email.vercel.app/', {
    token: process.env.VUE_APP_KEYAPI,
    name: name,
    fromEmail: email,
    text: text
  }).then(res => {
    return res
  }).catch(error => {
    return error
  })
}

export default api