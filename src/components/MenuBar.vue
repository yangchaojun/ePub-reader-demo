<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        :class="{'hide-box-shadow': ifSettingShow || !ifTitleAndMenuShow}"
        v-show="ifTitleAndMenuShow"
      >
        <div class="icon-wrapper">
          <span class="icon-menu icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="showSetting">A</span>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <div class="setting-font-size"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ifSettingShow: false
    };
  },
  methods: {
    showSetting() {
      this.ifSettingShow = true;
    },
    hideSetting() {
      this.ifSettingShow = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.menu-bar {
  .setting-wrapper {
    position: absolute;
    z-index: 100;
    bottom: 80px;
    left: 0;
    width: 100%;
    height: 90px;
    background: #fff;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
  }
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 80px;
    display: flex;
    background: #fff;
    box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
    &.hide-box-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progress {
        font-size: 43px;
      }
      .icon-bright {
        font-size: 43px;
      }
    }
  }
}
</style>