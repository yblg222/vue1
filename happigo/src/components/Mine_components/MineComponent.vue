<template>
  <div class="minecomponent">
   	<div class="mine-top">
   		<div class="mine-top-san">
   			<img src="../../img/mineimage/us_ico_more.png" alt="" />
   		</div>
   		<div class="mine-top-photo">
   			<div class="photo-ug"><img src="../../img/mineimage/us_ico_hg.png" alt="" /></div>
   			<div class="photo-mg"><img src="../../img/mineimage/tx.png" alt="" /></div>
   		</div>
   		<p class="mine-top-name">注册会员</p>
   	</div>
   	<div class="mine-order">
   		<div class="mine-order-top">
   			<div><span><img src="../../img/mineimage/us_ico_1.png" alt="" /></span>全部订单</div>
   			<div>查看全部订单<span><img src="../../img/mineimage/us_ico_11.png" alt="" /></span></div>
   		</div>
   		<div class="mine-order-bottom">
   			<div><img src="../../img/mineimage/us_ico_2.png" alt="" /><p>待付款</p></div>
   			<div><img src="../../img/mineimage/us_ico_3.png" alt="" /><p>待付款</p></div>
   			<div><img src="../../img/mineimage/us_ico_4.png" alt="" /><p>待付款</p></div>
   			<div><img src="../../img/mineimage/us_ico_5.png" alt="" /><p>待付款</p></div>
   		</div>
   	</div>
   	<div class="mine-card">
   			<div class="mine-card-top">
   				<div><span><img src="../../img/mineimage/us_ico_6.png" alt="" /></span>我的资产</div>			
   			</div>
   			<div class="mine-card-bottom">
   				<div><span>0</span><p>积分</p></div>	
   				<div><span>6</span><p>优惠券</p></div>
   				<b><img src="../../img/mineimage/us_ico_10.png" alt="" /></b>
   			</div>
   	</div>
   	<div class="mine-box">
   		<div class="mine-box-address">
   			<div>
	   			<span><img src="../../img/mineimage/us_ico_7.png" alt="" /></span>
	   			收货地址
   			</div>
   			<span><img src="../../img/mineimage/us_ico_11.png" alt="" /></span>
   			
   		</div>
   		<div class="mine-box-help">
   			<div>
	   			<span><img src="../../img/mineimage/us_ico_9.png" alt="" /></span>
	   			帮助与反馈
	   		</div>
   			<span><img src="../../img/mineimage/us_ico_11.png" alt="" /></span>
   		</div>
   	</div>
  </div>
</template>

<script>

export default {
  name: 'minecomponent',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.minecomponent{
	height:100%;
	background:#eee;
}
.mine-top{
	height:390px;
	background:url(../../img/mineimage/us_bg.jpg);
	background-size:cover;
	padding-top:79px;
	.mine-top-san{
		position:absolute;
		right:0;
		top:0;
		height:78px;
		width:78px;
		
		img{
			width:100%;
			height:100%;
		}
	}
	.mine-top-photo{
		height:179px;
		width:179px;
		border-radius:50%;	
		padding-top:5px;
		padding-left:5px;
		margin:0 auto;
		background:#fff;
		position:relative;
		
		.photo-mg{
			height:169px;
			width:169px;
			border-radius:50%;
			overflow:hidden;	
		}
		.photo-ug{
			position:absolute;
			left:-23px;
			top:-39px;
			width:130px;
			height:83px;
		}
	}
	.mine-top-name{
		text-align: center;
		color:#fff;
		font-size:24px;
	}
}
.mine-order{
	height:280px;
	background:#fff;
	margin-top:20px;
	padding:0 20px;
	.mine-order-top{
		height:90px;
		display: flex;
		justify-content: space-between;
		border-bottom:2px solid #eee;
		div{
			height:104px;
			display: flex;
			justify-content: space-between;
			line-height:90px;
			font-size:30px;
			span{
				margin-top:10px;
				display: block;
				height:68px;
				width:68px;
			}
		}
		
	}
	.mine-order-bottom{
		margin-top:18px;
		display: flex;
		justify-content:space-around;
		img{
			height:98px;
			width:98px;
		}
		p{
			font-size:30px;
		}
	}
}
.mine-card{
	height:275px;
	background:#fff;
	margin-top:20px;
	padding:0 20px;
	.mine-card-top{
		height:90px;
		display: flex;
		justify-content: space-between;
		border-bottom:2px solid #eee;
		div{
			height:104px;
			display: flex;
			justify-content: space-between;
			line-height:90px;
			font-size:30px;
			span{
				margin-top:10px;
				display: block;
				height:68px;
				width:68px;
			}
		}	
	}
	.mine-card-bottom{
		margin-top:18px;
		display: flex;
		justify-content:space-between;
		div{
			width:250px;
			text-align: center;
			border-right:2px solid #eee;
		}
		div:nth-child(2){
			border:none;
		}
	}
}
.mine-box{
	background:#fff;
	margin-top:20px;
	padding:0 20px;
	height:90px;
	.mine-box-address,.mine-box-help{
		height:90px;
		display: flex;
		justify-content: space-between;
		border-bottom:2px solid #eee;
		span{margin-top:10px;}
		div{
			height:104px;
			display: flex;
			justify-content: space-between;
			line-height:90px;
			font-size:30px;
			span{
				margin-top:10px;
				display: block;
				height:68px;
				width:68px;
			}
		}	
	}
}
</style>