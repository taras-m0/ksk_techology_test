<template>
  <div id="app">
    <top-header></top-header>
    <section class="app__content">
      <filter-left class="app__filter-left"></filter-left>
      <div class="app__content-right">
        <div class="app__content-top">
          <sorted-top class="app__content-sorted"></sorted-top>
          <nav-top></nav-top>
        </div>
        <router-view class="app__main" />
      </div>
    </section>

  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue';
import FilterLeft from '@/components/FilterLeft.vue';
import SortedTop from '@/components/SortedTop.vue';
import NavTop from '@/components/NavTop.vue';

export default {
  components: {
    TopHeader, FilterLeft, SortedTop, NavTop,
  },
};
</script>

<style>
html, body {
  height: 100%;
  min-height: 100%;
  background-color: #E5E5E5;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Roboto;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #E5E5E5;
}

.app__content {
  margin: 32px auto 0;
  max-width: 90%;
  display: flex;
}

.app__filter-left {
  margin-right: 16px;
  align-self: flex-start;
}

.app__content-right {
  flex-grow: 1;
}

.app__content-top {
  display: flex;
  align-items: center;
}

.app__content-sorted {
  flex-grow: 1;
  flex-shrink: 1;
  margin-right: 17px;
}

.app__main {
  margin-top: 16px
}

</style>
