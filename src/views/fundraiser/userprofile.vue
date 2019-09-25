<template>
  <div class="row mx-0">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page"><img src="../../../public/img/userpro.svg" alt=""> User Profile</li>
          <li class="breadcrumb-item active" aria-current="page">Create User Profile</li>
        </ol>
      </nav>
    </div>
    <div class="col-12">
      <div class="fundrec">
        <div class="row">
          <div class="col-12 mb-5">
            <h3 class="r-20">Create User Profile</h3>
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Fullname</b>
                <br />
                <small class="r-12">Please Enter First name and last name</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Fullname</label>
                  <input type="text" placeholder="Enter name" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Country</b>
                <br />
                <small class="r-12">Enter country you are based in</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Country</label>
                  <div class="fundselect">
                    <country-select v-model="country" class="form-control px-0" :country="country" topCountry="US" />
                  </div>
                </div>
                <!-- <country-select v-model="country" :country="country" topCountry="US" />
                <region-select v-model="region" :country="country" :region="region" /> -->
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Role</b>
                <br />
                <small class="r-12">What is your role in your registered company</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Role</label>
                  <input
                    type="text"
                    placeholder="Chief Technical Officer"
                    class="form-control px-0"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Description</b>
                <br />
                <small
                  class="r-12"
                >Please enter a description, Note that investors can see whatever description you put up</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <textarea name id rows="5" class="form-control px-0"></textarea>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Enter LinkedIn Profile</b>
                <br />
                <small class="r-12"></small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>LinkedIn Profile</label>
                  <input type="text" placeholder="www.linkedin/jhud" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-4"></div>
              <div class="col-lg-8 mb-3">
                <input type="file" class="form-control profileform p-0">
              </div>
              <div class="col-lg-4"></div>
              <div class="col-lg-8 my-5">
                <button class="btn btn-green px-5">Create Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      country: "",
      region: "",
      countries: ["Nigeria", "Ghana"]
    };
  },
  methods: {}
};
</script>