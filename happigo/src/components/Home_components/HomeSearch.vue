<template>
  <div class="homesearch">
    <div class="sea-title">
    	<div class="sea-title-return" @click="showSearch">
    		<img src="../../img/homeimage/ico_fh.png" alt="" />
    	</div>
    	<div class="sea-title-sou">
    		<span><img src="../../img/homeimage/ico_18.png" alt="" /></span>
    		<input type="text" value="夏日无惧高温"/>
    		<span><img src="../../img/homeimage/ico_26.png" alt="" /></span>
    	</div>
    	<div class="sea-title-btn">
    		<button>搜索</button>
    	</div>
    </div>
    <div class="sea-main">
    	<div class="sea-main-top">
    		热门搜索
    	</div>
    	<div class="sea-main-hot">
    		<a href="">防晒</a>
    		<a href="">防史蒂夫晒</a>
    		<a href="">防晒</a>
    		<a href="">防晒</a>
    		<a href="">防晒的</a>
    		<a href="">防晒</a>
    		<a href="">防晒 是</a>
    		<a href="">防晒</a>
    		<a href="">防晒</a>
    		<a href="">防晒的</a>
    		<a href="">防晒</a>
    		<a href="">防晒</a>
    		<a href="">防晒</a>
    		<a href="">防晒 是</a>
    		<a href="">防晒</a>
    		<a href="">防晒</a>
    		<a href="">防晒的</a>
    		<a href="">防晒</a>
    		<a href="">防晒</a>
    		<a href="">防晒</a>
    	</div>
    	<div class="sea-main-history">
    		<div class="sea-main-his-btn">
    			暂无搜索历史
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
	import angel from '../../event'
export default {
  name: 'homesearch',
  data () {
    return {
    
    }
  },
  methods:{
  	showSearch(){
  		angel.$emit('toggleSearch')
  	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homesearch{
	background:#eeeeee;
	height:100%;width:100%;
	position:absolute;
	left:0;top:0;
	z-index:1000;
}
	.sea-title{
		background:#fff;
		height:107px;
		border-bottom: 1px solid #e1e1e1;
		display: flex;
		.sea-title-return{
			margin-top:13px;
			height:78px;
			width:78px;
		}
		.sea-title-sou{
			flex:1;
			display: flex;
			background:#e6e6e6;
			margin:15px 20px;
			border-radius:10px;
			span{
				display: block;
				height:78px;
				width:78px;
			}
			input{
				background:#e6e6e6;
				flex:1;
				margin-top:10px;
				height:57px;
				font-size: 36px;
				color:#969696;
			}
		}
		.sea-title-btn{
			margin-left:20px;
			margin-right:15px;
			margin-top:15px;
			height:78px;
			width:99px;
			button{
				border-radius:10px;
				height:78px;
				width:99px;
				background:#c31f3a;
				color:#fff;
				font-size:36px;
			}
		}
	}
	.sea-main{	
		margin:0 29px;
		.sea-main-top{
			height:102px;
			padding:20px 0;
		}
		.sea-main-hot{
			height:468px;
			
			a{
				float:left;
				display: block;
				width:auto;
				height:88px;
				background:#fff;
				border:2px solid #ccc;
				line-height:62px;
				text-align: center;
				padding:13px 26px;
				margin:0 24px 24px 0;
				color:#000;
			}
		}
		.sea-main-history{
			width:100%;
			.sea-main-his-btn{
				margin:0 auto;
				width:486px;
				height:96px;
				border:2px solid #94193f;
				color:#94193f;
				text-align: center;
				line-height:96px;
			}
		}
	}
</style>
