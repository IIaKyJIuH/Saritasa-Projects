<template>
  <form
    v-if="filmInfo"
    @submit.prevent="patchInfo">
    <label :class="$style.inputContainer">
      Film title
      <br>
      <input
        v-model="filmInfo.title"
        placeholder="Title"
        name="title"
        type="text"
        required>
    </label>

    <label :class="$style.inputContainer">
      Film director
      <br>
      <input
        v-model="filmInfo.director"
        placeholder="Director"
        name="director"
        type="text"
        required>
    </label>

    <label :class="$style.inputContainer">
      Episode
      <br>
      <input
        v-model="filmInfo.episodeId"
        placeholder="Episode"
        name="episodeId"
        type="text"
        required>
    </label>

    <label :class="$style.inputContainer">
      Release year
      <br>
      <input
        v-model="filmInfo.releaseDate"
        placeholder="Release date"
        name="releaseDate"
        type="text"
        required>
    </label>

    <hr>

    <button type="submit">
      Update
    </button>
    <router-link
      to="/admin/films"
      tag="button"
      replace>
      Cancel
    </router-link>
  </form>
</template>

<script>
export default {
  name: 'AdminFilmUpdate',

  inject: ['filmsService'],

  data() {
    return {
      filmInfo: null,
    };
  },

  async mounted() {
    this.filmInfo = await this.filmsService.getFilmByIndex(this.$route.params.filmId);
  },

  methods: {
    async patchInfo() {
      await this.filmsService.updateFilm({ id: this.filmInfo.id, newFilm: this.filmInfo });
      this.$router.replace('/admin/films');
    },
  },

};
</script>

<style module>

.inputContainer {
  margin: 10px 0;
}

</style>
