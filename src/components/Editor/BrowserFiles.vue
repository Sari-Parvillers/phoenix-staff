<template>
    <ul>
        <project-item
        v-for="(project, index) in projects"
        :key="index"
        :project="project"/>
    </ul>
</template>

<script>
import ProjectItem from './BrowserFiles/ProjectItem.vue'

export default {
    name: 'BrowserFiles',
    props: ['projects'],
    components: {
        ProjectItem
    }
}
</script>

<style scoped>
ul {
    font-size: 120%;
    list-style: none;
    padding: 0;
}
</style>
