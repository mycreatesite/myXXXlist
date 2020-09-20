<template>
  <v-container fluid fill-height align-center>
    <v-container text-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="siteTitle pb-16 font-family-accent">
            <span class="titleBox">
              <span class="titleBoxInner">
                <span class="line first">─ORENO─</span>
                <span class="lineGroup">
                  <span class="line second">ホッピー</span>
                  <span class="line third">居酒屋</span>
                  <span class="line last">管理帳</span>
                </span>
              </span>
            </span>
          </h1>
          <p>
            俺の<span>{{ getThemeKeyword }}</span
            >管理帳をご利用の方は、<br />Googleアカウントでホッピーしてください。
          </p>
        </v-flex>

        <v-flex xs12 mt-8>
          <v-btn x-large color="google" @click="login" class="btn-start py-9"
            >Googleアカウントで<br class="d-md-none" />ホッピーする</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["login"]),
  },
  computed: {
    ...mapGetters(["getThemeKeyword", "getThemeImg"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin";

.siteTitle {
  .titleBox {
    display: block;
    width: 60vw;
    height: 60vw;
    margin: 0 auto;
    padding: 2vw;
    border-radius: 4px;
    font-size: calc(1.4rem + 0.4vw);
    background: linear-gradient(145deg, #232323, #1d1d1d),
      url("/img/pattern.png");
    box-shadow: 9px 9px 15px #121212, -9px -9px 15px #2e2e2e;
    .titleBoxInner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      border: 6px solid rgba(white, 0.05);
    }
    .first {
      font-size: 1rem;
      letter-spacing: 0.5vw;
      margin-bottom: 1vw;
      color: $secondary;
    }
    .lineGroup {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .line:not(.first) {
      text-shadow: 0 0 15px rgba(#fff, 0.8);
      &.third,
      &.last {
        letter-spacing: 0.75vw;
      }
    }
  }
}
@include media-up(sm) {
  .siteTitle {
    .titleBox {
      width: 20vw;
      height: 20vw;
      min-width: 250px;
      min-height: 250px;
      padding: 1vw;
      font-size: calc(1.2rem + 1vw);
    }
  }
  .rowSecond,
  .rowThird {
    letter-spacing: 0.6vw;
  }
}
</style>
