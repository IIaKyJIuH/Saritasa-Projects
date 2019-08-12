<template>
  <table v-if="character">
    <tbody>
      <tr>
          <td>Full Name:</td>
          <td>{{ character.name }}</td>
      </tr>
      <tr>
          <td>Gender:</td>
          <td>{{ character.gender }}</td>
      </tr>
      <tr>
          <td>Height: </td>
          <td>{{ character.height }}</td>
      </tr>
      <tr>
          <td>Mass: </td>
          <td>{{ character.mass }}</td>
      </tr>
      <tr>
          <td>Birth Year:</td>
          <td>{{ character.birthYear }}</td>
      </tr>
      <tr>
          <td>Eye color:</td>
          <td>{{ character.eyeColor }}</td>
      </tr>
      <tr>
          <td>Skin color:</td>
          <td>{{ character.skinColor }}</td>
      </tr>
      <tr>
          <td>Hair color:</td>
          <td>{{ character.hairColor }}</td>
      </tr>
      <tr>
          <td>Homeworld:</td>
          <td>{{ character.homeworld }}</td>
      </tr>
    </tbody>
  </table>
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

  methods: {
    ...mapActions([
      'getCharacterByIndex',
    ]),
  },

  async mounted() {
    this.character = await this.getCharacterByIndex(this.$route.params.id);
  },

};
</script>

<style>

</style>
