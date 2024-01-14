<template>
  <div>
    <TheHeader />
    <HomeView />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    HomeView,
    TheHeader
  }
}
</script>
