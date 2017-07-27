<template>
  <header class="homeheader" id="homeheader">
    <div class="homeheader-box">
    	<span></span>
    	<div @click="showSearch" class="homeheader-box-search">家里交给它 夏日浪到飞起→</div>
    </div>
    <div class="homeheader-nav">
    	<div class="swiper-container" id="homeheader-list">
    		<div class="swiper-wrapper">
    			<div class="swiper-slide"><a href="">推荐</a></div>
    			<div class="swiper-slide"><a href="">直播</a></div>
    			<div class="swiper-slide"><a href="">专题</a></div>
    			<div class="swiper-slide"><a href="">好店</a></div>
    			<div class="swiper-slide"><a href="">严选</a></div>
    			<div class="swiper-slide"><a href="">国际</a></div>
    			<div class="swiper-slide"><a href="">美妆</a></div>
    			<div class="swiper-slide"><a href="">靓搭</a></div>
    			<div class="swiper-slide"><a href="">餐厨</a></div>
    			<div class="swiper-slide"><a href="">美食</a></div>
    			<div class="swiper-slide"><a href="">日用</a></div>
    			<div class="swiper-slide"><a href="">家纺</a></div>
    			<div class="swiper-slide"><a href="">家电</a></div>
    			<div class="swiper-slide"><a href="">一县一品</a></div>
    		</div>
    	</div>
    </div>
  </header>
</template>

<script>
	import angel from '../../event'
export default {
  name: 'homeheader',
  data () {
    return {
    
    }
  },
  methods:{
  	showSearch(){
  		angel.$emit('toggleSearch')
  	}
  },
  mounted(){
  	new Swiper(".swiper-container")
  }
  
}

</script>
	

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#homeheader{
	width:100%;
	height:240px;
	.homeheader-box{
		height:123px;
		width:100%;
		margin:0 auto;
		
		padding:21px 28px 0 28px;
		position:relative;
		border-bottom:1px solid #A9A9A9;
		span{
			position:absolute;
			left:50px;
			top:40px;
			display: block;
			height:42px;
			width:42px;
			background:url(../../img/icon/icon1.png) no-repeat;
		}
		.homeheader-box-search{
			background:#e6e6e6;
			height:81px;
			padding:13px 26px 13px 78px;
			color:#A9A9A9;
			border-radius:14px;
		}
	}
	.homeheader-nav{
		height:117px;
		width:100%;
		overflow:hidden;
		.swiper-container{
			width:2000px;
			.swiper-slide{
			width:153px!important ;
			height:117px;
			padding:34px 0 21px 0;
			text-align:center;
			a{
				color:#323232;
				display: block;
				width:153px;
			}
		}
		}
		
		
		
	}
}
	
</style>
