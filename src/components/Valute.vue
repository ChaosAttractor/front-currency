<template>
  <div class="flex items-center">
    <v-text-field
        v-model="value"
        :readonly="readonly"
        :hint="hint"
        @input="$emit('inputValue', value)"
    ></v-text-field>
    <v-select
        v-model="abbr"
        :items="items"
        :label="label"
        @change="$emit('changeAbbr', abbr)"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    abbr: String,
    hint: String,
    readonly: Boolean,
    items: Array,
    label: String,
  },
}
</script>

<style lang="scss" scoped>
.v-input {
  width: 100px;
}
</style>