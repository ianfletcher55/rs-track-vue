<template>
  <div class="signup">
    <div
      class="full-height bg-img"
      style="background-image: url(../../assets/images/signup-screen.png)"
    >
      <div class="container p-x-0">
        <div class="content-holder full-height full-width v-center">
          <!-- register form -->
          <div class="col-sm-6">
            <div class="card card-inverse">
              <div class="card-body">
                <form
                  class="validation-inner"
                  id="register-form"
                  v-on:submit.prevent="submit()"
                >
                  <h5 class="mb-40">Sign Up</h5>
                  <ul>
                    <li class="text-danger" v-for="error in errors">
                      {{ error }}
                    </li>
                  </ul>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="name"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <!-- / form-group -->
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
                    />
                  </div>
                  <!-- / form-group -->
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      v-model="passwordConfirmation"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <!-- / form-group -->

                  <div class="row v-center">
                    <div class="col-lg-7 tablet-lg-top"></div>
                    <!-- / column -->

                    <div class="col-lg-5 text-right">
                      <button
                        type="submit"
                        class="btn btn-md btn-primary tablet-lg-fw"
                        value="Submit"
                      >
                        Submit
                      </button>
                    </div>
                    <!-- / column -->
                  </div>
                  <!-- / row -->
                </form>
                <!-- / register-form -->
              </div>
              <!-- / card-body -->
            </div>
            <!-- / card -->
          </div>
          <!-- col-sm-6 -->
        </div>
        <!-- / row -->
      </div>
      <!-- / content-holder -->
    </div>
    <!-- / container -->

    <!-- <form v-on:submit.prevent="submit()">
    <h1>Signup</h1>
    <ul>
    <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="form-group">
    <label>Name:</label> 
    <input type="text" class="form-control" v-model="name">
    </div>
    <div class="form-group">
    <label>Email:</label>
    <input type="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
    <label>Password:</label>
    <input type="password" class="form-control" v-model="password">
    </div>
    <div class="form-group">
    <label>Password confirmation:</label>
    <input type="password" class="form-control" v-model="passwordConfirmation">
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
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
