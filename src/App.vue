<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/boards">Boards</router-link> |
      <span v-if="isLoggedIn()">
        <router-link to="/logout">Logout</router-link>
      </span>
      <span v-else>
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Sign Up</router-link>
      </span>
    </div>

    <button v-on:click="showUser()">View Account Settings</button>
    <div v-if="user != {}">
      <p>{{ user.email }}</p>
      <p v-if="user != {}">Email: <input type="text" v-model="user.email"><button v-on:click="updateUser(user)">Update</button></p>
      <p v-if="user != {}"><button v-on:click="destroyUser(user)">Delete Account</button></p>
    </div>

    <router-view/>
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
      user: {}
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
      axios.get(`/api/users/${this.getUserId()}`).then(response => {
        console.log(response.data);
        this.user = response.data;
      });
    },
    updateUser: function(user) {
      var updateParams = {
        email: user.email
      };

      axios
        .patch(`/api/users/${user.id}`, updateParams)
        .then(response => {
          console.log("Successfully updated user", response.data);
          this.user = {};
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
    destroyUser: function(user) {
      axios.delete(`/api/users/${user.id}`).then(response => {
        console.log("Successfully deleted user", response.data);
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("jwt");
        localStorage.removeItem("user_id");
        this.user = {};
        this.$router.push("/");
      });
    }
  }
};
</script>
