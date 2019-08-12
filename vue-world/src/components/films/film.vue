<template>
  <table
    :class="$style.film_table"
    v-if="filmInfo">
    <tbody>
      <tr :class="$style.table_row">
        <td>
          Title:
        </td>
        <td>
            {{ filmInfo.title }}
        </td>
      </tr>
      <tr :class="$style.table_row">
        <td>
          Director:
        </td>
        <td>
            {{ filmInfo.director }}
        </td>
      </tr>
      <tr :class="$style.table_row">
        <td>
          Year:
        </td>
        <td>
            {{ filmInfo.releaseDate }}
        </td>
      </tr>
      <tr :class="$style.table_row">
        <td>
          Characters:
        </td>
        <td>
            {{ filmInfo.characters }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Film',

  data() {
    return {
      filmInfo: null,
  ***REMOVED*****REMOVED*****REMOVED***
***REMOVED***

  methods: {
    ...mapActions([
      'getFilmByIndex',
    ]),
***REMOVED***

  async mounted() {
    this.filmInfo = await this.getFilmByIndex(this.$route.params.id);
***REMOVED***
***REMOVED***
</script>

<style module>

.film_table {
  margin: auto;
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  max-width: 600px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
  animation: float 5s infinite;
}

.table_row {
  border-top: 1px solid #C1C3D1;
  border-bottom: 1px solid #C1C3D1;
  color: rgb(105, 105, 105);
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, .1);
  cursor: pointer;
}

.table_row td {
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, .1);
  border-right: 1px solid #C1C3D1;
}

.table_row td:first-child {
  border-right: 6px double #C1C3D1;
}

.table_row:hover td {
  background-color: rgb(116, 60, 60);
  color: rgb(0, 0, 0);
}

</style>
