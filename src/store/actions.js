import axios from 'axios'

export default {
  submit ({commit}, userData) {
    return axios.get(`http://10.10.3.58:8085/user?name=${userData.name}`).then((res) => {
      if (res.data.length <= 0) {
        return 0
      } else {
        if (res.data[0].password !== userData.password) {
          return 1
        } else {
          commit('SAVE_USER_INFO', res.data[0])
        }
      }
    })
  }
}
