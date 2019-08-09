<template>
  <table
  :class="$style.films_table">

    <thead :class="$style.head">
      <tr :class="$style.head_row">
        <th
          :class="$style.head_column"
          v-for="(header, index) in tableHeaders"
          :key="header + index">
            {{ header }}
        </th>
      </tr>
    </thead>

    <tbody :class="$style.body">
      <router-link
        :class="[$style.routing_row, $style.body_row]"
        tag="tr"
        v-for="(film, index) in films"
        :key="film.title + index"
        :to="{ name: 'Film', params: { id: film.databaseId }}">

        <td :class="$style.body_column">
          {{ film.title }}
        </td>
        <td :class="$style.body_column">
          {{ new Date(film.release_date).getFullYear() }}
        </td>
        <td :class="$style.body_column">
          {{ film.director }}
        </td>

      </router-link>
    </tbody>

  </table>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Films',

  data() {
    return {
      tableHeaders: ['Title', 'Year', 'Director'],
      films: null,
  ***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  methods: {
    ...mapActions([
      'getFilms',
    ]),
***REMOVED***

  async mounted() {
    this.films = await this.getFilms();
***REMOVED***
***REMOVED***
</script>

<style module>

.films_table {
  margin: auto;
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

.routing_row {
  cursor: pointer;
}

.head_column,
.body_column {
  padding: 15px;
  background-color: rgba(255, 0, 0, 0.4);
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.8);
}

.head_column {
  background-color: #55608f;
}

.body_row:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.body_column {
  position: relative;
}

.body_column:hover::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 175, 128, 0.6);
  z-index: -1;
}

</style>
