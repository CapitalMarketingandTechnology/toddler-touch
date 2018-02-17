<template>
  <div>
    <h1>
      <icon name="home" scale="4"></icon><br>
      This is a Sample Page
    </h1>
    <h2>Put any content here</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat lorem sit amet sem varius ullamcorper. Phasellus porta est pretium mi faucibus, non pulvinar tellus congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultrices tempor molestie. Donec blandit bibendum tortor scelerisque placerat. Sed commodo tempus neque eu varius. Vestibulum nec tempor felis. Etiam luctus quam a pulvinar egestas. Donec efficitur porttitor tortor non volutpat. Phasellus imperdiet diam quis ex scelerisque iaculis.
    </p>
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
