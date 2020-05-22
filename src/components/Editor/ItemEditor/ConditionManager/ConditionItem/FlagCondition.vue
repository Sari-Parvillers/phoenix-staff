<template>
    <section>
        <i>Flag condition:</i>
        <p class="edit-option">
            <span>Category:
                <select :name="`flag condition category select level ${condition.level} ` + uniqueKey"
                id="flag-condition-category-select"
                v-model="condition.content.category">
                    <option v-for="(flagCategory, index) in editorFlags"
                    :key="index"
                    :value="flagCategory.name">
                        {{ flagCategory.name }}
                    </option>
                </select>
            </span>

            <span>  Flag:
                <select v-if="condition.content.category"
                :name="`flag condition flag select level ${condition.level}  ` + uniqueKey"
                id="flag-condition-flag-select"
                v-model="condition.content.flag">
                    <option v-for="(flag, index) in editorFlags[condition.content.category].flags"
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
            True if:
            <input type="radio"
            id="true"
            :name="'flag condition ' + uniqueKey"
            :value="true"
            v-model="condition.content.trueIf">
            <label for="true">True</label>

            <input type="radio"
            id="false"
            :name="'flag condition ' + uniqueKey"
            :value="false"
            v-model="condition.content.trueIf">
            <label for="false">False</label>
        </p>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'FlagCondition',
    props: ['condition', 'uniqueKey'],

    computed: {
        ...mapGetters([
            'editorFlags'
        ])
    }
}
</script>

<style>

</style>
