<template>
  <div>
    <!--            // todo class-->
    <v-simple-table fixed-header height="900px">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="header in headers" class="text-center">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getterDaily" :key="item.NumCode">
            <td>{{ item.NumCode }}</td>
            <td>{{ item.CharCode }}</td>
            <td>{{ item.Nominal }}</td>
            <td>{{ item.Name }}</td>
<!--            // todo class-->
            <td class="flex flex-center" style="gap: 5px">
              {{ item.Value }}
              <StonksIcon :value="item.Value" :previous="item.Previous" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import StonksIcon from '../components/StonksIcon.vue';
export default {
  components: { StonksIcon },
  data() {
    // todo вынести в entities
    return {
      headers: ['Цифр. код', 'Бук. код', 'Единиц', 'Валюта', 'Курс'],
    };
  },
  computed: mapGetters(['getterDaily']),
  methods: mapActions(['getDaily']),
  mounted() {
    this.getDaily();
  },
};
</script>
