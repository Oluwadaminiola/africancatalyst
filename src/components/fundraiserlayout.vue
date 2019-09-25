<template>
  <div class="wrapper">
    <aside
      class="menu-sidebar col-xs-12 col-lg-2 px-0 position-fixed shadow d-none d-lg-block pt-5"
    >
      <ul class="nav sidemenu mt-5">
        <li class="pl-lg-3 pl-md-1 nav-item">
          <small class="nav-link menu">Menu</small>
        </li>
        <li class="pl-lg-3 pl-md-1 nav-item" :class="{'active': $route.path == '/fundraiser/'}">
          <router-link to="/fundraiser/" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/dash.svg" alt />
            </span>
            <span class>Company Profile</span>
          </router-link>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/fundraiser/createprofile' || $route.path == '/fundraiser/projectlisting'}"
        >
          <a
            class="nav-link py-3"
            href="#repo"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="repo"
          >
            <span class="mr-3">
              <img width="20px" src="../../public/img/incidence.svg" alt />
            </span>
            <span>Projects</span>
            <i class="fas fa-angle-right float-right js-rotate-if-collapsed mt-1"></i>
          </a>
          <div class="collapse" id="repo">
            <ul class="nav flex-column submenu">
              <li class="pl-4 nav-item">
                <router-link to="/fundraiser/createproject" class="pl-4 nav-link">Create Projects</router-link>
              </li>
              <li class="pl-4 nav-item">
                <router-link to="/fundraiser/projectlisting" class="pl-4 nav-link">Project Pipeline</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/fundraiser/userprofile'}"
        >
          <router-link to="/fundraiser/userprofile" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/project.svg" />
            </span>
            <span>User Profile</span>
          </router-link>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/fundraiser/billing'}"
        >
          <router-link to="/fundraiser/billing" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/billing.svg" />
            </span>
            <span>Billing</span>
          </router-link>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/fundraiser/messages'}"
        >
          <router-link to="/fundraiser/messages" class="nav-link d-flex py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/messages.svg" alt />
            </span>
            <span>Messages</span>
            <span class="ml-auto">
              <p class="notific">12</p>
            </span>
          </router-link>
        </li>
      </ul>
      <ul class="sidemenu nav mt-5">
        <li class="pl-lg-3 pl-md-1 nav-item">
          <small class="nav-link menu">Tools</small>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/fundraiser/downloads'}"
        >
          <router-link to="/fundraiser/downloads" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/downloads.svg" alt />
            </span>
            <span>Downloads</span>
          </router-link>
        </li>
        <li class="nav-item px-4 mt-5">
          <div class="comprofile">
            <p class="w-14">Company Profile</p>
            <div class="progress" style="height: 5px;">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <small class="w-12">50% Complete</small>
          </div>
        </li>
      </ul>
    </aside>
    <main class="main col-lg-10 col-xs-12 offset-lg-2 col-md-12 px-0">
      <header class="main-head sticky-top py-lg-2">
        <nav class="navbar navbar-light">
          <div class="navbar-toggle d-inline">
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              id="spin"
              @click="openSide"
            >
              <span class="navbar-toggle-bar bar1"></span>
              <span class="navbar-toggle-bar bar2"></span>
              <span class="navbar-toggle-bar bar3"></span>
            </button>
          </div>
        </nav>
        <nav>
          <div
            class="collapse navbar-collapse w-100 d-lg-none"
            style="margin-top: +10px;"
            id="navbarSupportedContent"
          >
            <ul class="nav mobmenu">
              <li class="pl-3 nav-item">
                <small class="nav-link menu">Menu</small>
              </li>
              <li class="pl-3 nav-item">
                <router-link to="/fundraiser/" class="nav-link">
                  <span class="mr-3">
                    <img width="20px" src="../../public/img/dash.svg" alt />
                  </span>
                  <span>Company Profile</span>
                </router-link>
              </li>
              <li class="pl-3 nav-item">
                <a
                  class="nav-link"
                  href="#repo"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="repo"
                >
                  <span class="mr-3">
                    <img width="20px" src="../../public/img/incidence.svg" alt />
                  </span>
                  <span>Projects</span>
                  <i class="fas fa-angle-right float-right js-rotate-if-collapsed mt-1"></i>
                </a>
                <div class="collapse" id="repo">
                  <ul class="nav flex-column submenu">
                    <li class="pl-4 nav-item">
                      <a class="pl-4 nav-link">Create Projects</a>
                    </li>
                    <li class="pl-4 nav-item">
                      <a class="pl-4 nav-link">Project Pipeline</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="pl-3 nav-item">
                <router-link to="/fundraiser/" class="nav-link">
                  <span class="mr-3">
                    <img width="20px" src="../../public/img/project.svg" alt />
                  </span>
                  <span>User Profile</span>
                </router-link>
              </li>
              <li class="pl-3 nav-item">
                <router-link to="/fundraiser/" class="nav-link">
                  <span class="mr-3">
                    <img width="20px" src="../../public/img/billing.svg" alt />
                  </span>
                  <span>Billing</span>
                </router-link>
              </li>
              <li class="pl-3 nav-item">
                <router-link to="/fundraiser/" class="nav-link d-flex">
                  <span class="mr-3">
                    <img width="20px" src="../../public/img/messages.svg" alt />
                  </span>
                  <span>Messages</span>
                  <span class="ml-auto">
                    <p class="notific">12</p>
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div id="content" class="container-fluid pt-4">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
export default {
  methods: {
    openSide() {
      $("span.bar1,span.bar2,span.bar3").toggleClass("change");
      $("aside.menu-sidebar").toggleClass("toggleinout");
      $("main")
        .toggleClass("col-lg-10 offset-lg-2 ")
        .toggleClass(
          "col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0"
        );
      $("div#footerr")
        .toggleClass("col-lg-10 offset-lg-2 ")
        .toggleClass(
          "col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0"
        );
    }
  }
};
</script>