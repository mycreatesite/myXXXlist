<template>
  <transition name="fade">
    <div v-show="$store.state.loading" class="loading">
      <div>
        Loading
      </div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import firebase from "firebase";
export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged(() => {
      this.closeLoading();
    });
  },
  methods: {
    ...mapActions(["login", "closeLoading"]),
  },
};
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #1976d2;
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
