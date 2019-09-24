<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-7 px-0 d-none d-md-block">
        <div class="login">
          <div class="row">
            <div class="col-12 catalyst">
              <h2 class="o-40">The African Catalyst</h2>
              <p class="w-20">
                Connecting pools of blended investment capital with Africa's Mid-Market Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 px-0">
        <div class="login-container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1 col-sm-12 m-auto">
              <div class="row">
                <div class="col-12">
                  <h4 class="b-34">Welcome back</h4>
                  <p class="p-16">Enter your details to get back on track</p>
                </div>
                <div class="col-6">
                  <button class="btn btn-login w-100">
                    <img src="../../public/img/google.png" height="20px" alt /> Login with Google
                  </button>
                </div>
                <div class="col-6">
                  <button class="btn btn-login w-100">
                    <img src="../../public/img/linkedin.svg" height="20px" alt /> Login with LinkedIn
                  </button>
                </div>
                <div class="col-12 mt-5">
                  <div class="login-form mb-4">
                    <label for>Email Address</label>
                    <input type="email" />
                  </div>
                  <div class="login-form">
                    <label for>Password</label>
                    <input type="password" />
                  </div>
                </div>
                <div class="col-12 mb-5">
                  <router-link to="forgot-password" class="b-15">I forgot my password</router-link>
                </div>
                <div class="col-lg-4">
                  <button class="btn btn-orange w-100">LOGIN</button>
                </div>
                <div class="col-lg-8 pt-2">
                  <p class="b-15">
                    You don’t have an Account ?
                    <router-link to="/register" class="b-15" style="color: #00a6a6; ">Register</router-link>
                  </p>
                </div>
                <!-- <div class="col-lg-3 input-effect">
                  <input class="effect-21" type="text" placeholder />
                  <label>First Name</label>
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div> -->
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
.effect-21 {
  border: 1px solid #ccc;
  padding: 7px 14px;
  transition: 0.4s;
  background: transparent;
}
.effect-21 ~ .focus-border:before,
.effect-21 ~ .focus-border:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: #3399ff;
  transition: 0.2s;
  transition-delay: 0.2s;
}
.effect-21 ~ .focus-border:after {
  top: auto;
  bottom: 0;
  right: auto;
  left: 0;
  transition-delay: 0.6s;
}
.effect-21 ~ .focus-border i:before,
.effect-21 ~ .focus-border i:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 0;
  background-color: #3399ff;
  transition: 0.2s;
}
.effect-21 ~ .focus-border i:after {
  left: auto;
  right: 0;
  top: auto;
  bottom: 0;
  transition-delay: 0.4s;
}
.effect-21:focus ~ .focus-border:before,
.effect-21:focus ~ .focus-border:after,
.has-content.effect-21 ~ .focus-border:before,
.has-content.effect-21 ~ .focus-border:after {
  width: 100%;
  transition: 0.2s;
  transition-delay: 0.6s;
}
.effect-21:focus ~ .focus-border:after,
.has-content.effect-21 ~ .focus-border:after {
  transition-delay: 0.2s;
}
.effect-21:focus ~ .focus-border i:before,
.effect-21:focus ~ .focus-border i:after,
.has-content.effect-21 ~ .focus-border i:before,
.has-content.effect-21 ~ .focus-border i:after {
  height: 100%;
  transition: 0.2s;
}
.effect-21:focus ~ .focus-border i:after,
.has-conten.effect-21 ~ .focus-border i:after {
  transition-delay: 0.4s;
}
.effect-21 ~ label {
  position: absolute;
  left: 14px;
  width: 100%;
  top: 10px;
  color: #aaa;
  transition: 0.3s;
  z-index: -1;
  letter-spacing: 0.5px;
}
.effect-21:focus ~ label,
.has-content.effect-21 ~ label {
  top: -18px;
  left: 0;
  font-size: 12px;
  color: #3399ff;
  transition: 0.3s;
}
</style>