<template>
  <div class="login">
    <div
      class="full-height bg-img"
      style="background-image: url(../../assets/images/login-screen.png)"
    >
      <div class="container p-x-0">
        <div class="content-holder full-height full-width v-center">
          <!-- login-form -->
          <div class="row full-width m-x-0">
            <div class="col-sm-6">
              <div class="card card-inverse">
                <div class="card-body">
                  <form
                    class="validation-inner"
                    id="login-form"
                    v-on:submit.prevent="submit()"
                  >
                    <h5 class="mb-40">Log In</h5>
                    <ul>
                      <li class="text-danger" v-for="error in errors">
                        {{ error }}
                      </li>
                    </ul>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        placeholder="Email"
                      />
                    </div>
                    <!-- / form-group -->

                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <!-- / form-group -->

                    <div class="row v-center mt-15">
                      <div class="col-lg-7 tablet-lg-top">
                        <div class="checkbox checkbox-primary ml-5">
                          <label class="hidden"><input type="checkbox"/></label>
                          <input id="checkbox1" type="checkbox" />
                          <label for="checkbox1"
                            ><span class="fw-light">Remember Me</span></label
                          >
                        </div>
                        <!-- / checkbox -->
                      </div>
                      <!-- / column -->
                      <div class="col-lg-5 text-right">
                        <button
                          type="submit"
                          class="btn btn-md btn-primary tablet-lg-fw"
                        >
                          Login
                        </button>
                      </div>
                      <!-- / column -->
                    </div>
                    <!-- / row -->

                    <div class="mt-15">
                      <a href="#x" class="forgot-password"
                        >Forgot your Password?</a
                      >
                    </div>
                    <!-- / mt-15 -->
                  </form>
                  <!-- / login-form -->
                </div>
                <!-- / card-body -->
              </div>
              <!-- / card -->
            </div>
            <!-- / col-sm-6 -->
          </div>
        </div>
      </div>
    </div>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/boards");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
