<template>
  <div class="cartcomponent">
  	<div class="cart-top">
    	<div class="cart-top-left">
    		<img src="../../img/homeimage/ico_fh.png" alt="" />
    	</div>
    	<div class="cart-top-conter">购物车</div>
    	<div class="cart-top-right">
    		编辑
    	</div>
    </div> 
    <div class="cart-main">
    	<div class="cart-list">
    		<div class="cart-list-choose"><img src="../../img/cartimage/car1.png" alt="" /></div>
    		<div class="cart-list-image"><img src="../../img/cartimage/1_05507846260596320_360.jpg" alt="" /></div>
    		<div class="cart-list-wen">
    			<ul>
    				<li>海谜璃(HMILY)牛皮女款时尚休闲单肩包斜挎包H6978 </li>
    				<li>规格：粉色 </li>
    				<li>价格：<span>￥339</span></li>
    			</ul>
    		</div>
    		<div class="cart-list-num">x1</div>	
    	</div>
    </div>
    <div class="cart-bottom">
    	<div class="cart-bottom-left"><b><img src="../../img/cartimage/car1.png" alt="" /></b><p>全选</p></div>
    	<div class="cart-bottom-center">
    		<b>￥ 0.00</b>
    		<p>共<span>0</span>件，不含运费</p>
    	</div>
    	<button class="cart-bottom-btn">去结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartcomponent',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cartcomponent{
	height:100%;
	baackground:#eee;
	display: flex;
	flex-flow: column;
}
.cart-top{
	height:104px;
	background:#fff;
	border-bottom:2px solid #eee;
	display: flex;
	.cart-top-left{
		margin-top:13px;
		height:78px;
		width:78px;
	}
	.cart-top-conter{
		flex:1;
		text-align: center;
		line-height: 104px;
		font-size:34px;
	}
	.cart-top-right{
		margin-top:13px;
		line-height:78px;
		height:78px;
		width:78px;
		margin-right:30px;
		color:#787878;
		font-size:34px;
	}
}
.cart-main{
	width:100%;
	flex:1;
	height:auto;
	.cart-list{
		background:#fff;
		height:234px;
		padding:20px;
		border-bottom:2px solid #CCCCCC;
	}
	.cart-list-choose{
		float:left;
		height:40px;
		width:40px;
		margin-top:65px;
		margin-right:20px;
		img{
			width:100%;
			height:100%;
		}
	}
	.cart-list-image{
		float:left;
		height:140px;
		width:140px;
		margin-top:26px;
		margin-right:20px;
	}
	.cart-list-wen{
		float:left;
		width:440px;
		font-size:30px;
		ul li:nth-child(1){
			white-space:nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
			margin-top:30px;
		}
		li{
			line-height:30px;
			margin-top:10px
		}
	}
	.cart-list-num{
		float:left;
		width:40px;
		margin-top:65px;
		line-height:40px;
		font-size:24px;
		margin-left:20px;
	}
}
.cart-bottom{
	border-top:2px solid #ccc;
	background:#fff;
	height:100px;
	padding:10px 20px;
	display: flex;
	justify-content: space-between;
	.cart-bottom-left{
		width:160px;
		b{
			margin-top:20px;
			height:40px;
			width:40px;
			display: block;
			float:left;
			margin-right:10px;
		}
		p{
			margin-top:10px;
		}
	}
	.cart-bottom-center{
		flex:1;
		margin-right:15px;
		b{
			display: block;
			height:30px;
			font-size:30px;
			text-align:right;
			color:#94193f;
		}
		p{
			
			text-align:right;
			font-size:26px;
			color:#999;
		}
	}
	.cart-bottom-btn{
		height:78px;
		width:190px;
		background:#94193f;
		font-size:30px;
		color:#fff;
	}
}
</style>
