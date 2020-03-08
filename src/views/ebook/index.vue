<template>
  <div class="ebook">
    <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow" ref="menuBar"></menu-bar>
  </div>
</template>

<script>
const EBOOK_URL = "/2018_Book_AgileProcessesInSoftwareEngine.epub";
import Epub from "epubjs";
global.ePub = Epub;
import TitleBar from "@/components/TitleBar"
import MenuBar from "@/components/MenuBar"
export default {
  components: {
    TitleBar,
    MenuBar
  },
  data() {
    return {
      ifTitleAndMenuShow: false
    };
  },
  mounted() {
    this.showEpub();
  },
  methods: {
    toggleTitleAndMenu() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hideSetting()
      }
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    },
    showEpub() {
      this.book = new Epub(EBOOK_URL);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
        // 兼容iOS
        method: "default"
      });
      this.rendition.display();
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.ebook {
  position: relative;
  height: 100vh;
  overflow: hidden;
 
  .read-wrapper {
    .mask {
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      .left {
        flex: 0 0 100px;
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 100px;
      }
    }
  }
 
}
</style>