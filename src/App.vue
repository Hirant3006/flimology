<template>
  <div id="app">
    <movie-tag movieid="550"/>
  </div>
</template>

<script>
import MovieTag from './components/MovieTagOld.vue'

export default {
  name: 'app',
  components: {
    MovieTag
  }
}
</script>

<style>
</style>
