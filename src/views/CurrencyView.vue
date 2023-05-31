<template>
  <div>
    {{ getterCurrency }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: mapGetters(['getterCurrency']),
  methods: mapActions(['getCurrency']),
  mounted() {
    this.getCurrency();
  },
};
</script>
