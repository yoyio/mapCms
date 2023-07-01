<template>
  <div class="A">
    <div class="A-title">晁陽溫室1</div>
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
              <tr>
                <th scope="row">6</th>
                <td>場域地址</td>
                <td>雲林縣麥寮鄉興華村興華32號</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">能源資訊</h5>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" width="7%"></th>
                  <th scope="col" width="50%"></th>
                  <th scope="col" width="0"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>發電設備類型</td>
                  <td>第三型</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>再生能源類型</td>
                  <td>太陽光電</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>裝置設置位置</td>
                  <td>屋頂</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>總裝置容量(KW)</td>
                  <td>84.24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">農作物資訊</h5>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" width="7%"></th>
                  <th scope="col" width="50%"></th>
                  <th scope="col" width="0"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>種植面積(分地)</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>農作物類型</td>
                  <td>嫩薑</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>預估每株農作產量(公斤)</td>
                  <td>0.6</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>預估總農作產量(噸)</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 溫室氣體盤查資訊 -->
      <div class="col-sm-6" style=" margin-top: 30px;">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">溫室氣體盤查資訊</h5>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" width="7%"></th>
                  <th scope="col" width="50%"></th>
                  <th scope="col" width="0"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>溫室氣體排放量(ISO 14064)</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>減碳量</td>
                  <td>208</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
  margin-bottom: 100px;
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