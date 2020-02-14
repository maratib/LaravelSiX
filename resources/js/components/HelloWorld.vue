<template>
  <div class="container">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
      <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
      <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
    </b-carousel>
    <br />

    <b-alert show>Default Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>Dismissible Alert!</b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">Show alert with count-down timer</b-button>

    <b-button
      @click="showDismissibleAlert=true"
      variant="info"
      class="m-1"
    >Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})</b-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>
