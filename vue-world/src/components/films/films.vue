<template>
  <table
    v-if="films"
    :class="$style.filmsTable"
  >
    <thead>
      <tr :class="$style.headRow">
        <th
          v-for="header in tableHeaders"
          :key="header"
          :class="$style.headColumn"
        >
          {{ header }}
        </th>
      </tr>
    </thead>

    <tbody>
      <router-link
        v-for="film in films"
        :key="film.id"
        :class="[$style.routingRow, $style.bodyRow]"
        tag="tr"
        :to="{ name: 'Film', params: { filmId: film.id }}"
      >
        <td :class="$style.bodyColumn">
          {{ film.title }}
        </td>
        <td :class="$style.bodyColumn">
          {{ film.releaseDate }}
        </td>
        <td :class="$style.bodyColumn">
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
    };
  },

  async mounted() {
    this.films = await this.getFilms();
  },

  methods: {
    ...mapActions([
      'getFilms',
    ]),
  },

};
</script>

<style module>

.filmsTable {
  margin: auto;
  width: 800px;
  border-collapse: collapse;
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
  background-color: rgba(0, 0, 0, .3);
}

.bodyColumn {
  position: relative;
}

.bodyColumn:hover::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 175, 128, .6);
  z-index: -1;
}

</style>
