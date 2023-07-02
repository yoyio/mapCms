<template>
  <div class="A">
    <div class="A-title">{{name}}</div>
    <div class="col-sm-12" style="margin-bottom: 30px;">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">場域資訊</h5>
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
                <td>場域地址</td>
                <td>{{address}}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>場域經度座標</td>
                <td>{{longitude}}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>場域緯度座標</td>
                <td>{{latitude}}</td>
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
                  <td>{{EnergiesEquipment}}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>再生能源類型</td>
                  <td>{{EnergiesEnergyType}}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>裝置設置位置</td>
                  <td>{{EnergiesLocation}}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>總裝置容量(KW)</td>
                  <td>{{EnergiesCapacity}}</td>
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
                  <td>{{CropsArea}}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>農作物類型</td>
                  <td>{{CropsCropType}}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>預估每株農作產量(公斤)</td>
                  <td>{{CropsPerOutput}}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>預估總農作產量(噸)</td>
                  <td>{{CropsTotalOutput}}</td>
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
                  <td>{{GasEmissions}}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>減碳量</td>
                  <td>{{GasReduction}}</td>
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

<script>

export default {
  data () {
    return {
      //場域資訊
      name:{},
      longitude:{},//經度座標
      latitude:{},//緯度座標
      address:{},
      //能源資訊
      EnergiesCapacity:{},
      EnergiesEnergyType:{},
      EnergiesEquipment:{},
      EnergiesLocation:{},
      //農作物資訊
      CropsArea:{},
      CropsCropType:{},
      CropsPerOutput:{},
      CropsTotalOutput:{},
      //溫室氣體盤查資訊
      GasEmissions:{},
      GasReduction:{},
    }
  },
  mounted(){
    const id = this.$route.params.id;
    console.log('id',id)
    this.$http.get(`http://13.115.131.45:3001/admin/sites/${id}`)
        .then((res) => {
          console.log(res)
          //場域資訊
          this.name=res.data.site.name
          this.longitude=res.data.site.longitude
          this.latitude=res.data.site.latitude
          this.address=res.data.site.address

          //能源資訊
          this.EnergiesCapacity=res.data.site.Energies.capacity//總裝置容量
          this.EnergiesEnergyType=res.data.site.Energies.energyType //再生能源類型
          this.EnergiesEquipment=res.data.site.Energies.equipment //發電設備類型
          this.EnergiesLocation=res.data.site.Energies.location //發電設備類型

          //農作物資訊
          this.CropsArea=res.data.site.Crops.area//種植面積
          this.CropsCropType=res.data.site.Crops.cropType//農作物類型
          this.CropsPerOutput=res.data.site.Crops.perOutput//預估每株農作產量
          this.CropsTotalOutput=res.data.site.Crops.totalOutput//預估總農作產量

          //溫室氣體盤查資訊
          this.GasEmissions=res.data.site.Gas.emissions//溫室氣體排放量
          this.GasReduction=res.data.site.Gas.reduction//減碳量
        })
        .catch((err) => {
          console.log(err)
        })
  },
  methods: {
  }
}
</script>

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