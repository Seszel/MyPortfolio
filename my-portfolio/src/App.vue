<template>
  <div>
    <TheHeader />
    <HomePage />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    HomePage,
    TheHeader
  }
}
</script>
