<template>
  <v-container fluid>
    <v-container justify-center>
      <v-layout row wrap>
        <v-flex xs12 text-center>
          <h1 class="font-weight-bold text-h5 text-md-h4">
            <span class="font-family-accent"
              >俺の<br class="d-md-none" />{{ getThemeKeyword }}たち</span
            >
          </h1>
        </v-flex>

        <v-flex xs12 mt-10 pb-10 text-center>
          <router-link :to="{ name: 'registform' }">
            <v-btn tile x-large color="secondary">
              {{ getThemeKeyword }}を追加する
            </v-btn>
          </router-link>
        </v-flex>

        <v-flex xs12 mt-3 justify-center>
          <v-data-table
            :headers="headers"
            :items="itemData"
            class="itemList"
            no-data-text="データが無いっす。"
            :header-props="headerProps"
            mobile-breakpoint="960"
          >
            <template v-slot:item.action="{ item }">
              <router-link
                :to="{ name: 'registform', params: { item_id: item.id } }"
              >
                <v-icon large class="mr-2">mdi-pencil</v-icon>
              </router-link>
              <v-icon large class="mr-2" @click="deleteConfirm(item.id)"
                >mdi-delete</v-icon
              >
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  created() {
    this.itemData = this.$store.state.itemDataList;
  },
  data() {
    return {
      headers: [
        { text: "店名", value: "name" },
        { text: "電話番号", value: "tel" },
        { text: "最寄駅", value: "station" },
        { text: "備考", value: "remark" },
        { text: "操作", value: "action", sortable: false },
      ],
      itemData: [],
      headerProps: {
        sortByText: "並べ替え",
      },
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
  computed: {
    ...mapGetters(["getThemeKeyword", "getThemeImg"]),
  },
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
