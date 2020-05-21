<template>
    <section class="flag-effect">
        <i>Flag effect:</i>
        <p class="edit-option">
            <span>Category:
                <select :name="'category select ' + uniqueKey"
                id="category-select"
                v-model="effect.content.category">
                    <option v-for="(flagCategory, index) in editorFlags"
                    :key="index"
                    :value="flagCategory.name">
                        {{ flagCategory.name }}
                    </option>
                </select>
            </span>

            <span>  Flag:
                <select v-if="effect.content.category"
                :name="'flag select ' + uniqueKey"
                id="flag-select"
                v-model="effect.content.flag">
                    <option v-for="(flag, index) in editorFlags[effect.content.category].flags"
                    :key="index"
                    :value="flag.name">
                        {{ flag.name }}
                    </option>
                </select>
                <span v-else
                class="button-placeholder">
                    Select flag category
                </span>
            </span>
        </p>

        <p class="edit-option">
            Set to:
            <input type="radio"
            id="true"
            :name="'flag effect ' + uniqueKey"
            value="true"
            v-model="effect.content.setTo">
            <label for="true">True</label>

            <input type="radio"
            id="false"
            :name="'flag effect ' + uniqueKey"
            value="false"
            v-model="effect.content.setTo">
            <label for="false">False</label>

            <input type="radio"
            id="opposite"
            :name="'flag effect ' + uniqueKey"
            value="opposite"
            v-model="effect.content.setTo">
            <label for="opposite">Opposite</label>
        </p>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'FlagEffect',
    props: ['effect', 'uniqueKey'],

    computed: {
        ...mapGetters([
            'editorFlags'
        ]),

        effectCategory() {
            return this.effect.content.category
        }
    },

    watch: {
        effectCategory: function() {
            this.effect.content.flag = ''
        }
    }
}
</script>

<style scoped>

</style>
