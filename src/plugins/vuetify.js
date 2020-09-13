import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#202020",
        secondary: "#af8a1e",
        accent: "#cddc39",
        error: "#ffeb3b",
        warning: "#ffc107",
        info: "#ff5722",
        success: "#795548",
      },
    },
  },
});
