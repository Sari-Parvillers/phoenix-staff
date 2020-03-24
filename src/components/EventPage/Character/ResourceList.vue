<template>
  <ul id="Resources">
      <Resource
      v-for="resource in resourceList"
      :key="resource.id"
      :resource="resource"/>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

import Resource from "./ResourceItem.vue"


export default {
    name: "Resources",
    components: {
        Resource
    },
    computed: mapState({
        resourceList: function(state) {
            const resourceArray = []
            const resourceObject = state.gameState.resources
            let index = 0

            for (let resource in resourceObject) {
                resourceArray[index] = {
                    id: index,
                    amount: resourceObject[resource].amount,
                    description: resourceObject[resource].description,
                    name: resourceObject[resource].name
                }
                index++
            }
            return resourceArray
        }
    })
}
</script>

<style>

</style>
