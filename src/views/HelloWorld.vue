<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello</h2>
  </div>
</template>

<script>
import {mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      mmm:'asdfjk'
    }
  },
  computed:{
    ...mapState(['msg'])
  },
  methods:{

  },
  mounted(){
    this.$http.postRequest({
      type:'GetContactList'
    }).then(res =>{
      
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
