<template>
  <div class="A">
    <div class="A-title">基本資料</div>
    <div class="col-sm-12" style="margin-bottom: 30px;">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">公司資訊</h5>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col" width="10%"></th>
                <th scope="col" width="20%"></th>
                <th scope="col" width="0"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>公司名稱</td>
                <td>晁陽綠能園區</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>負責人</td>
                <td>王曉明</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>電話</td>
                <td>056938238</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>聯絡信箱</td>
                <td>abc123@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>公司地址</td>
                <td>雲林縣麥寮鄉興華村興華32號</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-12" style="margin-top: 50px;width: 100%;display:flex; justify-content:flex-end;">
        <RouterLink to="/edit"><button type="submit" class="btn btn-success" style="color: #fff;">編輯</button></RouterLink>
      </div>
  </div>
  <!-- footer -->
  <div class="footer" id="footer">
    <div class="footer-logo">
      <p>精準健康研究中心-亞洲大學</p>
    </div>
  </div>
</template>

<style scoped>
.A {
  width: 80%;
  margin: 0px auto;
  height: 85vh;
}
.A-title {
  text-align: center;
  padding: 30px 0px;
  font-size: 24px;
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