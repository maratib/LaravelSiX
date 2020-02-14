<template>
  <div id="app">
    <div id="nav">
      <a href="/">Home</a> |
      <a href="/home">User</a> |
      <router-link to="/dash">Dash</router-link>&nbsp;|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "This is Vue APP"
    };
  }
};
</script>
<style></style>
