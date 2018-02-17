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

<script>
import FooterGlobal from '@/components/FooterGlobal.vue'
import HeaderGlobal from '@/components/HeaderGlobal.vue'
export default {
  name: 'App',
  components: { FooterGlobal, HeaderGlobal }
}
</script>
