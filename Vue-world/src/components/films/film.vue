<template>
  <table
    v-if="filmInfo"
    :class="$style.filmTable">
    <tbody>
      <tr :class="$style.tableRow">
        <td>Title:</td>
        <td>{{ filmInfo.title }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Director:</td>
        <td>{{ filmInfo.director }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Year:</td>
        <td>{{ filmInfo.releaseDate }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Characters:</td>
        <td>
          <ul>
            <router-link
              v-for="character of filmInfo.characters"
              :key="character.id"
              :class="$style.characterName"
              tag="li"
              :to="{ name: 'Character', params: { charId: character.id }}">
              {{ character.name }}
            </router-link>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Film',

  inject: ['filmsService', 'charactersService'],

  data() {
    return {
      filmInfo: null,
   ***REMOVED*****REMOVED***
***REMOVED***

  async mounted() {
    this.filmInfo = await this.filmsService.getFilmByIndex(this.$route.params.filmId);
    this.filmInfo.characters = await this.charactersService
      .getCharactersByIndexes(this.filmInfo.characters);
***REMOVED***

***REMOVED***
</script>

<style module>

.filmTable {
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

.tableRow {
  border-top: 1px solid #C1C3D1;
  border-bottom: 1px solid #C1C3D1;
  color: rgb(105, 105, 105);
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, .1);
  cursor: pointer;
}

.tableRow td {
  background: #FFFFFF;
  padding: 20px;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, .1);
  border-right: 1px solid #C1C3D1;
}

.tableRow td:first-child {
  border-right: 6px double #C1C3D1;
  width: 20%;
}

.tableRow:hover td {
  background-color: rgb(116, 60, 60);
  color: rgb(0, 0, 0);
}

.characterName:hover {
    cursor: pointer;
    color: #8B80FE;
}

</style>
