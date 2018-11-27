<template>

  <div class="login_wrap">
    <h2>利用vue状态管理DEMO</h2>
    <input type="text" v-model="dataTest"><br>
    <button @click="getDetail('通过....action改变')">通过...mapActions改变</button>
    <button @click="getAction('通过action/dispatch改变')">通过action/dispatch改变</button>
    <button @click="getMutations('通过mutations/commit改变')">通过mutations/commit改变</button>
    <br>
    <button @click="changeValue('第二次mapActions里面改变值')">可以利用mapActions里面改变值</button>
    <br>
    <button @click="changeDetail('第三次mapMutations里面改变值 store方法和html方法一样')">可以利用mapMutations里面改变值</button>
    <div>

       {{dataTest}}
    </div>
    <button class="button">
      <router-link to="regist">跳转</router-link>
    </button>

  </div>

</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {user: 3}
    },
    methods: {
      ...mapMutations('detail',['changeDetail']),//store和html里面的方法必须一致
      // ...mapActions({getTest: 'getDetail'}),
      ...mapActions('detail',['getDetail']),
      getAction(data){
        this.$store.dispatch("detail/getDetail",data)//触发action
      },
      getMutations(data){
        this.$store.commit("detail/changeDetail",data)//触发mapmutations
      },
      changeValue(data) {
        // this.getAction(data)
        this.getDetail(data)
      }
    },
    computed: {
      dataTest(){
        return this.$store.getters["detail/gettersDetail"]
      },
      ...mapState("detail",{
        dataTest: state => state.userName
      }),



      // dataTest:function() {
      //   // return this.$store.getters["detail/userName"]
      //   return this.$store.state.detail.userName
      // }
    }
  }
</script>

<style lang="scss">
  button {
    display: block;
    width: 400px;
    margin: 5px auto;
  }
  input{
    display: inline-block;
    width: 400px;
    margin: 5px auto;
  }
</style>
