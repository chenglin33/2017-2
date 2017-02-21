<template>
  <div id="list">
    <ul>
      <li v-for="(item,index) in list">
        <a @click="getMovieDetail(item.id)">
          <img :src="item.list_img" />
          <div>{{item.info}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'list',
  data () {
    return {
      apiUrl:"/api/listdetail",
      list:[]
    }
  },
  created(){
  	this.lists();
  },
  methods:{
      getMovieDetail(id){
        this.$router.push({ name: 'detail', params: { id: id }})
      },
      lists:function(){
          var _this = this;
          this.$http.get(this.apiUrl).then((response)=>{
              var _list = response.data.data;
              _this.list = _list;
          }, (response)=>{
              alert(response)
          });         
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list{
  padding: 0.1rem;
}
ul li a{
  width: 100%;
  display: -webkit-flex;
  display: flex;
  background-color: #fff;
  margin-top: 0.08rem;
}
ul li img{
  width: 1.42rem;
  height: 1.21rem;
  border: 1px solid #ccc;
}
ul li div{
  -webkit-flex:1;
  flex:1;
}
</style>
