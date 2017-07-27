<template>
  <div class="homebanner">
   <div class="swiper-container" id="homebanner-box">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../img/homeimage/0001.jpg" alt="" /></div>
            <div @click="showDetails" class="swiper-slide"><img src="../../img/homeimage/0002.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="../../img/homeimage/0003.jpg" alt="" /></div>
            <div class="swiper-slide"><img src="../../img/homeimage/0004.jpg" alt="" /></div>
           	
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination homebanner-dian"></div>
        <!-- Add Arrows -->
        <!--<div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>-->
    </div>
    <div class="homelazy">
  		<div class="homelazy-box"><img src="http://ecimg.happigo.com/data/upload/app/adsession/2017/104_11/05539742369428796.jpg" alt="" /></div>
  	</div>
  </div>
  
</template>

<script>
import angel from '../../event'
export default {
  name: 'homebanner',
  data () {
    return {
    
    }
  },
  methods:{
  	showDetails(){
  		angel.$emit('toggleDetails')
  	}
  },
   mounted(){
  	new Swiper('#homebanner-box', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop:true,
        loopAdditionalSlides:0,
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .swiper-container {
        width: 980px;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    .swiper-slide {
    		width:100%;
    		height:520px;
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-pagination>.swiper-pagination-bullet{
    	background:#b6b6b6!important;
    	height:13px!important;
    	width:13px!important;
    	
    }
    .swiper-pagination-bullet-active{
    	background:#f00!important;
    }
  }
  .homelazy{
  	height:299px;
  	width:100%;
  	background:#f5f5f5;
  	.homelazy-box{
  		width:936px;
  		height:273px;
  		margin-left:22px;
  	}
  }
    
</style>


       