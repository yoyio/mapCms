<template>
  <div class="A">
    <div class="A-title">基本資料</div>
    <form class="row g-3">
      <!-- 公司資訊 -->
      <div class="col-12">
        <label for="inputAddress" class="form-label">場域名稱</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="輸入場域名稱"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">公司名稱</label>
        <input
          class="form-control"
          id="inputEmail4"
          placeholder="輸入公司名稱"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">負責人</label>
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="輸入負責人"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">電話</label>
        <input class="form-control" id="inputEmail4" placeholder="輸入電話" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">聯絡信箱</label>
        <input
          class="form-control"
          id="inputPassword4"
          placeholder="輸入聯絡信箱"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">公司地址</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="輸入公司地址"
        />
      </div>
    </form>
    <div
      class="col-12"
      style="
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
      "
    >
      <button type="submit" class="btn btn-success" style="color: #fff;">確認編輯</button>
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