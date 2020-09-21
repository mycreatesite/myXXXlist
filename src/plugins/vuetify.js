import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
import ja from "vuetify/es5/locale/ja";

export default new Vuetify({
  lang: {
    locales: { ja },
    current: "ja",
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#202020",
        secondary: "#af8a1e",
        accent: "#DCC539",
        error: "#ffeb3b",
        warning: "#ffc107",
        info: "#ff5722",
        success: "#795548",
        disable: "#888888",
      },
    },
  },
});
