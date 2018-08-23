<template>

  <div class="login_wrap">
    <h2>利用vue状态管理DEMO</h2>
    <input type="text" v-model="detail"><br>
    <button @click="getDetail('点击改变按钮的值')">改变值</button><br>
    <button @click="changeValue">可以利用mapActions里面改变值</button><br>
    <button @click="changeDetail('第三次mapMutations里面改变值')">可以利用mapMutations里面改变值</button>
    <div>
     我是通过别的地方传过的 {{detail}}
    </div>
    <button class="button">
      <router-link to="regist">跳转</router-link>
    </button>

  </div>

</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    data () {
      return {user: 3}
    },
    methods: {
      ...mapMutations(['changeDetail']),//store和html里面的方法必须一致
      ...mapActions({getDetail: 'getDetail'}),
      changeValue () {
        this.getDetail('第二次mapActions里面改变值')
      }
    },
    computed: {
      ...mapGetters({
        detail: 'setDetail',
      })
    }
  }
</script>

<style lang="scss">
  .button {
    color: red;
  }
</style>
