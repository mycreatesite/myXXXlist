<template>
  <v-app>
    <div class="themeImg">
      <img :src="getThemeImg" :alt="`俺の${getThemeKeyword}管理帳`" />
    </div>
    <div class="logo">
      <Logo />
    </div>
    <v-app-bar app color="primary" dark v-if="$store.state.loginUser">
      <div class="menuLogo" @click.stop="toggleSideMenu">
        <Logo />
      </div>
      <v-toolbar-title>俺の{{ getThemeKeyword }}管理帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="logout"
          ><v-icon left>mdi-logout-variant</v-icon>ログアウト</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <SideNav />
    <v-main>
      <transition name="router" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Loading />
    <Copyright />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import SideNav from "@/components/SideNav.vue";
import Loading from "@/components/Loading.vue";
import Logo from "@/components/Logo.vue";
import Copyright from "@/components/Copyright.vue";

export default Vue.extend({
  name: "App",
  components: {
    SideNav,
    Loading,
    Logo,
    Copyright,
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
});
</script>
<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/common.scss";
</style>
