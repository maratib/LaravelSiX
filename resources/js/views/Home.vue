<template>
  <div class="container">
    <img alt="Vue logo" src="../../img/logo.png" />
    <h1>This is Home</h1>
    <h3 class="mt-5">Component Test</h3>
    <HelloWorld msg="This is HelloWorld component" />
    <BootstrapTest />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld";
import BootstrapTest from "../components/BootstrapTest";

export default {
  name: "Home",
  components: {
    HelloWorld,
    BootstrapTest
  }
};
</script>
