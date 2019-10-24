<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <GridsomeStaticExample />
  </div>
</template>

<script>
// @ is an alias to /src
import GridsomeStaticExample from "@/components/GridsomeStaticExample.vue";

export default {
  name: "home",
  components: {
    GridsomeStaticExample
  }
};
</script>
