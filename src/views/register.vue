<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 px-0 d-none d-md-block">
        <div class="login"></div>
      </div>
      <div class="col-lg-6 px-0">
        <div class="login-container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="row">
                <div class="col-12">
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
                <div class="col-lg-12 mt-3">
                  <div class="login-form mb-2">
                    <label for>Firstname</label>
                    <input type="text" />
                  </div>
                  <div class="login-form mb-2">
                    <label for>Lastname</label>
                    <input type="text" />
                  </div>
                  <div class="login-form mb-2">
                    <label for>Email Address</label>
                    <input type="email" />
                  </div>
                </div>
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
                <div class="col-lg-12">
                  <div class="login-form">
                    <label for>Password</label>
                    <input type="password" />
                  </div>
                </div>
                <div class="col-12 mb-5">
                  <a href="#" class="b-15">I forgot my password</a>
                </div>
                <div class="col-lg-4">
                  <button class="btn btn-orange w-100">LOGIN</button>
                </div>
                <div class="col-lg-8 pt-2">
                  <p class="b-15">
                    You don’t have an Account ?
                    <a
                      href="#"
                      class="b-15"
                      style="color: #00a6a6; "
                    >Register</a>
                  </p>
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
h4.b-34 {
  margin-left: -6px;
}
</style>