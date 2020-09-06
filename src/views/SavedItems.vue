<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>居酒屋一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'registform' }">
          <v-btn color="info">
            ホッピー居酒屋を追加する
          </v-btn>
        </router-link>
      </v-flex>

      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers="headers" :items="itemData">
          <template v-slot:item.action="{ item }">
            <router-link
              :to="{ name: 'registform', params: { item_id: item.id } }"
            >
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
            <v-icon small class="mr-2" @click="deleteConfirm(item.id)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.itemData = this.$store.state.itemDataList;
  },
  data() {
    return {
      headers: [
        { text: "名前", value: "name" },
        { text: "電話番号", value: "tel" },
        { text: "メールアドレス", value: "email" },
        { text: "住所", value: "address" },
        { text: "操作", value: "action", sortable: false },
      ],
      itemData: [],
    };
  },
  methods: {
    deleteConfirm(id) {
      if (confirm("削除しますか？")) {
        this.deleteItemData({ id });
      }
    },
    ...mapActions(["deleteItemData"]),
  },
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
