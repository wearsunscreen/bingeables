<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.content {
  margin-top: 0 auto;
  max-width: 1200;
  padding: 0 20px;
}
</style>
