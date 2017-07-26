<template>
  <div class="navtab">
	    <router-link to="/home"><span class="iconfont icon-zhuye"></span>首页</router-link>
	 		<router-link to="/species"><span class="iconfont icon-fenlei"></span>分类</router-link>
	 		<router-link to="/cart"><span class="iconfont icon-gouwuche"></span>购物车</router-link>
	 		<router-link to="/mine"><span class="iconfont icon-my"></span>我的</router-link>
 	</div>
</template>

<script>


export default {
  name: 'navtab',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/virtual.scss';
.navtab{
	width:100%;
	height:131px;
	background:#fff;
	position:absolute;bottom:0;left:0;
	z-index:999;
	border:1px solid #e1e1e1;
	display: flex;
	a{
		flex-grow:1;
		flex-shrink:1;
		display: flex;
		flex-flow:column;
		justify-content: space-around;
		align-items:center;
		color:#969696;
		span{
			font-size:50px;
		}
		&.router-link-active{
			color:$base-color;
		}
	}
}
</style>












































