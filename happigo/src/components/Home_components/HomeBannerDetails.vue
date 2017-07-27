<template>
  <div class="homebannerdetails">
    <div class="hbd-top">
    	<div class="hbd-top-left">
    		<img src="../../img/homeimage/ico_fh.png" alt="" />
    	</div>
    	<div class="hbd-top-conter">红爆美食圈今夏超人气</div>
    	<div class="hbd-top-right">
    		<img src="../../img/homeimage/112233f.png" alt="" />	
    	</div>
    </div>
    <div class="hbd-main-image">
    	<img src="http://ecimg.happigo.com/data/upload/app/operate2/2017/6240/05537072040115622.jpg" alt="" />
    </div>
    <div class="hbd-main-nav">
    	<div>仅显示有货<span><img src="../../img/homeimage/tick_gray.png" alt="" /></span></div>
    	<div>销量<span><img src="../../img/homeimage/dico_gray.png" alt="" /></span></div>
    	<div>价格<span><img src="../../img/homeimage/def.png" alt="" /></span></div>
    	<div>共有<i>99</i>件商品</div>
    </div>
    <div class="hbd-main-box">
    	<div class="hbd-main-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/27/223027/1_main_223027_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			
	    		<p>【搭配颜高潮流梅森杯】美国奥士达Oster Ball jar搅拌器双杯600mL(红色/白色/绿色 可选)</p>
	    		<p><span>￥399</span><i>￥418</i></p>
    		</div>	
    	</div>
    	<div class="hbd-main-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/27/223027/1_main_223027_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			
	    		<p>韩束巨水光精粹蜜特惠组</p>
	    		<p><span>￥399</span><i>￥418</i></p>
    		</div>	
    	</div>
    	<div class="hbd-main-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/27/223027/1_main_223027_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			
	    		<p>韩束巨水光精粹蜜特惠组</p>
	    		<p><span>￥399</span><i>￥418</i></p>
    		</div>	
    	</div>
    	<div class="hbd-main-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/27/223027/1_main_223027_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			
	    		<p>韩束巨水光精粹蜜特惠组</p>
	    		<p><span>￥399</span><i>￥418</i></p>
    		</div>	
    	</div>

    </div>
    <div class="hbd-return">
    	<img src="../../img/homeimage/toTop.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'homebannerdetails',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homebannerdetails{
	background:#eeeeee;
	height:100%;width:100%;
	position:absolute;
	left:0;top:0;
	z-index:1000;
}
.hbd-top{
	height:104px;
	background:#fff;
	border-bottom:2px solid #eee;
	display: flex;
	.hbd-top-left{
		margin-top:13px;
		height:78px;
		width:78px;
	}
	.hbd-top-conter{
		flex:1;
		text-align: center;
		line-height: 104px;
		font-size:42px;
	}
	.hbd-top-right{
		margin-top:13px;
		height:78px;
		width:78px;
	}
}
.hbd-main-nav{
	background:#fff;
	display: flex;
	height:104px;
	div{
		margin:32px 0;
		padding:0 52px;
		width:auto;
		border-right:2px solid #777;
		color:#777;
		line-height:38px;
		font-size:32px;
		span{
			display: block;
			float:right;
			margin-left:2px;
			margin-top:12px;
			height:26px;
			
		}
		i{
			font-style:normal;
			color:#c41f3a;
		}
	}
	div:nth-child(4){
		border:none;
	}
}
.hbd-main-box{
		display: flex;
		flex-wrap:wrap;
		padding:22px 0 22px 26px;
		.hbd-main-box-list{
			background:#fff;
			height:736px;
			width:47%;
			margin-right:28px;
			margin-bottom:20px;
			.box-list-txt{
				padding:20px;
				height:268px;
				p{
					height:72px;
					color:#323232;
				}
				p:nth-child(1){
					height:101px;
					color:#323232;
					font-size:32px;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: wrap;
				}
				p:nth-child(2){
					line-height:72px;
					span{
						color:#94193f;
					}
					i{
						margin-left:20px;
						color:#959595;
						font-style:normal;
						text-decoration: line-through;
					}
					
				}
			}
		}
	}
.hbd-return{
	height:104px;
	width:104px;
	position:fixed;
	left:87%;
	bottom:1%;
	background:#000000;
	border-radius:50%;
	opacity:0.7;
}
</style>























































