<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>俺のホッピー居酒屋管理帳</h1>
        <p>
          俺のホッピー居酒屋管理帳をご利用の方は、Googleアカウントでホッピーしてください。
        </p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color="info" @click="login"
          >Googleアカウントでホッピーする</v-btn
        >
      </v-flex>
    </v-layout>
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
