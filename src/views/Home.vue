<template>
  <div class="charList">
    <div class="warp">
      <div class="top"></div>
      <bar-graph id="barChar" class="bar panle" width="500px" height="300px" setClass="border-bot" />
    </div>
  </div>
</template>
<script>
import BarGraph from '@/components/bar-graph'
export default {
  name: 'Home',
  components: { BarGraph }
}
</script>
<style lang="scss">
.charList {
  position: absolute;
  width: 100%;
  height: 100%;
}
.warp {
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/bj.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 117px;
    background-image: url('../assets/img/top_nav.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
  .border-bot {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: -0.055556rem;
      left: -0.055556rem;
      width: 0.111111rem;
      height: 0.111111rem;
      border-bottom: 3px solid #0265ba;
      border-left: 3px solid #0265ba;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -0.055556rem;
      right: -0.055556rem;
      width: 0.111111rem;
      height: 0.111111rem;
      border-bottom: 3px solid #0265ba;
      border-right: 3px solid #0265ba;
    }
  }
  .panle {
    border: 2px solid rgba(92, 255, 255, 0.1);
    &::before {
      content: '';
      position: absolute;
      top: -0.055556rem;
      left: -0.055556rem;
      width: 0.111111rem;
      height: 0.111111rem;
      border-top: 3px solid #0265ba;
      border-left: 3px solid #0265ba;
    }
    &::after {
      content: '';
      position: absolute;
      top: -0.055556rem;
      right: -0.055556rem;
      width: 0.111111rem;
      height: 0.111111rem;
      border-top: 3px solid #0265ba;
      border-right: 3px solid #0265ba;
    }
  }
  .bar {
    position: absolute;
    top: 117px;
    left: 30px;
    background: rgba(10, 106, 255, 0.1) url('../assets/img/wg.png') repeat 50% 50%;
  }
}
</style>
