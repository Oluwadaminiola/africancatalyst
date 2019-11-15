<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light top-nav bg-light">
      <a class="navbar-brand b-34" href="#">African Catalyst</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item px-3 active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item px-3">
            <router-link to="/login">
              <button class="btn btn-blue px-3">Login</button>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="/login">
              Register
            </a>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>-->
      </div>
    </nav>
    <section class="tophome">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6 pl-lg-5">
            <div class="vh-80 d-flex flex-column justify-content-center">
              <div class="row pt-lg-5">
                <div class="col-12 pt-lg-5">
                  <h4 class="b-34">Welcome to African Catalyst</h4>
                  <p class="r-20">An online platform for fundraisers and investors to meet.</p>
                  <p class="r-14" style="color: #f58634;">Get started as an</p>
                </div>
                <div class="col-lg-6 col-6">
                  <router-link to="/investor">
                    <button class="btn btn-welcome w-100">Investor</button>
                  </router-link>
                </div>
                <div class="col-lg-6 col-6">
                  <router-link to="/fundraiser">
                    <button class="btn btn-welcome w-100">Fundraiser</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-6 d-none d-md-block">
            <div class="d-flex align-items-center justify-content-center">
              <img src="../../public/img/af.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
