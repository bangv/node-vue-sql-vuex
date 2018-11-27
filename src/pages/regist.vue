<template>

  <div class="login_wrap">
    <h2 class="butoon test">通过login页面无数次改变的值</h2>
    <div>{{dataTest}}</div>

    <button @click="getAction('我是在regist页面的改变通过action/dispatch改变')">我是在regist页面的改变通过action/dispatch改变</button>
  </div>

</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {userName: 3}
    },
    computed: {
      ...mapState("detail", {
        dataTest: state => state.userName
      }),
    },
    methods: {
      getAction(data) {
        this.$store.dispatch("detail/getDetail", data)//触发action
      },
    }
  }
</script>

<style lang="scss">
  button {
    display: block;
    width: 400px;
    margin: 5px auto;
  }

  input {
    display: inline-block;
    width: 400px;
    margin: 5px auto;

  }
</style>
