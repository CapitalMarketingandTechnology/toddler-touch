<template>
  <div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'homeTitle'
    ])
  }
}
</script>
