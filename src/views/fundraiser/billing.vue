<template>
  <div class="row">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page"><img src="../../../public/img/company.svg" alt="">&nbsp;Billing</li>
        </ol>
      </nav>
    </div>
    <div class="col-lg-12">
      <h2 class="r-26">
        <b>Billing</b>
      </h2>
    </div>
    <div class="col-12">
      <ul class="nav nav-tabs transfer">
        <li class="nav-item">
          <a class="nav-link active" href="#all" role="tab" data-toggle="tab">
            <!-- <div class="d-flex"> -->
            <span>
              <i class="fas fa-circle mr-2" style="font-size: 7px;color: #d8d8d8;"></i>
            </span>
            <span class="mt-2">All</span>
            <span>
              <small class="ml-3 l-14">0</small>
            </span>
            <!-- </div> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#confirmed" role="tab" data-toggle="tab">
            <span>
              <i class="fas fa-circle mr-2" style="font-size: 7px; color: #02a859;"></i>
            </span>
            <span class="mt-2">Confirmed</span>
            <span>
              <small class="ml-3 l-14">0</small>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#declined" role="tab" data-toggle="tab">
            <span>
              <i class="fas fa-circle mr-2" style="font-size: 7px; color: #ed3237;"></i>
            </span>
            <span class="mt-2">Declined</span>
            <span>
              <small class="ml-3 l-14">0</small>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-12 my-4">
      <div class="tab-content">
        <div class="tab-pane active" role="tabpanel" id="all">
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table fundtable">
                  <thead>
                    <th>Project Name</th>
                    <th>Sector</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Project Max</td>
                      <td>Extractive Industries</td>
                      <td>02 Jan 2019</td>
                      <td>Abuja</td>
                      <td>N 100,000</td>
                      <td><img src="../../../public/img/confirmed.svg" alt="">&nbsp; Confirmed</td>
                      <td>
                        <router-link to="/fundraiser/viewproject">View</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>Project Max</td>
                      <td>Extractive Industries</td>
                      <td>02 Jan 2019</td>
                      <td>Abuja</td>
                      <td>N 100,000</td>
                      <td><img src="../../../public/img/confirmed.svg" alt="">&nbsp; Confirmed</td>
                      <td>
                        <router-link to="/fundraiser/viewproject">View</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" role="tabpanel" id="confirmed">
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table fundtable">
                  <thead>
                    <th>Project Name</th>
                    <th>Sector</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Project Max</td>
                      <td>Extractive Industries</td>
                      <td>02 Jan 2019</td>
                      <td>Abuja</td>
                      <td>N 100,000</td>
                      <td><img src="../../../public/img/confirmed.svg" alt="">&nbsp; Confirmed</td>
                      <td>
                        <router-link to="/fundraiser/viewproject">View</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>Project Max</td>
                      <td>Extractive Industries</td>
                      <td>02 Jan 2019</td>
                      <td>Abuja</td>
                      <td>N 100,000</td>
                      <td><img src="../../../public/img/confirmed.svg" alt="">&nbsp; Confirmed</td>
                      <td>
                        <router-link to="/fundraiser/viewproject">View</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" role="tabpanel" id="successful">
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table fundtable">
                  <thead>
                    <th>Project Name</th>
                    <th>Sector</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Project Max</td>
                      <td>Extractive Industries</td>
                      <td>02 Jan 2019</td>
                      <td>Abuja</td>
                      <td>N 100,000</td>
                      <td><img src="../../../public/img/confirmed.svg" alt="">&nbsp; Confirmed</td>
                      <td>
                        <router-link to="/fundraiser/viewproject">View</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>Project Max</td>
                      <td>Extractive Industries</td>
                      <td>02 Jan 2019</td>
                      <td>Abuja</td>
                      <td>N 100,000</td>
                      <td><img src="../../../public/img/confirmed.svg" alt="">&nbsp; Confirmed</td>
                      <td>
                        <router-link to="/fundraiser/viewproject">View</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>