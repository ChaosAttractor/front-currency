<template>
  <div class="flex container">
  <Valute @inputValue="firstValute=$event" @changeAbbr="firstValuteAbbr=$event" :value="firstValute" :abbr="firstValuteAbbr" hint="" :readonly="false" :items="keyCurrency" :label="'Валюта 1'"/>
  <Valute @changeAbbr="secondValuteAbbr=$event" :value="result" :abbr="secondValuteAbbr" :hint="'нельзя изменить'" :readonly="true" :items="keyCurrency" :label="'Валюта 2'"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Valute from "../components/Valute.vue"
export default {
  components: { Valute },
  data() {
    return {
      firstValute: 0,
      firstValuteAbbr: 'RUB',
      secondValuteAbbr: 'USD',
    };
  },
  computed: {
    ...mapGetters(['getterCurrency']),
    keyCurrency() {
      return Object.keys(this.getterCurrency);
    },
    arr() {
      return Object.entries(this.getterCurrency);
    },
    result() {
      let mult;
      for (let j of this.arr) {
        if (j.includes(this.firstValuteAbbr)) {
          mult = j[1];
        }
      }
      for (let i of this.arr) {
        if (i.includes(this.secondValuteAbbr)) {
          if (this.secondValuteAbbr === this.firstValuteAbbr) {
            return this.firstValute;
          } else if (this.firstValuteAbbr === 'RUB') {
            return (this.firstValute * i[1]).toFixed(2);
          } else {
            return (this.firstValute * (mult * 100) * (i[1] * 100)).toFixed(2);
          }
        }
      }
    },
  },
  methods: {
    ...mapActions(['getCurrency']),
  },
  mounted() {
    this.getCurrency();
  },
};
</script>

<style scoped>
.v-input {
  width: 100px;
}

.container {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
}
</style>
