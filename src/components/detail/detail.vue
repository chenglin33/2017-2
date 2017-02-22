<template>
  <div id="detail">
      <img :src='qdetail.list_img' />     
      <div>{{qdetail.info}}</div>    
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      apiUrl:'/api/detail/',
      qdetail: {},
      everlists:[]
    }
  },
  mounted: function(){
    this.lists();
  },
  computed:{
    aid:function(){
      return this.$route.params.id//与路由里path: '/detail/:id'对应
    }
  },
  methods:{
      lists:function(){
          var _this = this;
          this.$http.get(this.apiUrl+this.aid).then((res) => {
            /*for(var i=0;i < res.data.data.length;i++){
              if(this.aid==res.data.data[i].id){
                _this.qdetail = res.data.data[i];
              }          
            }*/
            _this.qdetail = res.data.data
            //console.log(_this.qdetail = res.data.data);
          }, (error) =>{
            console.log(error);
          });


      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#detail{
  padding: 0.1rem;
}

</style>
