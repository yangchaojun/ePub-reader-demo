<template>
    <transition name="slide-down">
      <div class="title-wrapper" v-show="ifTitleAndMenuShow">
        <div class="left">
          <div class="icon-back icon"></div>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <div class="icon-cart icon"></div>
          </div>
          <div class="icon-wrapper">
            <div class="icon-person icon"></div>
          </div>
          <div class="icon-wrapper">
            <div class="icon-more icon"></div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
 .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 80px;
    display: flex;
    background: #fff;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
    .left {
      flex: 0 0 60px;
      @include center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .icon-wrapper {
        flex: 0 0 60px;
        @include center;
      }
    }
  }
</style>