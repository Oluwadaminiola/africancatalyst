<template>
  <div class="row mx-0">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">
            <img src="../../../public/img/company.svg" /> Deals
          </li>
          <li class="breadcrumb-item active" aria-current="page">Create Deal Request</li>
        </ol>
      </nav>
    </div>
    <div class="col-12">
      <div class="fundrec">
        <div class="row">
          <div class="col-lg-12 col-xs-12" v-if="firstdeal">
            <div class="row">
              <div class="col-12 mb-5">
                <div class="d-flex row">
                  <h3 class="r-20">Deal Request Form</h3>
                  <div class="ml-3 step">1 of 2</div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 mb-3">
                <b class="r-14">Deal Request Name</b>
                <br />
                <small class="r-12">Select a location where your company is based</small>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Deal Request Name</label>
                  <input type="text" placeholder="Enter a name" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3"></div>
              <div class="col-lg-2 col-md-4 mb-5">
                <b class="r-14">Deal Request Return Objective</b>
                <br />
                <small class="r-12">Select a location where your company is based</small>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-8 mb-5">
                <div class="fundraiserform">
                  <label>Return Objective</label>
                  <input type="text" placeholder="Enter an objective" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3"></div>
              <div class="col-lg-2 col-md-4 mb-5">
                <b class="r-14">Preferred Sector</b>
                <br />
                <small class="r-12">Choose an sector you are looking to invest in</small>
              </div>
              <div class="col-lg-9 offset-lg-1 col-md-8 mb-5">
                <p>
                  <input id="checkbox-1" class="checkbox2-custom" name="checkbox-1" type="checkbox" />
                  <label
                    for="checkbox-1"
                    class="checkbox2-custom-label b-15"
                  >Extractive Industries (Exploration , Extraction & Processing of Minerals, Oil and Natural Gas)</label>
                </p>
                <p>
                  <input id="checkbox-2" class="checkbox2-custom" name="checkbox-2" type="checkbox" />
                  <label
                    for="checkbox-2"
                    class="checkbox2-custom-label b-15"
                  >Industrial Agriculture (Mechanized Growing, Harvesting, and processing of food)</label>
                </p>
                <p>
                  <input id="checkbox-3" class="checkbox2-custom" name="checkbox-3" type="checkbox" />
                  <label
                    for="checkbox-3"
                    class="checkbox2-custom-label b-15"
                  >Renewable Energy (Solar, Wind, Geothermal or Hydroelectric energy sources)</label>
                </p>
                <p>
                  <input id="checkbox-4" class="checkbox2-custom" name="checkbox-4" type="checkbox" />
                  <label
                    for="checkbox-4"
                    class="checkbox2-custom-label b-15"
                  >Technology, Media & Telecoms (Fintech, Media,TV, Cloud, broadband and Wireless infrastructure)</label>
                </p>
                <p>
                  <input id="checkbox-5" class="checkbox2-custom" name="checkbox-5" type="checkbox" />
                  <label
                    for="checkbox-5"
                    class="checkbox2-custom-label b-15"
                  >Ports, Ships & Marine (Ports, Terminals, Ships, Support Vessels, Marine Logistics)</label>
                </p>
                <p>
                  <input id="checkbox-6" class="checkbox2-custom" name="checkbox-6" type="checkbox" />
                  <label
                    for="checkbox-6"
                    class="checkbox2-custom-label b-15"
                  >Healthcare Value Chain (HMOs, Medical Technology, Hospitals, Diagnostic Centres and Drug Manufacturers)</label>
                </p>
                <p>
                  <input id="checkbox-7" class="checkbox2-custom" name="checkbox-7" type="checkbox" />
                  <label for="checkbox-7" class="checkbox2-custom-label b-15">Others</label>
                </p>
              </div>
              <div class="col-lg-2 col-md-4 mb-5">
                <b class="r-14">Investment Type Preference</b>
                <br />
                <small class="r-12">Choose a maximum of 3</small>
              </div>
              <div class="col-lg-9 offset-lg-1 col-md-8 mb-5">
                <p>
                  <input id="checkbox-8" class="checkbox2-custom" name="checkbox-8" type="checkbox" />
                  <label
                    for="checkbox-8"
                    class="checkbox2-custom-label b-15"
                  >Seed Capital/Development Partner</label>
                </p>
                <p>
                  <input id="checkbox-9" class="checkbox2-custom" name="checkbox-9" type="checkbox" />
                  <label for="checkbox-9" class="checkbox2-custom-label b-15">Core Equity</label>
                </p>
                <p>
                  <input
                    id="checkbox-10"
                    class="checkbox2-custom"
                    name="checkbox-10"
                    type="checkbox"
                  />
                  <label for="checkbox-10" class="checkbox2-custom-label b-15">Sub-ordinated Debt</label>
                </p>
                <p>
                  <input
                    id="checkbox-11"
                    class="checkbox2-custom"
                    name="checkbox-11"
                    type="checkbox"
                  />
                  <label for="checkbox-11" class="checkbox2-custom-label b-15">Lease Finance</label>
                </p>
                <p>
                  <input
                    id="checkbox-12"
                    class="checkbox2-custom"
                    name="checkbox-12"
                    type="checkbox"
                  />
                  <label for="checkbox-12" class="checkbox2-custom-label b-15">Senior Debt</label>
                </p>
              </div>
              <div class="col-lg-3"></div>
              <div class="col-lg-4 my-5">
                <button class="btn btn-green px-5" @click="second">Create Profile</button>
              </div>
            </div>
          </div>
          <div class="col-12" v-if="seconddeal">
            <div class="row">
              <div class="col-12 mb-5">
                <div class="d-flex row">
                  <h3 class="r-20">Deal Request Form</h3>
                  <div class="ml-3 step">2 of 2</div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 mb-3">
                <b class="r-14">Project Location</b>
                <br />
                <small class="r-12">Select a location where your company is based</small>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-8 mb-3">
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
              <div class="col-lg-3"></div>
              <div class="col-lg-2 col-md-4 mb-3">
                <b class="r-14">Project Region</b>
                <br />
                <small class="r-12">All options can be selected</small>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-8 mb-3">
                <p>
                  <input
                    id="checkbox-13"
                    class="checkbox2-custom"
                    name="checkbox-13"
                    type="checkbox"
                  />
                  <label for="checkbox-13" class="checkbox2-custom-label b-15">East Africa</label>
                </p>
                <p>
                  <input
                    id="checkbox-14"
                    class="checkbox2-custom"
                    name="checkbox-14"
                    type="checkbox"
                  />
                  <label for="checkbox-14" class="checkbox2-custom-label b-15">West Africa</label>
                </p>
                <p>
                  <input
                    id="checkbox-15"
                    class="checkbox2-custom"
                    name="checkbox-15"
                    type="checkbox"
                  />
                  <label for="checkbox-15" class="checkbox2-custom-label b-15">Central Africa</label>
                </p>
                <p>
                  <input
                    id="checkbox-16"
                    class="checkbox2-custom"
                    name="checkbox-16"
                    type="checkbox"
                  />
                  <label for="checkbox-16" class="checkbox2-custom-label b-15">South Africa</label>
                </p>
              </div>
              <div class="col-lg-3"></div>
              <div class="col-lg-2 col-md-4 mb-3">
                <b class="r-14">Stage of Investment</b>
                <br />
                <small class="r-12">All options can be selected</small>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-8 mb-3">
                <p>
                  <input
                    id="checkbox-17"
                    class="checkbox2-custom"
                    name="checkbox-17"
                    type="checkbox"
                  />
                  <label
                    for="checkbox-17"
                    class="checkbox2-custom-label b-15"
                  >Pre-Development Stage/Seed Equity</label>
                </p>
                <p>
                  <input
                    id="checkbox-18"
                    class="checkbox2-custom"
                    name="checkbox-18"
                    type="checkbox"
                  />
                  <label
                    for="checkbox-18"
                    class="checkbox2-custom-label b-15"
                  >Operational but Pre-Profitability</label>
                </p>
                <p>
                  <input
                    id="checkbox-19"
                    class="checkbox2-custom"
                    name="checkbox-19"
                    type="checkbox"
                  />
                  <label
                    for="checkbox-19"
                    class="checkbox2-custom-label b-15"
                  >Operational but need Growth Financing</label>
                </p>
                <p>
                  <input
                    id="checkbox-20"
                    class="checkbox2-custom"
                    name="checkbox-20"
                    type="checkbox"
                  />
                  <label
                    for="checkbox-20"
                    class="checkbox2-custom-label b-15"
                  >Operational but need Major Expansion Financing</label>
                </p>
                <p>
                  <input
                    id="checkbox-21"
                    class="checkbox2-custom"
                    name="checkbox-21"
                    type="checkbox"
                  />
                  <label for="checkbox-21" class="checkbox2-custom-label b-15">Pre-IPO Financing</label>
                </p>
              </div>
              <div class="col-lg-3"></div>
              <div class="col-lg-2 col-md-4 mb-3">
                <b class="r-14">Target Average EBITDA first 3 yrs Post-Money</b>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-8 mb-3"></div>
              <div class="col-lg-3"></div>
              <div class="col-lg-2 col-md-4 mb-3">
                <b class="r-14">Target Investment Size </b>
                <br />
                <small class="r-12">Select Investment size</small>
              </div>
              <div class="col-lg-6 offset-lg-1 col-md-8 mb-3"></div>
              <div class="col-lg-3"></div>

              <div class="col-lg-3"></div>
              <div class="col-lg-9 my-5">
                <button class="btn btn-green px-5 mb-3">Create Profile</button>
                <button class="btn btn-clear ml-lg-3 px-5 mb-3">Cancel</button>
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
      firstdeal: true,
      seconddeal: false,
      success: false,
      countries: ["Nigeria", "Ghana", "Benin"],
      regions: ["West Africa", "East Africa", "North Africa"],
      industries: ["Extractive Industries", "Renewable Energy", "Power"]
    };
  },
  components: {
    Multiselect
  },
  methods: {
    second() {
      this.firstdeal = false;
      this.seconddeal = true;
    },
    first() {
      this.firstdeal = true;
      this.seconddeal = false;
    },
    company() {}
  }
};
</script>