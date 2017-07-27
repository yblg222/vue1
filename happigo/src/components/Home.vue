<template>
  <div class="home">
    <home-header></home-header>
    <home-content></home-content>
    <home-search v-if="isSearchShow"></home-search>
    <home-banner-details v-if="isDetailsShow"></home-banner-details>
  </div>
</template>

<script>
import HomeHeader from './Home_components/HomeHeader'
import HomeContent from './Home_components/HomeContent'
import HomeSearch from './Home_components/HomeSearch'
import HomeBannerDetails from './Home_components/HomeBannerDetails'
import angel from '../event'
export default {
  name: 'home',
  data () {
    return {
    	isSearchShow:false,
    	isDetailsShow:false
    }
  },
  mounted(){
  	var that=this;
  	angel.$on("toggleSearch",function(){
  		that.isSearchShow=!that.isSearchShow
  	});
  	angel.$on("toggleDetails",function(){
  		that.isDetailsShow=!that.isDetailsShow
  	})
  },
  components:{
		HomeHeader,
		HomeContent,
		HomeSearch,
		HomeBannerDetails
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
	flex:1;
	display: flex;
	flex-direction: column;
	position:relative;
	
	
}
</style>
