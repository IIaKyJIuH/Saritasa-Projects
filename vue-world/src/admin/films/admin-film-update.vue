<template>
  <form
    v-if="filmInfo"
    @submit.prevent="patchInfo">

    <label
      :class="$style.inputContainer">
      Film title
      <br>
      <input
        placeholder="Title"
        name="title"
        type="text"
        v-model="filmInfo.title"
        required/>
    </label>

    <label
      :class="$style.inputContainer">
      Film director
      <br>
      <input
        placeholder="Director"
        name="director"
        type="text"
        required
        v-model="filmInfo.director"/>
    </label>

    <label
      :class="$style.inputContainer">
      Episode
      <br>
      <input
        placeholder="Episode"
        name="episodeId"
        type="text"
        required
        v-model="filmInfo.episodeId"/>
    </label>

    <label
      :class="$style.inputContainer">
      Release year
      <br>
      <input
        placeholder="Release date"
        name="releaseDate"
        type="text"
        required
        v-model="filmInfo.releaseDate"/>
    </label>

    <hr>

    <button
      type="submit">
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
import { mapActions } from 'vuex';

export default {
  name: 'AdminFilmUpdate',

  data() {
    return {
      filmInfo: null,
  ***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  methods: {
    ...mapActions([
      'getFilmByIndex',
      'updateFilm',
    ]),

    async patchInfo() {
      await this.updateFilm({ id: this.filmInfo.id, newFilm: this.filmInfo });
      this.$router.replace('/admin/films');
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  async mounted() {
    this.filmInfo = await this.getFilmByIndex(this.$route.params.filmId);
***REMOVED***
***REMOVED***
</script>

<style module>

.inputContainer {
  margin: 10px 0;
}

</style>
