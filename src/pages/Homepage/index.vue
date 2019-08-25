<template>
  <div id="app">
    <input type="text">
    <movie-tag movieid="550" />
  </div>
</template>

<script>
import MovieTag from "../../components/MovieTag";

export default {
  name: "app",
  components: {
    MovieTag
  }
};
</script>

<style>
</style>
