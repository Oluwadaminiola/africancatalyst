    <template>
  <div class="row mx-0">
    <div class="col-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page"><img src="../../../public/img/userpro.svg" alt=""> Investor Profile</li>
          <li class="breadcrumb-item active" aria-current="page">View Investor Profile</li>
        </ol>
      </nav>
    </div>
    <div class="col-12 my-4">
      <div class="whitebox">
        <div class="row">
          <div class="col-lg-1 col-md-4">
            <img src="../../../public/img/155.png" height="80px" alt />
          </div>
          <div class="col-lg-3 col-md-4">
            <h4 class="r-20">Joshua Oluwagbemiga</h4>
            <p class="r-14">CTO First City Monument Resource</p>
            <router-link to="/investor/createinvestor" class="g-10">EDIT</router-link>&nbsp;
            <router-link to="/investor/changepassword" class="g-10">CHANGE PASSWORD</router-link>
          </div>
          <div class="col-lg-6"></div>
          <div class="col-lg-2 col-md-12">
              <p><a href="#" class="r-14"> <i class="fab fa-linkedin mr-2" style="color: #2a75b4; font-size: 17px;"></i> <u>View Linkedin Profile</u></a></p>
              <p class="r-14"><i class="fas fa-map-marker-alt mr-2" style="color: #d6daea; font-size: 15px;"></i> Victoria Island</p>
              <p class="r-14"><i class="fas fa-envelope mr-2" style="color: #d6daea; font-size: 15px;"></i> josh@fcmr.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="whitebox">
        <div class="row">
          <div class="col-12 mb-4">
              <h4 class="r-20">Description</h4>
          </div>
          <div class="col-12">
              <p class="r-14">
                  Lasik, an acronym for Laser-assisted, is a form of refractive laser eye surgery procedure performed by ophthalmologists intended for correcting vision. 
              The procedure is usually a preferred alternative to photorefractive keratectomy, PRK, as it requires less time for full recovery, and the patient experiences 
              less pain overall.
              </p>
              <p class="r-14">
                Lasik is performed in two steps. The initial step is to create a flap of corneal tissue. This process is achieved with a mechanical microkeratome using a 
                metal blade, or a femtosecond laser microkeratome that creates a series of tiny closely arranged bubbles within the cornea. A hinge is left at one end of 
                this flap. The flap is folded back, revealing the stroma, the middle section of the cornea.
              </p>
              <p class="r-14">
                The second step of the procedure is to use an excimer laser to remodel the corneal stroma. The laser vaporizes tissue in a finely controlled manner without 
                damaging adjacent stroma by releasing the molecular bonds that hold the cells together. No burning with heat or actual cutting is required to ablate the tissue. 
                The layers of tissue removed are tens of micrometers thick.
              </p>
              <p class="r-14">
                Currently manufactured excimer lasers use a computer system that tracks the patient’s eye position up to 4,000 times per second, redirecting laser pulses for 
                precise placement. After the laser has reshaped the cornea, the Lasik flap is repositioned over the treatment area by the surgeon. The flap remains in position 
                by natural adhesion until healing is completed.
              </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 my-5">
        <router-link to="/investor/createinvestor" class="r-15"><i class="fas fa-plus-circle" style="font-size: 15px;"></i> Create another Profile</router-link>
    </div>
  </div>
</template>
        