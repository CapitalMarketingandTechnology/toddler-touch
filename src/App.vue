<template>
  <div id="app">
    <header>
      <header-global></header-global>
    </header>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
    <footer>
      <footer-global></footer-global>
    </footer>
  </div>
</template>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
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
