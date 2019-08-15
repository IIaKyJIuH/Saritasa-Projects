<template>
  <table
    v-if="films"
    :class="$style.filmsTable">
    <thead>
      <tr :class="$style.headRow">
        <th
          v-for="header in tableHeaders"
          :key="header"
          :class="$style.headColumn">
          {{ header }}
        </th>
        <th
          v-if="isAdmin">
          ADMIN
        </th>
      </tr>
    </thead>

    <tbody>
      <router-link
        v-for="film in films"
        :key="film.id"
        :class="[$style.routingRow, $style.bodyRow]"
        tag="tr"
        :to="{ name: 'Film', params: { filmId: film.id }}">
        <td :class="$style.bodyColumn">
          {{ film.title }}
        </td>
        <td :class="$style.bodyColumn">
          {{ film.releaseDate }}
        </td>
        <td :class="$style.bodyColumn">
          {{ film.director }}
        </td>
        <td
          v-if="isAdmin"
          :class="$style.adminColumn"
          @click.self.prevent="editFilm(film.id)">
          Edit
        </td>
      </router-link>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Films',

  data() {
    return {
      tableHeaders: ['Title', 'Year', 'Director'],
      films: null,
  ***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  computed: {
    ...mapGetters([
      'isAdmin',
    ]),
***REMOVED***

  async mounted() {
    if (this.isAdmin && !this.$route.path.includes('admin')) {
      this.$router.replace('/admin');
      return;
    }
    this.films = await this.getFilms();
***REMOVED***

  methods: {
    ...mapActions([
      'getFilms',
    ]),

    editFilm(filmId) {
      this.$router.push({ name: 'AdminFilmUpdate', params: { filmId } });
***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

***REMOVED***
</script>

<style module>

.filmsTable {
  margin: auto;
  width: 800px;
  border-collapse: collapse;
  table-layout: fixed;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}

.routingRow {
  cursor: pointer;
}

.headColumn,
.bodyColumn {
  padding: 15px;
  background-color: rgba(255, 0, 0, .4);
  color: #fff;
  border: 1px solid rgba(0, 0, 0, .8);
}

.headColumn {
  background-color: #55608f;
}

.bodyRow:hover {
  background-color: rgba(184, 43, 43, 0.5);
}

.bodyColumn {
  position: relative;
}

.bodyColumn:hover::after {
  content: "";
  position: absolute;
  background-color: rgb(182, 182, 89);
  left: 0;
  top: -5000px;
  height: 10000px;
  width: 100%;
  z-index: -1;
}

.adminColumn {
  background-color: red;
  border: 1px solid rgba(0, 0, 0, .8);
  padding: 15px;
  opacity: .7;
}

.adminColumn:hover {
  opacity: 1;
}

</style>
