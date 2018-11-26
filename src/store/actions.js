import axios from 'axios'

export default {
  // 登录
  logIn ({commit}, userData) {
    // 根据填写的用户名向服务器获取用户数据
    return axios.get(`http://10.10.3.58:8085/user?name=${userData.name}`).then((res) => {
      // 如果没获取到数据length<0,则返回0，提示用户名不正确
      if (res.data.length <= 0) {
        return 0
      } else {
        // 如果返回的密码和填写的密码不匹配，则返回1，提示密码不匹配
        if (res.data[0].password !== userData.password) {
          return 1
        } else {
          // 都验证成功，则记录用户信息，并存入sessionStorage
          commit('SAVE_USER_INFO', res.data[0])
          sessionStorage.setItem('login', JSON.stringify(res.data[0]))
        }
      }
    })
  },
  // 获取购物车信息
  getCartInfo (context, userId) {
    if (!context.state.cart.length > 0) { // 如果store中没有就向服务器获取购物车信息
      axios.get(`http://10.10.3.58:8085/cart/${userId}`).then((res) => {
        context.commit('UPDATA_CART', res.data.carts)
      }).catch((err) => {
        console.log(err.response.text)
      })
    }
  },
  // 添加商品到购物车
  addCart (context, prodData) {
    let nCart = context.state.cart
    nCart.push(prodData)
    // 更新store内的购物车信息
    context.commit('ADDCART', nCart)
    let data = {
      carts: nCart
    }
    // 根据ID更新服务器上的购物车信息
    let userId = JSON.parse(sessionStorage.getItem('login')).id
    axios.put(`http://10.10.3.58:8085/cart/${userId}`, data).catch((error) => {
      // 如果put出现错误，说明服务器上还没有购物车记录，则将本地的购物车信息post到服务器
      console.log(error.response.status)
      let cart = {
        id: userId,
        carts: nCart
      }
      axios.post('http://10.10.3.58:8085/cart', cart)
    })
  }
}
