<template>
  <div id="app">
    <Header />
    <EventBox />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import EventBox from './components/EventBox.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    EventBox,
    Footer
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
}

p {
  line-height: 1.2;
}

h1 {
  font-weight: normal;
  font-style: italic;
  font-size: 1.2rem;
  margin: 0;
}

header {
  border-bottom: 2px solid grey;
  font-size: 1.1rem;
  padding: 5px;
}

#EventBox {
  font-size: 1.4rem;
  margin: 1rem 0 0 1rem;
}

#Footer {
  padding: 5px;
  position: absolute;
  bottom: 0px
}
</style>
