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
        <th v-if="isAdmin">
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
          @click.self.prevent="goToEditFilm(film.id)">
          Edit
        </td>
      </router-link>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Films',

  inject: ['filmsService'],

  data() {
    return {
      tableHeaders: ['Title', 'Year', 'Director'],
      films: null,
   ***REMOVED*****REMOVED***
***REMOVED***

  computed: {
    ...mapGetters([
      'isAdmin',
    ]),
***REMOVED***

  watch: {
    isAdmin(newValue, oldValue) {
      if (newValue && !this.$route.path.includes('admin')) {
        this.$router.replace('/admin');
      }
      if (!newValue && this.$route.path.includes('admin')) {
        this.$router.replace('/films');
      }
 ***REMOVED*****REMOVED***
***REMOVED***

  async mounted() {
    if (this.isAdmin && !this.$route.path.includes('admin')) {
      this.$router.replace('/admin');
      return;
    }
    this.films = await this.filmsService.getFilms();
***REMOVED***

  methods: {
    goToEditFilm(filmId) {
      this.$router.push({ name: 'AdminFilmUpdate', params: { filmId } });
 ***REMOVED*****REMOVED***
***REMOVED***

***REMOVED***
</script>

<style module>

.filmsTable {
  margin: auto;
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}

th,td {
  width: 25%;
}

th:last-child,
td:last-child {
  width: 5%;
}

.routingRow {
  cursor: pointer;
}

.headColumn,
.bodyColumn {
  padding: 15px;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, .8);
}

.headColumn {
  background-color: #55608f;
}

.bodyRow {
  background-color: rgb(200, 60, 60);
}

.bodyRow:hover {
  background-color: rgb(116, 60, 60);;
}

.adminColumn {
  background-color: #7985b6;
  border: 1px solid rgba(0, 0, 0, .8);
  padding: 15px;
  font-size: 20px;
  opacity: .7;

  transition: transform .35s ease-in-out;
}

.adminColumn:hover {
  opacity: 1;
  transform: scale(1.1);
}

</style>
