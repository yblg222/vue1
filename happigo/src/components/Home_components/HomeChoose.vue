<template>
  <div class="homechoose">
  	<div class="homehc-header">
    		<img src="http://ecimg.happigo.com/data/upload/wapnew/images/index/b_title3.png" alt="" />
    </div>
    <div class="homehc-box">
    	<div class="homehc-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/407/222907/1_main_222907_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			<p>深入肌肤密集养护</p>
	    		<p>韩束巨水光精粹蜜特惠组</p>
	    		<p><span>￥399</span><i>￥499</i></p>
    		</div>	
    	</div>
    	<div class="homehc-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/407/222907/1_main_222907_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			<p>深入肌肤密集养护</p>
	    		<p>韩束巨水光精粹蜜特惠组方法地方地方地方地方</p>
	    		<p><span>￥399</span><i>￥499</i></p>
    		</div>	
    	</div>
    	<div class="homehc-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/407/222907/1_main_222907_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			<p>深入肌肤密集养护</p>
	    		<p>韩束巨水光精粹蜜特惠组</p>
	    		<p><span>￥399</span><i>￥499</i></p>
    		</div>	
    	</div>
    	<div class="homehc-box-list">
    		<div class="box-list-image">
    			<img src="http://ecimg.happigo.com/data/upload/shop/store/goods/1/407/222907/1_main_222907_360.jpg" alt="" />
    		</div>
    		<div class="box-list-txt">
    			<p>深入肌肤密集养护</p>
	    		<p>韩束巨水光精粹蜜特惠组</p>
	    		<p><span>￥399</span><i>￥499</i></p>
    		</div>	
    	</div>
    	
    	
    	
    	
    	
    	
    	
    	
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'homechoose',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.homehc-header{
		height:156px;
		margin-top:26px;
		padding:26px 0;
	}
	.homehc-box{
		display: flex;
		flex-wrap:wrap;
		padding:22px 0 22px 26px;
		.homehc-box-list{
			background:#fff;
			height:736px;
			width:47%;
			margin-right:28px;
			.box-list-txt{
				padding:20px;
				height:268px;
				p{
					height:72px;
				}
				p:nth-child(2){
					height:101px;
					color:#787878;
				}
				p:nth-child(3){
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
</style>
