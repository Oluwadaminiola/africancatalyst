<template>
<div class="row">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page"><img src="../../../public/img/company.svg" alt=""> Projects</li>
          <li class="breadcrumb-item active" aria-current="page">Project Listing</li>
        </ol>
      </nav>
    </div>
    <div class="col-lg-10">
        <h2 class="r-26">
            <b>Project Listing</b>
        </h2>
    </div>
    <div class="col-lg-2">
        <router-link to="/fundraiser/createproject">
            <button class="btn btn-green px-5">Add Project</button>
        </router-link>
    </div>
    <div class="col-12 my-4">
        <div class="table-responsive">
            <table class="table fundtable">
                <thead>
                    <th>Project Name</th>
                    <th>Investment Sourced</th>
                    <th>Sector</th>
                    <th>No of Event</th>
                    <th>Investors Clicked</th>
                    <th>Meetings Booked</th>
                    <th>Confirmed Meetings</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Project Max</td>
                        <td style="color: #02a859;">$4 Million</td>
                        <td>Extractive Industries</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                        <td>7</td>
                        <td><router-link to="/fundraiser/viewproject">View</router-link></td>
                    </tr>
                    <tr style="margin-top: +10px !important">
                        <td>Project Max</td>
                        <td style="color: #02a859;">$4 Million</td>
                        <td>Extractive Industries</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                        <td>7</td>
                        <td><router-link to="/fundraiser/viewproject">View</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="col-12">
        <h4 class="s-20">
            Comment
        </h4>
        <p class="s-14">
            These are projects profiled for a 1 ON 1 meeting with an investor
        </p>
    </div>
</div>
</template>