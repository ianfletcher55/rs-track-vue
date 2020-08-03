<template>
  <div class="home">
  <!-- <h1>{{ header }}</h1>
  <h3>{{ subheader }}</h3>
  <img src="https://vignette.wikia.nocookie.net/2007scape/images/3/33/Mainpage_logo.png/revision/latest?cb=20190107005620" alt="">
  <button><router-link to="/signup">Sign Up</router-link></button>
  <button><router-link to="/login">Login</router-link></button> -->
    <header class="bg-white pt-10 mobile-header-space bg-img" style="background-image: url(../../assets/images/home-screen.jpg)">
    <div class="full-height v-center">
      <div class="container">
        <div class="row v-center">
          <div class="col-md-7">
            <h1 class="mb-10">OSRS-TRACK</h1>
            <p class="mb-40 opc-75 fw-regular fs-18">AN OLD SCHOOL RUNESCAPE COMPANION APP</p>
            <p class="mb-30">Designed to make your journey through Gielinor a better one</p>
            <p class="mb-0">
              <a href="/login" class="btn btn-primary m-10 ml-0 smooth-scroll"><span>LOGIN</span></a>
            </p>
          </div><!-- / column -->
          <div class="col-md-5">
            <div class="card mt-20 mb-20 w90 ml-auto mr-0">
              <div class="card-body">
                <form class="validation-inner" id="register-form">
                  <h6 class="mb-30">SIGN UP</h6>

                  <div class="form-group">
                    <input type="text" class="form-control" name="usernameRegister" placeholder="Username" required>
                  </div><!-- / form-group -->

                  <div class="form-group">
                    <input type="email" class="form-control" name="emailRegister" placeholder="Email">
                  </div><!-- / form-group -->

                  <div class="form-group">
                    <input type="password" id="passwordRegister" class="form-control" name="passwordRegister" placeholder="Password">
                  </div><!-- / form-group -->

                  <div class="form-group">
                    <input type="password" class="form-control" name="passwordRegisterConfirm" placeholder="Confirm Password" required>
                  </div><!-- / form-group -->

                  <button type="submit" class="btn w-100 btn-primary">REGISTER</button>

                </form><!-- / register-form -->
              </div><!-- / card-body -->
            </div><!-- / card -->
          </div><!-- / column -->
        </div><!-- / row -->
      </div><!-- / container -->
    </div><!-- / height-90 -->  
    </header>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      header: "RS - Track",
      subheader: "An Old School Runescape assistant"
    };
  },
  created: function() {},
  methods: {}
};
</script>
