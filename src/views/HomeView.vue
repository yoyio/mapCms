<template>
  <div class="A">
    <div class="col-4" style="margin-bottom: 50px;z-index:-1;">
        <div class="card-body">
          <h5 class="card-title">場域總數量</h5>
          <p class="card-text">{{ arraydata }}</p>
        </div>
    </div>
    <div class="addbnt">
      <RouterLink to="/add" class="about-button"
        ><button type="submit" class="btn btn-success" style="color: #fff;">
          <font-awesome-icon icon="plus" style="margin: 0px 5px" />新建場域
        </button></RouterLink
      >
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" width="7%"></th>
          <th scope="col" width="65%">名稱</th>
          <th scope="col" width="0"></th>
        </tr>
      </thead>
      <tbody v-for="(item, key) in sitesData"
            :key="key">
        <tr>
          <th scope="row">{{key+1}}</th>
          <td>{{item.name}}</td>
          <td>
            <RouterLink :to="`/check/${item.id}`" ><button
              type="button"
              class="btn btn-dark"
              style="margin-right: 10px"
            >
              查看
            </button></RouterLink>
            <RouterLink :to="`/compiler/${item.id}`" ><button
              type="button"
              class="btn btn-info"
              style="margin-right: 10px"
            >
              編輯
            </button></RouterLink>
            <button
              type="button"
              class="btn btn-danger"
              style="margin-right: 10px"
              @click="deleteData(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- footer -->
  <div class="footer" id="footer">
    <div class="footer-logo">
      <p>精準健康研究中心-亞洲大學</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      arraydata:{},
      sitesData:{},
    }
  },
  mounted(){
    this.getData()
  },
  methods: {
    getData(){
      this.$http.get(`http://13.115.131.45:3001/admin/sites`)
        .then((res) => {
          console.log(res)
          //場域總數量
          this.arraydata=res.data.sites.length
          //場域列表
          console.log("sites",res.data.sites)
          this.sitesData=res.data.sites
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteData(item){
      console.log("delete",item.id)
      this.$http.delete(`http://13.115.131.45:3001/admin/sites/${item.id}`)
        .then((res) => {
          console.log(res)
          this.getData()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.A {
  width: 80%;
  margin: 20px auto;
}
.card-text {
  font-size: 28px;
  width: 100%;
  text-align: center;
}
.addbnt {
  margin-bottom: 50px;
}
.card-body{
  padding: 20px;
  border-style: solid;
  border-color: #1e1c1b;
  border-width: 1px;
  border-radius: 0.25rem;
}
/*footer*/
.footer {
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #038686;
  color: #ffffff;
  margin-top: 80px;
}
</style>