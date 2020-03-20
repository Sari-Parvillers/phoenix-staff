<template>
    <div>
        <p id="EventText"
        :key="paragraph.id"
        v-for="paragraph in paragraphs">
            {{ paragraph.text }}
        </p>
    </div>
</template>

<script>
export default {
    name: "EventText",
    props: ["paragraphs"]
}
</script>
