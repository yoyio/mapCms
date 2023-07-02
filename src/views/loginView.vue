<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="signin">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" v-model="usedata.username"
              placeholder="name@example.com" required autofocus>
            <label for="username">帳號 </label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" v-model="usedata.password" placeholder="Password"
              required>
            <label for="password">密碼</label>
          </div>
          <button class="btn btn-success w-100 mt-3" style="color: #fff;" type="submit" id="login">
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.h3{
  text-align: center;
  margin-top: 100px;
}
.col-8{
  margin-top: 20px;
  
}
</style>

<script>

export default {
  data () {
    return {
      url: 'https://vue3-course-api.hexschool.io/v2/',
      path: 'qqq-api',
      usedata: {
        username: ' ',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      console.log("555")
      this.$router.push('/')
      this.$http.get(`http://13.115.131.45:3001/admin/sites`)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>