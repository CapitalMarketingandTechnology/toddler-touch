<template>
  <div id="app">
    <header>
      <header-global></header-global>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <footer-global></footer-global>
    </footer>
  </div>
</template>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .btn-item {
    border: 1px #525252 solid;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 10px;
    width: 80px;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .content-inner {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .content-main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .left-rail {
    background: #f5f5f5;
    border-top: 2px #ccc solid;
    padding: 20px;
    text-align: center;
  }
  main {
    flex: 1;
    position: relative;

    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
  }
</style>

<script>
import FooterGlobal from '@/components/FooterGlobal.vue'
import HeaderGlobal from '@/components/HeaderGlobal.vue'
export default {
  name: 'App',
  components: { FooterGlobal, HeaderGlobal }
}
</script>
