<template>
  <div class="A">
    <div class="A-title">場域資訊</div>
    <div class="row g-3">
      <!-- 公司資訊 -->
      <div class="col-12">
        <label for="inputAddress" class="form-label">場域名稱</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="輸入場域名稱"
          v-model="name"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">場域地址</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="輸入場域地址"
          v-model="address"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">場域經度座標</label>
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="輸入場域經度座標"
          v-model="longitude"
        />
      </div>
      <div class="col-md-6">
        <label for="inputAddress" class="form-label">場域緯度座標</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="輸入場域緯度座標"
          v-model="latitude"
        />
      </div>

      <!-- 能源資訊 -->
      <div class="A-title">能源資訊</div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">發電設備</label>
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="輸入發電設備"
          v-model="equipment"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">再生能源類型</label>
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="輸入再生能源類型"
          v-model="energyType"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">裝置設置位子</label>
        <input class="form-control" id="inputEmail4" placeholder="輸入裝置設置位子" v-model="location"/>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">總裝置容量(KW)</label>
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="輸入總裝置容量(KW)"
          v-model="capacity"
        />
      </div>

      <!-- 農作物資訊 -->
      <div class="A-title">農作物資訊</div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">種植面積(分地)</label>
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="輸入種植面積(分地)"
          v-model="area"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">農作物類型</label>
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="輸入農作物類型"
          v-model="cropType"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">預估每株農作產量(公斤)</label>
        <input class="form-control" id="inputEmail4" placeholder="輸入預估每株農作產量(公斤)" v-model="perOutput" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">預估總農作產量(噸)</label>
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="輸入預估總農作產量(噸)"
          v-model="totalOput"
        />
      </div>

      <!-- 溫室氣體盤查資訊 -->
      <div class="A-title">溫室氣體盤查資訊</div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">溫室氣體排放量(ISO 14064)</label>
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="輸入溫室氣體排放量(ISO 14064)"
          v-model="emissions"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">減碳量</label>
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="輸入減碳量"
          v-model="reduction"
        />
      </div>

      <!-- 按鈕 -->
      <div class="col-12" style="margin-top: 50px;width: 100%;display:flex; justify-content:flex-end;">
        <button type="submit" class="btn btn-success" style="color: #fff;" @click="addData()"  to="/">確認新建</button>
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
      name:"",
      longitude:"",//經度座標
      latitude:"",//緯度座標
      address:"",
      //能源資訊
      equipment:"",
      energyType:"",
      location:"",
      capacity:"",
      //農作物資訊
      area:"",
      cropType:"",
      perOutput:"",
      totalOutput:"",
      //溫室氣體盤查資訊
      emissions:"",
      reduction:"",
    }
  },
  mounted(){
  },
  methods: {
    addData(){
      console.log("add")
      const data={
        //場域資訊
        "name" : this.name,
        "longitude": this.longitude,//經度座標
        "latitude":this.latitude,//緯度座標
        "address": this.address,
        //能源資訊
        "equipment" : this.equipment,
        "energyType": this.energyType,
        "location":this.location,
        "capacity": this.capacity,
        //農作物資訊
        "area" : this.area,
        "cropType": this.cropType,
        "perOutput":this.perOutput,
        "totalOutput": this.totalOutput,
        //溫室氣體盤查資訊
        "emissions":this.emissions,
        "reduction": this.reduction,
      }
      this.$http.post(`http://13.115.131.45:3001/admin/sites`,data)
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
  margin-top: 0px;
}
</style>