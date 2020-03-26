<template>
  <li>{{ resource.name }}: {{ resource.amount }}</li>
</template>

<script>
export default {
    name: "ResourceItem",
    props: ["resource"]
}
</script>

<style>

</style>
