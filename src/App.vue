<template>
  <div id="app">
    <Header
    @changePageToGame="changePage('game')"
    @changePageToEditor="changePage('editor')"
    />

    <EventPage
    v-if="currentPage === 'game'"
    />
    <Editor
    v-if="currentPage === 'editor'"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import EventPage from './components/EventPage.vue'
import Editor from './components/Editor.vue'
import Footer from './components/Footer.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    EventPage,
    Editor,
    Footer
  },

  data() {
    return {
      currentPage: 'game'
    }
  },

  methods: {
    ...mapActions(['freezeEventTemplate']),

    changePage(newPage) {
      this.currentPage = newPage
    }
  },

  created: function() {
    this.freezeEventTemplate
  }
}
</script>

<style>
* {
box-sizing: border-box;
}

body {
    color: lightgrey;
    background-color: rgb(25, 25, 25);
    margin: 0;

    font-family: sans-serif;
}

header {
    border-bottom: 2px solid grey;
    font-size: 1.1rem;
    padding: 5px;
}

.capitalize {
  text-transform: capitalize;
}

.button-placeholder {
    font-style: italic;
    color: lightyellow;
}

.content {
    padding-left: 0.5rem;
    border-left: 1px grey solid;
}

fieldset {
  display: inherit;
  margin: inherit;
  padding: inherit;
  min-inline-size: inherit;
  border: inherit;
}
</style>
