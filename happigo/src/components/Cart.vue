<template>
  <div class="cart">
    <cart-component></cart-component>
  </div>
</template>

<script>
	import CartComponent from './Cart_Components/CartComponent'
export default {
  name: 'cart',
  data () {
    return {
    
    }
  },
   components:{
		CartComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart{
	width:100%;
	height:100%;
	position:absolute;
	left:0;
	top:0;
	z-index: 1002;
	background:#eee;
}
</style>
