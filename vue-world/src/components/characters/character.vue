<template>
  <table
    v-if="character"
    :class="$style.characterTable">
    <tbody>
      <tr :class="$style.tableRow">
        <td>Full Name:</td>
        <td>{{ character.name }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Gender:</td>
        <td>{{ character.gender }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Height: </td>
        <td>{{ character.height }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Mass: </td>
        <td>{{ character.mass }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Birth Year:</td>
        <td>{{ character.birthYear }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Eye color:</td>
        <td>{{ character.eyeColor }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Skin color:</td>
        <td>{{ character.skinColor }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Hair color:</td>
        <td>{{ character.hairColor }}</td>
      </tr>
      <tr :class="$style.tableRow">
        <td>Homeworld:</td>
        <td>{{ character.homeworld }}</td>
      </tr>
    </tbody>
  </table>

  <h1 v-else>
    Spinner rotates
  </h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Character',

  data() {
    return {
      character: null,
    };
  },

  async mounted() {
    this.character = await this.getCharacterByIndex(this.$route.params.charId);
  },

  methods: {
    ...mapActions([
      'getCharacterByIndex',
    ]),
  },

};
</script>

<style module>

.characterTable {
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

</style>
