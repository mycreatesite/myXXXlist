<template>
  <v-container fluid fill-height align-center>
    <v-container text-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="pb-6">俺のホッピー居酒屋<br class="d-sm-none" />管理帳</h1>
          <p>
            俺のホッピー居酒屋管理帳をご利用の方は、Googleアカウントでホッピーしてください。
          </p>
        </v-flex>

        <v-flex xs12 mt-5>
          <v-btn x-large color="secondary" @click="login"
            >Googleアカウントでホッピーする</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
