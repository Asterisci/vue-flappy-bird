<template>
  <div id="app">
    <bird></bird>
  </div>
</template>

<script>
import Bird from "@/components/Bird.vue";

export default {
  name: "App",
  components: {
    Bird,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
