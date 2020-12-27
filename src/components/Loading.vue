<template>
  <transition name="fade">
    <div v-if="$store.state.loading" class="loading">
      <div class="loadingContent">
        <div class="loadingLogo">
          <logo />
        </div>
        <p class="loadingText">しばし待て</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import Logo from "@/components/Logo.vue";
	export default Vue.extend({
  components: {
    Logo,
  },
  mounted() {
    firebase.auth().onAuthStateChanged(() => {
      this.closeLoading();
    });
  },
  methods: {
    ...mapActions(["login", "closeLoading"]),
  },
});
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #202020;
  .loadingContent {
    opacity: 0.7;
  }
  .loadingText {
    font-size: 0.875rem;
    color: $secondary;
  }
  .loadingLogo {
    fill: $secondary;
    animation: logoRoll 3s linear infinite;
    transform-origin: center center;
    width: 70px;
    height: 70px;
    margin-bottom: 0.5rem;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @keyframes logoRoll {
    100% {
      transform: rotate(360deg);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s cubic-bezier(0.85, 0, 0.15, 1);
  transform-origin: bottom;
}
.fade-enter,
.fade-leave-to {
  transform: scaleY(0);
}
</style>
