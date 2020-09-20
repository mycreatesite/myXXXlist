<template>
  <v-app>
    <div class="themeImg">
      <img :src="getThemeImg" :alt="`俺の${getThemeKeyword}管理帳`" />
    </div>
    <v-app-bar app color="primary" dark v-if="$store.state.loginUser">
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>俺の{{ getThemeKeyword }}管理帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav />
    <v-main>
      <router-view :themeKeyword="getThemeKeyword" :themeImg="getThemeImg" />
    </v-main>
    <div class="logo">
      <Logo />
    </div>
    <Loading />
  </v-app>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import SideNav from "@/components/SideNav";
import Loading from "@/components/Loading";
import Logo from "@/components/Logo";

export default {
  name: "App",
  components: {
    SideNav,
    Loading,
    Logo,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.fetchItemData();
        if (this.$router.currentRoute.name === "home") {
          this.$router.push({ name: "saveditems" }).catch(() => {});
        }
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: "home" }).catch(() => {});
      }
    });
  },
  beforeUpdate() {
    switch (this.$router.currentRoute.name) {
      case "home":
        document.body.className = "home";
        break;
      case "saveditems":
        document.body.className = "saveditems second";
        break;
      case "registform":
        document.body.className = "registform second";
        break;
    }
  },
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
      "fetchItemData",
    ]),
  },
  computed: {
    ...mapGetters(["getThemeKeyword", "getThemeImg"]),
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/common.scss";
</style>
