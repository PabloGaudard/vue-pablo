<template>
  <div class="pbl-pic">
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pbl-pic {
  width: 100%;
  padding-bottom: 75%;
  background-size: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #eee;
  position: relative;
  overflow: hidden;

  > div {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: inherit;
    background-position: inherit;
    background-repeat: no-repeat;
    &:nth-of-type(1) {
      background-size: cover;
      filter: blur(2px);
      opacity: 0.75;
    }
    &:nth-of-type(2) {
      background-size: contain;
    }
  }
}
</style>