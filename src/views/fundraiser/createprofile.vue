<template>
  <div class="row mx-0">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page"><img src="../../../public/img/company.svg" alt=""> Company Profile</li>
          <li class="breadcrumb-item active" aria-current="page">Create Company Profile</li>
        </ol>
      </nav>
    </div>
    <div class="col-12">
      <div class="fundrec">
        <div class="row">
          <div class="col-12 mb-5">
            <div class="d-flex row px-3">
              <h3 class="r-20">Create Company Profile</h3>
              <!-- <div class="ml-3 step">1 of 2</div> -->
            </div>
          </div>
          <div class="col-lg-9 col-xs-12">
            <div class="row">
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Company Name</b>
                <br />
                <small class="r-12">What is the name of your startup or company</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Company Name</label>
                  <input type="text" placeholder="Enter company’s name" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-5">
                <b class="r-14">Industry Sector</b>
                <br />
                <small
                  class="r-12"
                >Choose an industry sector your company falls under, multiple choices are allowed</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-5">
                <div class="fundraiserform">
                  <label>Industry Sector</label>
                  <div class="fundselect">
                    <multiselect v-model="value" :options="industries" :multiple="true"></multiselect>
                    <!-- <select class="form-control px-0">
                      <option v-for="industry in industries" :key="industry">{{ industry }}</option>
                    </select>-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Describe your company and its core services</b>
                <br />
                <small class="r-12">In not less than 500 words</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <textarea name id rows="5" class="form-control px-0"></textarea>
                </div>
                <p class="text-right l-12">0 / 500</p>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Company Website</b>
                <br />
                <small class="r-12">Your company’s url</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Website</label>
                  <input type="text" placeholder="www.company.com" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Telephone Number</b>
                <br />
                <small class="r-12">Enter a valid telephone number</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Phone Number</label>
                  <input type="text" placeholder="+234 000 000 0000" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Region</b>
                <br />
                <small class="r-12">Select a region where your company is located</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Region</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option v-for="region in regions" :key="region">{{ region }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Competitive Advantage / Value Proposition</b>
                <br />
                <small class="r-12">In not less than 800 words</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <textarea name id rows="5" class="form-control px-0"></textarea>
                </div>
                <p class="text-right l-12">0 / 800</p>
              </div>
              <div class="col-lg-4"></div>
              <div class="col-lg-4 my-5">
                <button class="btn btn-green px-5">Create Profile</button>
              </div>
            </div>
          </div>

          <div class="col-12">
            <p class="text-center">
              <!-- <button class="btn btn-green px-5" @click="second">Continue</button>
              <button class="btn btn-clear ml-lg-3 px-5">Cancel</button>-->
            </p>
          </div>
        </div>
        <!-- <div class="row" v-if="secondStep">
          <div class="col-12 mb-5">
            <div class="d-flex row px-3">
              <h3 class="r-20">Create Company Profile</h3>
              <div class="ml-3 step">2 of 2</div>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-3 mb-3">
                <b class="r-14">Telephone Number</b>
                <br />
                <small class="r-12">Enter a valid telephone number</small>
              </div>
              <div class="col-lg-8 offset-lg-1 mb-3">
                <div class="fundraiserform">
                  <label>Phone Number</label>
                  <input type="text" placeholder="+234 000 000 0000" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <b class="r-14">Region</b>
                <br />
                <small class="r-12">Select a region where your company is located</small>
              </div>
              <div class="col-lg-8 offset-lg-1 mb-3">
                <div class="fundraiserform">
                  <label>Region</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option v-for="region in regions" :key="region">{{ region }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <b class="r-14">Competitive Advantage / Value Proposition</b>
                <br />
                <small class="r-12">In not less than 800 words</small>
              </div>
              <div class="col-lg-8 offset-lg-1 mb-3">
                <div class="fundraiserform">
                  <textarea name id rows="5" class="form-control px-0"></textarea>
                </div>
                <p class="text-right l-12">0 / 800</p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <p class="text-center">
              <button class="btn btn-green px-5">Create Profile</button>
              <button class="btn btn-clear ml-lg-3 px-5" @click="first">Previous Step</button>
            </p>
          </div>
        </div>-->
        <div class="success" v-if="success"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      value: [],
      firstStep: true,
      secondStep: false,
      success: false,
      regions: ["West Africa", "East Africa", "North Africa"],
      industries: ["Extractive Industries", "Renewable Energy", "Power"]
    };
  },
  components: {
    Multiselect
  },
  methods: {
    second() {
      this.firstStep = false;
      this.secondStep = true;
    },
    first() {
      this.firstStep = true;
      this.secondStep = false;
    },
    company() {}
  }
};
</script>