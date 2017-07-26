<template>
  <div class="home">
    <home-header></home-header>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeHeader from './Home_components/HomeHeader'
import HomeContent from './Home_components/HomeContent'
export default {
  name: 'home',
  data () {
    return {
    
    }
  },
  components:{
  	HomeHeader,
  	HomeContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
	flex:1;
	display: flex;
	flex-direction: column;

	
	
}
</style>
