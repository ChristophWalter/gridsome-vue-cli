<template>
  <div class="gridsome-content">
    <h1>Gridsome via vue-cli</h1>
    <p>
      Characters from
      <a href="https://rickandmortyapi.com/graphql"
        >https://rickandmortyapi.com/graphql</a
      >
    </p>
    <ul>
      <li v-for="character in characters" :key="character.id">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>

<static-query>
{
  rickandmorty {
    characters {
      results {
        id
        name
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "GridsomeStaticExample",
  computed: {
    characters() {
      return this.$static.rickandmorty.characters.results;
    }
  }
};
</script>

<style scoped>
.gridsome-content {
  text-align: left;
}
</style>
