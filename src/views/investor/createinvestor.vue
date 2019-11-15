<template>
  <div class="row mx-0">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">
            <img src="../../../public/img/userpro.svg" alt /> Investor Profile
          </li>
          <li class="breadcrumb-item active" aria-current="page">Create Investor Profile</li>
        </ol>
      </nav>
    </div>
    <div class="col-12">
      <div class="fundrec">
        <div class="row">
          <div class="col-12" v-if="firstform">
            <div class="row">
              <div class="col-12 mb-5">
                <div class="d-flex row">
                  <h3 class="r-20">Create Investor’s Profile</h3>
                  <div class="ml-3 step">1 of 2</div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Company Name</b>
                    <br />
                    <small class="r-12">What is the name of your startup or company</small>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform">
                      <label>Company Name</label>
                      <input
                        type="text"
                        placeholder="Enter company’s name"
                        class="form-control px-0"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Investor Type</b>
                    <br />
                    <small class="r-12">Choose an investor type you are looking for</small>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <p>
                      <input
                        id="checkbox-13"
                        class="checkbox2-custom"
                        name="checkbox-13"
                        type="checkbox"
                      />
                      <label for="checkbox-13" class="checkbox2-custom-label b-15">Private Equity Fund (General Partner)</label>
                    </p>
                    <p>
                      <input
                        id="checkbox-14"
                        class="checkbox2-custom"
                        name="checkbox-14"
                        type="checkbox"
                      />
                      <label for="checkbox-14" class="checkbox2-custom-label b-15">Private Equity Fund (Limited Partner)</label>
                    </p>
                    <p>
                      <input
                        id="checkbox-15"
                        class="checkbox2-custom"
                        name="checkbox-15"
                        type="checkbox"
                      />
                      <label for="checkbox-15" class="checkbox2-custom-label b-15">Direct Investor ( Non-fund Deal by Deal Investor)</label>
                    </p>
                    <p>
                      <input
                        id="checkbox-16"
                        class="checkbox2-custom"
                        name="checkbox-16"
                        type="checkbox"
                      />
                      <label for="checkbox-16" class="checkbox2-custom-label b-15">Third Party Fund Managers (Fund of Funds, Pension Funds)</label>
                    </p>
                    <p>
                      <input
                        id="checkbox-1"
                        class="checkbox2-custom"
                        name="checkbox-1"
                        type="checkbox"
                      />
                      <label for="checkbox-1" class="checkbox2-custom-label b-15">Institutional Investors (Development Finance Institutions, Endowments, Family Offices)</label>
                    </p>
                    <p>
                      <input
                        id="checkbox-2"
                        class="checkbox2-custom"
                        name="checkbox-2"
                        type="checkbox"
                      />
                      <label for="checkbox-2" class="checkbox2-custom-label b-15">Financial Institutions (Senior Debt, Bank Loans, etc)</label>
                    </p>
                    <p>
                      <input
                        id="checkbox-3"
                        class="checkbox2-custom"
                        name="checkbox-3"
                        type="checkbox"
                      />
                      <label for="checkbox-3" class="checkbox2-custom-label b-15">Other</label>
                    </p>
                  </div>
                  
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Describe your Investor Company and its core investment Strategy in Africa</b>
                    <br />
                    <small
                      class="r-12"
                    >In not less than 500 words</small>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform">
                      <textarea rows="5" class="form-control px-0"></textarea>
                    </div> 
                    <div class="text-right r-12">
                      0 / 500
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">List the Current or Past Portfolio Companies </b>
                    <br />
                    <small class="r-12">
                      List the Current or Past Portfolio Companies (and their website urls)
                    </small>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform">
                      <label>Website</label>
                      <input type="text" placeholder="www.company.com" class="form-control px-0" />
                    </div>
                  </div>
                  <div class="col-lg-4"></div>
                  <div class="col-lg-8 my-5">
                    <button class="btn btn-green px-5 mb-3" @click="nextform">Continue</button>
                    <button class="btn btn-clear ml-lg-3 px-5 mb-3">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12" v-if="secondform">
            <div class="row">
              <div class="col-12 mb-5">
                <div class="d-flex row">
                  <h3 class="r-20">Create Investor’s Profile</h3>
                  <div class="ml-3 step">2 of 2</div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Head Quarter Address</b>
                    <br />
                    <small class="r-12">Select a location where your company is based</small>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform mb-3">
                      <label>Address</label>
                      <input
                        type="text"
                        placeholder="961 Oleta Flats Suite 452"
                        class="form-control px-0"
                      />
                    </div>
                    <div class="fundraiserform mb-3">
                      <label>Postal Code</label>
                      <input type="text" placeholder="Enter postal code" class="form-control px-0" />
                    </div>
                    <div class="fundraiserform">
                      <label>Country</label>
                      <div class="fundselect">
                        <country-select
                          v-model="country"
                          class="form-control px-0"
                          :country="country"
                          topCountry="US"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Region of Interest in Africa</b>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform">
                      <label>Region Of Interest</label>
                      <div class="fundselect">
                        <select class="form-control px-0">
                          <option v-for="region in regions" :key="region">{{ region }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Membership of Investment or VC Associations</b>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform">
                      <label>Membership of Investment</label>
                      <div class="fundselect">
                        <select class="form-control px-0">
                          <option
                            v-for="investment in investments"
                            :key="investment"
                          >{{ investment }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Telephone Number</b>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform">
                      <label>Telephone Number</label>
                      <input type="text" placeholder="+234 807 340 4890" class="form-control px-0" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 mb-3">
                    <b class="r-14">Website</b>
                  </div>
                  <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                    <div class="fundraiserform">
                      <label>Website</label>
                      <input type="text" placeholder="www.website.com" class="form-control px-0" />
                    </div>
                  </div>
                  <div class="col-lg-4"></div>
                  <div class="col-lg-8 mb-3">
                    <input type="file" class="form-control profileform p-0" />
                  </div>
                  <div class="col-lg-4"></div>
                  <div class="col-lg-8 my-5">
                    <button class="btn btn-green px-5 mb-3">Create Profile</button>
                    <button class="btn btn-clear ml-lg-3 px-5 mb-3" @click="previousform">Go back</button>
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
<script>
export default {
  data() {
    return {
      country: "",
      region: "",
      firstform: true,
      secondform: false,
      countries: ["Nigeria", "Ghana", "Benin"],
      regions: ["West Africa", "East Africa", "North Africa"],
      industries: ["Extractive Industries", "Renewable Energy", "Power"],
      investments: ["EMPEA", "EMPEA", "EMPEA"]
    };
  },
  methods: {
    nextform() {
      this.firstform = false;
      this.secondform = true;
    },
    previousform() {
      this.firstform = true;
      this.secondform = false;
    }
  }
};
</script>