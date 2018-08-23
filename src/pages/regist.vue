<template>

  <div class="login_wrap">
    <h2>通过login页面无数次改变的值</h2>
    <div>{{detail}}</div>
  </div>

</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    data () {
      return {userName: 3}
    },
    computed: {
      ...mapGetters({
        detail: 'setDetail',
      })
    }
  }
</script>

<style lang="scss">
</style>
