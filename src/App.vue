<template>
  <div id="app">
    <div class="header">
      <!-- <header class="bg-white pt-0 bg-img bg-fixed" style=""> -->
      <nav class="navbar navbar-expand-lg navbar-inverse bg-inverse">
        <div class="container">
          <a class="navbar-brand" href="/"
            ><img src="/assets/images/logo-placeholder.png" alt="" />
            <p class="text-muted">OSRS-TRACK</p>
          </a>

          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-toggle"
            aria-controls="navbar-toggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
            <span class="sr-only">Toggle navigation</span></button
          ><!-- / navbar-toggler -->

          <div class="collapse navbar-collapse" id="navbar-toggle">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="/">HOME</a>
              </li>
              <li class="nav-item" v-if="isLoggedIn()">
                <a class="nav-link smooth-scroll" href="/boards">BOARDS</a>
              </li>
              <li class="nav-item" v-if="isLoggedIn()">
                <a class="nav-link smooth-scroll" href="/logout">LOGOUT</a>
              </li>
              <li class="nav-item" v-if="!isLoggedIn()">
                <a class="nav-link smooth-scroll" href="/login">LOGIN</a>
              </li>
              <li class="nav-item" v-if="!isLoggedIn()">
                <a class="nav-link smooth-scroll" href="/signup">SIGN UP</a>
              </li>
            </ul>
            <!-- / navbar-nav -->
          </div>
          <!-- / navbar-collapse -->
        </div>
        <!-- / container -->
      </nav>
      <!-- / navbar -->
      <!-- </header> -->
    </div>

    <!-- <button v-on:click="showUser()">View Account Settings</button>
    <div v-if="user != {}">
    <p>{{ user.email }}</p>
    <p v-if="user != {}">Email: <input type="text" v-model="user.email"><button v-on:click="updateUser(user)">Update</button></p>
    <p v-if="user != {}"><button v-on:click="destroyUser(user)">Delete Account</button></p>
    </div> -->

    <router-view />

    <footer class="dark bg-inverse">
      <div class="container text-center">
        <div class="row v-center">
          <div class="col-lg-6 footer-left-area">
            <p>© 2020 <span class="fw-regular">OSRS-TRACK</span></p>
          </div>
          <!-- / footer-left-area -->
          <div class="col-lg-6 footer-right-area">
            <p>
              Designed with
              <span class="fa fa-heart text-danger text-xs va-middle"></span> by
              <a
                href="https://erikathemes.com"
                class="footer-link"
                target="_blank"
                >Ian Fletcher</a
              >
            </p>
          </div>
          <!-- / footer-right-area -->
        </div>
        <!-- / row -->
      </div>
      <!-- / container -->
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
    };
  },
  methods: {
    isLoggedIn() {
      return localStorage.getItem("jwt");
    },
    getUserId() {
      return localStorage.getItem("user_id");
    },
    showUser: function() {
      axios.get(`/api/users/${this.getUserId()}`).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
    updateUser: function(user) {
      var updateParams = {
        email: user.email,
      };

      axios
        .patch(`/api/users/${user.id}`, updateParams)
        .then((response) => {
          console.log("Successfully updated user", response.data);
          this.user = {};
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    destroyUser: function(user) {
      axios.delete(`/api/users/${user.id}`).then((response) => {
        console.log("Successfully deleted user", response.data);
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("jwt");
        localStorage.removeItem("user_id");
        this.user = {};
        this.$router.push("/");
      });
    },
  },
};
</script>
