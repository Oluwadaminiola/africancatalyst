<template>
  <div class="row mx-0">
    <div class="col-12">
      <div class="fundrec">
        <div class="row" v-if="firstStep">
          <div class="col-12 mb-5">
            <div class="d-flex row px-3">
              <h3 class="r-20">Create A Project</h3>
              <div class="ml-3 stepp">1 of 4</div>
            </div>
          </div>
          <div class="col-lg-9 col-xs-12">
            <div class="row">
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Project Overview</b>
                <br />
                <small class="r-12">A brief description on your project</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <textarea name id rows="3" class="form-control px-0"></textarea>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Project Location</b>
                <br />
                <small class="r-12">Select a location where your project is based</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform mb-3">
                  <label>Country</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option v-for="country in countries" :key="country">{{ country }}</option>
                    </select>
                  </div>
                </div>
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
                <b class="r-14">Investment Preference</b>
                <br />
                <small
                  class="r-12"
                >Choose an industry sector your company falls under, multiple choices are allowed</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Investment Preference</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option></option>
                      <option v-for="investment in investments" :key="investment">{{ investment }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Competitive Advantage / Value Proposition</b>
                <br />
                <small class="r-12">
                    Describe how this business differs from competitors 
                </small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <textarea name id rows="5" class="form-control px-0"></textarea>
                </div>
                <p class="text-right l-12">0 / 800</p>
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
              <!-- <div class="col-lg-4"></div>
              <div class="col-lg-4 my-5">
                <button class="btn btn-green px-5">Create Profile</button>
              </div>-->
            </div>
          </div>

          <div class="col-12">
            <p class="text-center">
              <button class="btn btn-green px-5" @click="second">Continue</button>
              <button class="btn btn-clear ml-lg-3 px-5">Cancel</button>
            </p>
          </div>
        </div>
        <div class="row" v-if="secondStep">
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
        </div>
        <div class="success" v-if="success"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstStep: true,
      secondStep: false,
      success: false,
      regions: ["West Africa", "East Africa", "North Africa", "Central Africa", "Southern Africa"],
      industries: ["Extractive Industries", "Renewable Energy", "Power"],
      countries: ["Nigeria", "Ghana", "Benin"],
      investments: ["Core Equity", "Lease Finance", "Lease"]
    };
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