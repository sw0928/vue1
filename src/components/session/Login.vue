<template>
  <div class="login">
    <div class="login-wrap">
      <div class="avatar">
        <img src="../../assets/img/monkey.png" class="img-circle" alt="">
      </div>
      <form class="col-md-offset-1 col-md-10" @submit.prevent="login">
        <div class="input-group input-group-lg">
          <span class="input-group-addon">
                        <i class="fa fa-user"></i>
                    </span>
          <input name="username" type="text" class="form-control" placeholder="用户名" v-model="user.tc_name">
        </div>
        <div class="input-group input-group-lg">
          <span class="input-group-addon">
                        <i class="fa fa-key"></i>
                    </span>
          <input type="password" class="form-control" placeholder="密码" v-model="user.tc_pass">
        </div>
        <p v-if="loading">正在登录。。。</p>
        <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
        <!-- <router-link to="/home" class="btn btn-lg btn-primary btn-block">登 录</router-link> -->
      </form>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import router from '../../router/index.js'

  export default {
    data () {
      return {
        user: {
          tc_name: '',
          tc_pass: ''
        },
        loading: false
      }
    },

    methods: {
      login () {
        this.loading = true
        var params = new URLSearchParams();
        params.append('tc_name', this.user.tc_name);
        params.append('tc_pass', this.user.tc_pass);
        axios.post('/api/login', params)
          .then(res => {
            // router.push('/home')
            // 登录成功
            const redirect = this.$route.query.redirect || '/home'
            router.push(redirect)
          })
          .catch(err => {
            // 这里因为对方服务器响应的就是 404 登录失败
            // 所以没办法将登录失败的处理写到这里
            // 但是要知道一点：对方的接口有问题
            window.alert('登录失败，用户名或密码不正确')
          })
      }
    }
  }
</script>
<style>
</style>
