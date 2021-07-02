<template>
  <a
    v-bind:href="'https://api.whatsapp.com/send?phone=' + phone"
    target="_blank"
    id="wpp"
  >
    <div class="ripple"></div>
    <div class="icon"></div>
  </a>
</template>

<script>
export default {
  props: ["phone"],
};
</script>

<style lang="scss" scoped>
@keyframes ripple {
  from {
    width: 60px;
    height: 60px;
    bottom: 10px;
    right: 10px;
    opacity: 1;
  }
  to {
    width: 80px;
    height: 80px;
    bottom: 0;
    right: 0;
    opacity: 0;
  }
}

#wpp {
  position: fixed;
  z-index: 9;
  .ripple {
    background-color: #73af00;
    position: fixed;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
    animation: ripple 1.5s infinite;
  }

  .icon {
    width: 60px;
    height: 60px;
    background-color: #73af00;
    position: fixed;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
    background-image: url(./assets/wpp.svg);
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>