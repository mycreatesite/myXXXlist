<template>
  <v-container fluid>
    <v-container justify-center>
      <v-layout row wrap>
        <v-flex xs12 text-center>
          <h1 class="font-weight-bold text-h5 text-md-h4">
            <span class="font-family-accent">
              <span class="accentImgGroup">
                <span class="accentImg">
                  <logo />
                </span>
                の
              </span>
              {{ getThemeKeyword }}たち
            </span>
          </h1>
        </v-flex>

        <v-flex xs12 mt-10 pb-10 text-center>
          <router-link :to="{ name: 'registform' }">
            <v-btn outlined tile color="accent" class="btn-maxLarge">
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
                <v-btn class="ma-2" tile outlined color="secondary">
                  <v-icon left>mdi-pencil</v-icon> 編集
                </v-btn>
              </router-link>
              <v-btn
                class="ma-2"
                tile
                outlined
                color="disable"
                @click="deleteConfirm(item.id)"
              >
                <v-icon left>mdi-delete</v-icon> 削除
              </v-btn>
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
import Logo from "@/components/Logo";
export default {
  components: {
    Logo,
  },
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
<style lang="scss">
.accentImgGroup {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}
.accentImg {
  width: 80px;
  height: 80px;
  margin-right: 0.5rem;
  svg {
    fill: #fff;
    width: 100%;
    height: 100%;
  }
}
</style>
