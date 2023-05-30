<template>
  <v-app>
    <v-main>
      <div>
        <v-btn text :to="{ name: 'Currency' }" exact>Конвертер валют</v-btn>
        <v-btn text :to="{ name: 'Daily' }" exact>Курсы валют</v-btn>
      </div>

      <router-view />
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'Base',
  components: {
  },
};
</script>
