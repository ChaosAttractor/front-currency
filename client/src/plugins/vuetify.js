import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ru from "vuetify/es5/locale/ru";
import "../assets/styles/material-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru },
    current: "ru",
  },
  icons: {
    iconfont: "md",
  },
});
