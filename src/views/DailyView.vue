<template>
  <div>

    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th v-for="header in headers" class="text-center">
            {{header}}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in daily"
            :key="item.NumCode"
        >
          <td>{{ item.NumCode }}</td>
          <td>{{ item.CharCode }}</td>
          <td>{{item.Nominal}}</td>
          <td>{{item.Name}}</td>
          <td class="flex flex-center" style="gap: 5px">{{item.Value}}<StonksIcon :value="item.Value" :previous="item.Previous"/></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios"
import StonksIcon from "../components/StonksIcon.vue"
export default {
  name: "About",
  components: [StonksIcon],
  data () {
    return {
      headers: ['Цифр. код','Бук. код','Единиц','Валюта','Курс'],
      daily: [],

    }
  },
  mounted() {
    axios.get('http://localhost:3000/daily').then((res) => this.daily = JSON.parse(res.data[0].valute))
  }
}
</script>

