<template>
  <div class="content-main">
    <div class="content-inner">
      <ul class="left-rail">
        <li v-for="(btn, index) in selectedItems" :key="btn" >
          <button v-text="btn" class="btn btn-item" @click="selectItem(index)"/>
        </li>
      </ul>
      <div class="main-content">
        <h1 class="text-center">{{selectedItem}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from '../store'
export default {
  name: 'home',
  beforeRouteEnter (to, from, next) {
    store.dispatch('selectGroup', to.name)
    next()
  },
  computed: {
    ...mapGetters(['selectedItem', 'selectedItems'])
  },
  methods: {
    ...mapActions(['selectItem'])
  }
}
</script>
