<template>
  <div class="container-fluid" >
    <div class="row position-fixed">
      <div class="col-lg-7 px-0 d-none d-md-block">
        <div class="login ">
          <div class="row">
            <div class="col-12 catalyst">
              <h2 class="o-40">The African Catalyst</h2>
              <p
                class="w-20"
              >Connecting pools of blended investment capital with Africa's Mid-Market Opportunities</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 py-5 px-0" style="overflow-y: auto; overflow-x: hidden;">
        <div id="reg">
          <div class="login-container">
            <div class="row">
              <div class="col-lg-10 m-auto">
                <div class="row">
                  <div class="col-12 mb-5">
                    <h4 class="b-34">Nice to have you here</h4>
                    <p class="p-16">Just a few steps to get you started</p>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-login w-100">
                      <img src="../../public/img/google.png" height="20px" alt /> Sign up with Google
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-login w-100">
                      <img src="../../public/img/linkedin.svg" height="20px" alt /> Sign up with LinkedIn
                    </button>
                  </div>
                  <div class="col-lg-12 mt-5">
                    <div class="login-form mb-3">
                      <label for>Firstname</label>
                      <input type="text" />
                    </div>
                    <div class="login-form mb-3">
                      <label for>Lastname</label>
                      <input type="text" />
                    </div>
                    <div class="login-form mb-3">
                      <label for>Email Address</label>
                      <input type="email" />
                    </div>
                    <div class="login-form mb-3">
                      <label for>Phone Number</label>
                      <input type="tel" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="login-form">
                      <label >Select User Type</label>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div id="checkboxes">
                      <input type="checkbox" class="usertype" id="r1" />
                      <label for="r1" class="atype">
                        <div class="d-flex">
                          <div class="check"></div>
                          <p class="b-15 pl-3">Fund Raiser</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div id="checkboxes">
                      <input type="checkbox" class="usertype" id="r2" />
                      <label for="r2" class="atype">
                        <div class="d-flex">
                          <div class="check"></div>
                          <p class="b-15 ml-3">Investor</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <div class="login-form">
                      <label for>Password</label>
                      <input type="password" />
                    </div>
                  </div>
                  <div class="col-12 mb-5">
                    <input id="checkbox-1" class="checkbox1-custom" name="checkbox-1" type="checkbox" />
                    <label
                      for="checkbox-1"
                      class="checkbox1-custom-label b-15"
                    >I accept the terms and conditions</label>
                  </div>
                  <div class="col-lg-5 mb-5">
                    <button class="btn btn-orange w-100">REGISTER</button>
                  </div>
                  <div class="col-lg-7 mb-5 pt-2">
                    <p class="b-15">
                      Have an Account ?
                      <router-link
                        to="/login"
                        class="b-15"
                        style="color: #00a6a6; "
                      >Login</router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* h4.b-34 {
  margin-left: -6px;
} */
</style>
<script>
export default {
  mounted(){
    $('.usertype').on('change', function() {
		    $('.usertype').not(this).prop('checked', false);  
		});
  }
}
</script>