<template>
<div class="row">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page"><img src="../../../public/img/company.svg" alt=""> Projects</li>
          <li class="breadcrumb-item" >Project Listing</li>
          <li class="breadcrumb-item active" aria-current="page">Project Max</li>
        </ol>
      </nav>
    </div>
    <div class="col-lg-12">
        <h2 class="r-26">
            <b>Project Max</b>
        </h2>
    </div>
    <div class="col-12 my-4">
        <div class="table-responsive">
            <table class="table fundtable">
                <thead>
                    <th>Event Profiled</th>
                    <th>Date of Event</th>
                    <th>Location</th>
                    <th>Meeting  Booked</th>
                    <th>Meeting  Confirmed</th>
                    <th>Payment Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Mining 1 ON 1 Investor</td>
                        <td>11 Aug 2019</td>
                        <td>Abuja</td>
                        <td>12</td>
                        <td>12</td>
                        <td>7</td>
                        <td><router-link to="/fundraiser/viewschedule" style="color: #02a859;">View Schedule</router-link></td>
                    </tr>
                    <tr>
                        <td>Mining 1 ON 1 Investor</td>
                        <td>11 Aug 2019</td>
                        <td>Abuja</td>
                        <td>12</td>
                        <td>12</td>
                        <td>7</td>
                        <td><router-link to="/fundraiser/viewschedule" style="color: #02a859;">View Schedule</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</div>
</template>