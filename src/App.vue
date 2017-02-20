<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import setREM from './script/util';
export default {
  name: 'app',
  components:{
  	setREM
  }
}
</script>

<style lang="sass">
 @import "/style/base.scss";
</style>
