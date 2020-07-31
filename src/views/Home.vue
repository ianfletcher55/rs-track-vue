<template>
  <div class="home">
    <h1>{{ header }}</h1>
    <h3>{{ subheader }}</h3>
    <img src="https://vignette.wikia.nocookie.net/2007scape/images/3/33/Mainpage_logo.png/revision/latest?cb=20190107005620" alt="">
    <button><router-link to="/signup">Sign Up</router-link></button>
    <button><router-link to="/login">Login</router-link></button>
  </div>
</template>

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  max-width: 100%;
  height: auto;
}
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
