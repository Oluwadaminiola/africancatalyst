<template>
  <div class="row mx-0">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">
            <img src="../../../public/img/company.svg" alt /> Projects
          </li>
          <li class="breadcrumb-item active" aria-current="page">Create Project</li>
        </ol>
      </nav>
    </div>
    <div class="col-12">
      <div class="fundrec">
        <div class="row" v-if="firstStep">
          <div class="col-12 mb-5">
            <div class="d-flex row px-3">
              <h3 class="r-20">Create A Project</h3>
              <div class="ml-lg-3 stepp">1 of 4</div>
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
                <small class="r-12">Describe how this business differs from competitors</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <textarea name id rows="5" class="form-control px-0"></textarea>
                </div>
                <p class="text-right l-12">0 / 800</p>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Is This Project Operational</b>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="row">
                  <div class="col-lg-3">
                    <div id="checkboxes">
                      <input type="checkbox" class="protype" id="r2" />
                      <label for="r2" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Yes</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div id="checkboxes">
                      <input type="checkbox" class="protype" id="r3" />
                      <label for="r3" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Still A Work In Progress</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div id="checkboxes">
                      <input type="checkbox" class="protype" id="r4" />
                      <label for="r4" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">No</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-3">
                <b class="r-14">Project Sector</b>
                <br />
                <small class="r-12">Select a category your project falls under</small>
              </div>
              <div class="col-lg-8 offset-lg-1 col-md-8 mb-3">
                <div class="fundraiserform">
                  <label>Project Sector</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option></option>
                      <option v-for="industry in industries" :key="industry">{{ industry }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-4"></div>
              <div class="col-lg-8 mt-5">
                <button class="btn btn-green px-5" @click="second">Continue</button>
                <button class="btn btn-clear ml-lg-3 px-5">Cancel</button>
              </div>
              <!-- <div class="col-lg-3 col-md-4 mb-3">
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
              </div>-->
              <!-- <div class="col-lg-4"></div>
              <div class="col-lg-4 my-5">
                <button class="btn btn-green px-5">Create Profile</button>
              </div>-->
            </div>
          </div>
        </div>

        <div class="row" v-if="secondStep">
          <div class="col-12 mb-5">
            <div class="d-flex row px-3">
              <h3 class="r-20">Additional questions based on your project sector</h3>
              <div class="ml-lg-3 stepp">2 of 4</div>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-3 mb-3">
                <small
                  class="r-12"
                >Project sector can be changed the chosen one does not fully represent your sector</small>
              </div>
              <div class="col-lg-8 offset-lg-1 mb-3">
                <div class="fundraiserform mb-3">
                  <label>By Type</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option v-for="industry in industries" :key="industry">{{ industry }}</option>
                    </select>
                  </div>
                </div>
                <div class="fundraiserform mb-3">
                  <label>Mode of Connection</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option v-for="connection in connections" :key="connection">{{ connection }}</option>
                    </select>
                  </div>
                </div>
                <div class="fundraiserform">
                  <label>By End Use</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option v-for="use in uses" :key="use">{{ use }}</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- <div class="col-lg-3 mb-3">
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
              </div>-->
            </div>
          </div>
          <div class="col-12 mt-5">
            <div class="row">
              <div class="col-lg-12 mb-3">
                <div class="row">
                  <div class="col-lg-4 pl-0">
                    <p class="r-14">Permits Required for the project have been sourced.</p>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r0" />
                      <label for="r0" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Yes</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r02" />
                      <label for="r02" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Work In Progress</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r03" />
                      <label for="r03" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">No</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <input type="text" placeholder="Enter Comment" class="form-control comment" />
                  </div>
                </div>
              </div>

              <div class="col-lg-12 mb-3">
                <div class="row">
                  <div class="col-lg-4 pl-0">
                    <p class="r-14">What is the Revenue mode (None PPA or PPA needed)?</p>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="rr11" />
                      <label for="rr11" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Yes</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="rr12" />
                      <label for="rr12" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Work In Progress</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="rr14" />
                      <label for="rr14" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">No</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <input type="text" placeholder="Enter Comment" class="form-control comment" />
                  </div>
                </div>
              </div>

              <div class="col-lg-12 mb-3">
                <div class="row">
                  <div class="col-lg-4 pl-0">
                    <p class="r-14">If PPA what is the Maximum Capacity that can be generated?</p>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r11r" />
                      <label for="r11r" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Yes</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r12r" />
                      <label for="r12r" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Work In Progress</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r14r" />
                      <label for="r14r" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">No</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <input type="text" placeholder="Enter Comment" class="form-control comment" />
                  </div>
                </div>
              </div>

              <div class="col-lg-12 mb-3">
                <div class="row">
                  <div class="col-lg-4 pl-0">
                    <p
                      class="r-14"
                    >Is there an EIA in place for the Location of Renewable Energy Facility?</p>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r111" />
                      <label for="r111" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Yes</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r112" />
                      <label for="r112" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">Work In Progress</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-1 col-md-2">
                    <div id="checkboxes">
                      <input type="checkbox" class="otype" id="r114" />
                      <label for="r114" class="atype">
                        <div class="d-flex">
                          <div class="check1"></div>
                          <p class="b-15 ml-3">No</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4">
                    <input type="text" placeholder="Enter Comment" class="form-control comment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-4"></div>
              <div class="col-lg-8 mt-5">
                <button class="btn btn-green px-5" @click="third">Continue</button>
                <button class="btn btn-clear ml-lg-3 px-5" @click="first">Previous Step</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="thirdStep">
          <div class="col-12 mb-5">
            <div class="d-flex row px-3">
              <h3 class="r-20">Confirm if your business plan contains the Information</h3>
              <div class="ml-lg-3 stepp">3 of 4</div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4">
                <p
                  class="r-14"
                >A clear articulation of the projects long-term strategy, its market share and estimated future capital needs</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="otype" id="r11" />
                  <label for="r11" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="otype" id="r12" />
                  <label for="r12" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="otype" id="r13" />
                  <label for="r13" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="otype" id="r14" />
                  <label for="r14" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4">
                <p
                  class="r-14"
                >The Project Team has the right mix of technical experience to deliver the project</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r21" />
                  <label for="r21" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r22" />
                  <label for="r22" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r23" />
                  <label for="r23" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r24" />
                  <label for="r24" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4">
                <p class="r-14">It contains details on the Revenue & Pricing model for the Project</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r21" />
                  <label for="r21" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r32" />
                  <label for="r32" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r33" />
                  <label for="r33" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r34" />
                  <label for="r34" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4">
                <p
                  class="r-14"
                >It contains a robust financial model of the project’s future earnings and cash flows, incorporating key assumptions of its future growth strategy is included</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r41" />
                  <label for="r41" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r42" />
                  <label for="r42" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r43" />
                  <label for="r43" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r44" />
                  <label for="r44" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4">
                <p
                  class="r-14"
                >It includes Conceptual Design and 3D Imagery, Equipment Provider Quotations and Bill of Quantities (BOQ) for the proposed project</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r51" />
                  <label for="r51" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r52" />
                  <label for="r52" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r53" />
                  <label for="r53" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r54" />
                  <label for="r54" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4">
                <p class="r-14">It includes a Project Implementation Timeline</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r61" />
                  <label for="r61" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r62" />
                  <label for="r62" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r63" />
                  <label for="r63" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r64" />
                  <label for="r64" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <p class="r-14">The financing need as clearly stated with the use of process</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r71" />
                  <label for="r71" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r72" />
                  <label for="r72" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r73" />
                  <label for="r73" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r74" />
                  <label for="r74" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-lg-4 col-md-12">
                <p
                  class="r-14"
                >Documentary evidence showing Off-take Agreements and Regulatory Licence/Concessions has been received</p>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r81" />
                  <label for="r81" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r82" />
                  <label for="r82" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Still Work In Progress</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r83" />
                  <label for="r83" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">Yes but needs updating</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="col-lg-1 col-md-2">
                <div id="checkboxes">
                  <input type="checkbox" class="ttype" id="r84" />
                  <label for="r84" class="atype">
                    <div class="d-flex">
                      <div class="check1"></div>
                      <p class="b-15 ml-3">No</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4"></div>
          <div class="col-lg-8 mt-5">
            <button class="btn btn-green px-5" @click="fourth">Continue</button>
            <button class="btn btn-clear ml-lg-3 px-5" @click="second">Previous Step</button>
          </div>
        </div>

        <div class="row" v-if="fourthStep">
          <div class="col-12 mb-5">
            <div class="d-flex row px-3">
              <h3 class="r-20">Other Vital Information</h3>
              <div class="ml-lg-3 stepp">4 of 4</div>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-3 mb-3">
                <b class="r-14">Provide Forecast Financial Information</b>
                <br />
                <small
                  class="r-12"
                >Project sector can be changed the chosen one does not fully represent your sector</small>
              </div>
              <div class="col-lg-8 offset-lg-1 mb-3">
                <div class="fundraiserform mb-3">
                  <label>Year</label>
                  <div class="fundselect">
                    <select class="form-control px-0">
                      <option v-for="year in years" :value="year">{{ year }}</option>
                    </select>
                  </div>
                </div>
                <div class="fundraiserform mb-3">
                  <label>Revenue</label>
                  <input type="text" placeholder="Enter an amount" class="form-control px-0" />
                </div>
                <div class="fundraiserform">
                  <label>EBITDA</label>
                  <input type="text" placeholder="Enter an amount" class="form-control px-0" />
                </div>
              </div>
              <div class="col-lg-3"></div>
              <div class="col-lg-9 my-4">
                <p class="r-14">Forecast Information</p>
                <div class="table-responsive">
                  <table class="table forecast">
                    <thead>
                      <th></th>
                      <th>YEAR</th>
                      <th>REVENUE</th>
                      <th>EBIDATA</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2017</td>
                        <td>$ 4,000,000</td>
                        <td>$ 5,000,000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2018</td>
                        <td>$ 4,000,000</td>
                        <td>$ 5,000,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <b class="r-14">Upload a Summary of your Project Business Plan</b>
                <br />
                <small
                  class="r-12"
                >It should contain summaried points about you full business plan an</small>
              </div>

              <div class="col-lg-8 offset-lg-1 mb-3">
                <div class="fundraiserform">
                  <div class="dragimage">
                    <p class="text-center">
                      <img src="../../../public/img/dragimg.svg" alt="">
                    </p>
                    <p class="text-center r-12">Click to upload a document or just drag and drop</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4"></div>
              <div class="col-lg-8 mt-5">
                <button class="btn btn-green px-5">Create Profile</button>
                <button class="btn btn-clear ml-lg-3 px-5" @click="third">Previous Step</button>
              </div>
            </div>
          </div>
          <div class="col-12">
            <p class="text-center"></p>
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
      thirdStep: false,
      fourthStep: false,
      success: false,
      regions: [
        "West Africa",
        "East Africa",
        "North Africa",
        "Central Africa",
        "Southern Africa"
      ],
      industries: ["Extractive Industries", "Renewable Energy", "Power"],
      countries: ["Nigeria", "Ghana", "Benin"],
      investments: ["Core Equity", "Lease Finance", "Lease"],
      connections: ["Off-grid Small Scale", "Off-grid Large Scale"],
      uses: ["Residential", "Industrial", "Domestic"]
    };
  },
  methods: {
    fourth() {
      this.firstStep = false;
      this.secondStep = false;
      this.thirdStep = false;
      this.fourthStep = true;
    },
    third() {
      this.firstStep = false;
      this.secondStep = false;
      this.thirdStep = true;
      this.fourthStep = false;
    },
    second() {
      this.firstStep = false;
      this.secondStep = true;
      this.thirdStep = false;
      this.fourthStep = false;
    },
    first() {
      this.firstStep = true;
      this.secondStep = false;
      this.thirdStep = false;
      this.fourthStep = false;
    },
    company() {}
  },
  mounted() {
    $(".protype").on("change", function() {
      $(".protype")
        .not(this)
        .prop("checked", false);
    });
  },
  computed: {
    years() {
      const year = new Date().getFullYear();
      return Array.from({ length: 100 }, (value, index) => year + index);
    }
  }
};
</script>