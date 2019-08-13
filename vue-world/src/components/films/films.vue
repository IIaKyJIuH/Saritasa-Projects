<template>
  <table
  :class="$style.filmsTable"
  v-if="films">

    <thead>
      <tr :class="$style.headRow">
        <th
          :class="$style.headColumn"
          v-for="header in tableHeaders"
          :key="header">
            {{ header }}
        </th>
      </tr>
    </thead>

    <tbody>
      <router-link
        :class="[$style.routingRow, $style.bodyRow]"
        tag="tr"
        v-for="film in films"
        :key="film.id"
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

  methods: {
    ...mapActions([
      'getFilms',
    ]),
  },

  async mounted() {
    this.films = await this.getFilms();
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
