<template>
  <ul id="Resources">
      <Resource
      v-for="resource in resourceList"
      :key="resource.id"
      :resource="resource"/>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

import Resource from "./ResourceItem.vue"


export default {
    name: "Resources",
    components: {
        Resource
    },
    computed: mapGetters([
        'resourceList'
    ])
}
</script>

<style>

</style>
