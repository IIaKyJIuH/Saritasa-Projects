<template>
  <div :class="$style.container">
    <h2 :class="$style.header"> Choose film to update: </h2>
    <ul :class="$style.routerList">
      <router-link
        v-for="film in films"
        tag="li"
        :key="film.id"
        :class="$style.routerItem"
        :to="{ name: 'AdminFilmUpdate', params: { filmId: film.id }}">
        {{ film.title }}, episode - {{ film.episodeId }}
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminFilms',

  data() {
    return {
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

.header {
  text-align: left;
  margin-bottom: 0;
}

.routerList {
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  padding: 0;
}

.routerItem {
  font-size: 24px;
  cursor: pointer;
  border: 1px solid #ccc;
  text-decoration: none;
  color: #000;
  display: block;

  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}

.routerItem:hover {
  font-size: 34px;
  background: #f6f6f6;
}

</style>
