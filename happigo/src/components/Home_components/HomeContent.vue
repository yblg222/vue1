<template>
  <div class="homecontent">
    
    <home-banner></home-banner>
   	<home-activity></home-activity>
   	<home-choose></home-choose>
    homecontent
  </div>
</template>

<script>
import HomeBanner from './HomeBanner'
import HomeActivity from './HomeActivity'
import HomeChoose from './HomeChoose'
export default {
  name: 'homecontent',
  data () {
    return {
    
    }
  },
  components:{
  	HomeBanner,
  	HomeActivity,
  	HomeChoose
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homecontent{
	background:#F1F1F1;
	flex:1;
	overflow: auto;
}
</style>
