<template>
  <div class="product-detail">
    <h2>商品详情页</h2>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  created () {
    console.log(location.search)
  }
}
</script>
