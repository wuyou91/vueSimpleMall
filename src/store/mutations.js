export default {
  CHANGE_TAB (state, classN) {
    state.tabed = classN
  },
  SAVE_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
  },
  UPDATA_CART (state, carts) {
    state.cart = carts
  },
  ADDCART (state, prodData) {
    state.cart = prodData
  },
  DELETE_CART (state) {
    state.cart = []
  }
}
