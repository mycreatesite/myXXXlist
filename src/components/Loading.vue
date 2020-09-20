<template>
  <transition name="fade">
    <div v-if="$store.state.loading" class="loading">
      <div class="border-loading-indicator col-1 row-1"></div>
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
/* Colors */
$borderColor1: rgba(0, 0, 0, 0.25);
$borderColor2: rgba(0, 0, 0, 0.5);
$borderColor3: rgba(0, 0, 0, 0.75);
$borderColor4: rgba(0, 0, 0, 1);

/* Dimensions */
$borderWidthX: 30px;
$borderWidthY: 30px;

@keyframes border-loading-indicator-row-1 {
  0% {
    border-color: $borderColor1;
    border-top-color: $borderColor4;
  }
  25% {
    border-color: $borderColor1;
    border-right-color: $borderColor4;
  }
  50% {
    border-color: $borderColor1;
    border-bottom-color: $borderColor4;
  }
  75% {
    border-color: $borderColor1;
    border-left-color: $borderColor4;
  }
  100% {
    border-color: $borderColor1;
    border-top-color: $borderColor4;
  }
}
.border-loading-indicator {
  width: 0px;
  height: 0px;
  position: absolute;
  margin: -($borderWidthY) 0 0 - ($borderWidthX);
  border: 0px solid $borderColor4;
  border-width: $borderWidthY $borderWidthX;
}
.border-loading-indicator.row-1 {
  animation: border-loading-indicator-row-1 750ms linear infinite;
}
.border-loading-indicator.col-1 {
  width: $borderWidthX;
  height: $borderWidthY;
  border-width: ($borderWidthY / 2) ($borderWidthX / 2);
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #202020;
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
