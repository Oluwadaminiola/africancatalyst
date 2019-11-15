<template>
  <div class="wrapper">
    <aside
      class="menu-sidebar col-xs-12 col-lg-2 px-0 position-fixed shadow d-none d-lg-block pt-5"
    >
      <ul class="nav sidemenu mt-5">
        <li class="pl-lg-3 pl-md-1 nav-item">
          <small class="nav-link menu">Menu</small>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/investor/investorprofile' || $route.path == '/investor/createinvestor' || $route.path == '/investor/changepassword'}"
        >
          <router-link to="/investor/investorprofile" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/dash.svg" alt />
            </span>
            <span class>Investor's Profile</span>
          </router-link>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/investor/deals' || $route.path == '/investor/createdealrequest' || $route.path == '/investor/dealrequest' || $route.path == '/investor/dealsprofile'}"
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
            <span>Deals</span>
            <i class="fas fa-angle-right float-right js-rotate-if-collapsed mt-1"></i>
          </a>
          <div class="collapse" id="repo">
            <ul class="nav flex-column submenu">
              <li class="pl-4 nav-item">
                <router-link
                  to="/investor/createdealrequest"
                  class="pl-4 nav-link"
                >Create Deal Request</router-link>
              </li>
              <li class="pl-4 nav-item">
                <router-link to="/investor/dealrequest" class="pl-4 nav-link">Deal Requests</router-link>
              </li>
              <li class="pl-4 nav-item">
                <router-link to="/investor/deals" class="pl-4 nav-link">Booked Deals</router-link>
              </li>
            </ul>
          </div>
        </li>
        <!-- <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/fundraiser/userprofile'}"
        >
          <router-link to="/fundraiser/userprofile" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/project.svg" />
            </span>
            <span>Invitation</span>
          </router-link>
        </li>-->
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/investor/userprofile'}"
        >
          <router-link to="/investor/userprofile" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/billing.svg" />
            </span>
            <span>User Profile</span>
          </router-link>
        </li>
        <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/investor/messages'}"
        >
          <router-link to="/investor/messages" class="nav-link d-flex py-3">
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
          :class="{'active': $route.path == '/investor/downloads'}"
        >
          <router-link to="/investor/downloads" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/downloads.svg" alt />
            </span>
            <span>Downloads</span>
          </router-link>
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
              <li class="pl-lg-3 pl-md-1 nav-item">
                <small class="nav-link menu">Menu</small>
              </li>
              <li
                class="pl-lg-3 pl-md-1 nav-item"
                :class="{'active': $route.path == '/investor/investorprofile' || $route.path == '/investor/createinvestor'}"
              >
                <router-link to="/investor/investorprofile" class="nav-link py-3">
                  <span class="mr-3">
                    <img width="20px" src="../../public/img/dash.svg" alt />
                  </span>
                  <span class>Investor's Profile</span>
                </router-link>
              </li>
              <li
                class="pl-lg-3 pl-md-1 nav-item"
                :class="{'active': $route.path == '/investor/deals' || $route.path == '/investor/createdealrequest' || $route.path == '/investor/dealrequest' || $route.path == '/investor/dealsprofile'}"
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
                  <span>Deals</span>
                  <i class="fas fa-angle-right float-right js-rotate-if-collapsed mt-1"></i>
                </a>
                <div class="collapse" id="repo">
                  <ul class="nav flex-column submenu">
                    <li class="pl-4 nav-item">
                      <router-link
                        to="/investor/createdealrequest"
                        class="pl-4 nav-link"
                      >Create Deal Request</router-link>
                    </li>
                    <li class="pl-4 nav-item">
                      <router-link to="/investor/dealrequest" class="pl-4 nav-link">Deal Requests</router-link>
                    </li>
                    <li class="pl-4 nav-item">
                      <router-link to="/investor/deals" class="pl-4 nav-link">Booked Deals</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- <li
          class="pl-lg-3 pl-md-1 nav-item"
          :class="{'active': $route.path == '/fundraiser/userprofile'}"
        >
          <router-link to="/fundraiser/userprofile" class="nav-link py-3">
            <span class="mr-3">
              <img width="20px" src="../../public/img/project.svg" />
            </span>
            <span>Invitation</span>
          </router-link>
              </li>-->
              <li
                class="pl-lg-3 pl-md-1 nav-item"
                :class="{'active': $route.path == '/investor/userprofile'}"
              >
                <router-link to="/investor/userprofile" class="nav-link py-3">
                  <span class="mr-3">
                    <img width="20px" src="../../public/img/billing.svg" />
                  </span>
                  <span>User Profile</span>
                </router-link>
              </li>
              <li
                class="pl-lg-3 pl-md-1 nav-item"
                :class="{'active': $route.path == '/investor/messages'}"
              >
                <router-link to="/investor/messages" class="nav-link d-flex py-3">
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
      <div id="content">
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