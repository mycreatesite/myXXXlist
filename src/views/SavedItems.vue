<template>
  <v-container fluid>
    <v-container justify-center class="px-0">
      <v-row>
        <v-col cols="12" class="text-center">
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
        </v-col>

        <v-col cols="12" class="text-center mt-4 pb-8">
          <router-link :to="{ name: 'registform' }">
            <v-btn outlined tile color="accent" class="btn-maxLarge">
              <v-icon left>mdi-plus</v-icon>
              {{ getThemeKeyword }}を追加する
            </v-btn>
          </router-link>
        </v-col>

        <v-col cols="12" justify-center class="mt-3">
          <v-data-table
            :headers="headers"
            :items="itemData"
            :header-props="headerProps"
            mobile-breakpoint="960"
            class="itemList"
            :no-data-text="emptyText"
          >
            <template v-slot:item.tel="{ item }">
              <v-btn block large tile color="secondary">
                <v-icon left>mdi-phone-in-talk</v-icon>
                <a :href="`tel:${item.tel}`">{{ item.tel }}</a>
              </v-btn>
            </template>
            <template v-slot:item.remark="{ item }">
              <div class="js-autoLink">{{ item.remark }}</div>
            </template>
            <template v-slot:item.action="{ item }">
              <v-row class="wrap">
                <v-col cols="6" md="12">
                  <router-link
                    :to="{ name: 'registform', params: { item_id: item.id } }"
                    class="d-block"
                  >
                    <v-btn large block tile outlined color="secondary">
                      <v-icon left>mdi-pencil</v-icon>
                      編集
                    </v-btn>
                  </router-link>
                </v-col>
                <v-col cols="6" md="12">
                  <v-btn
                    tile
                    block
                    large
                    outlined
                    color="disable"
                    @click="deleteConfirm(item.id)"
                  >
                    <v-icon left>mdi-delete</v-icon> 削除
                  </v-btn>
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
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
  mounted() {
    const wait = 2000;
    setTimeout(function() {
      const remarks = document.querySelectorAll(".js-autoLink");
      Array.prototype.forEach.call(remarks, function(el) {
        el.innerHTML = autoLink(el.innerHTML);
      });
    }, wait);
    function autoLink(str) {
      const regUrl = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;
      const makeLink = (str) => {
        return `<a href="${str}" target="_blank">${str}</a>`;
      };
      return str.replace(regUrl, makeLink);
    }
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
      emptyText: `ついつい忘れがちな「あの居酒屋ホッピー置いてたっけ？」
									全人類のそんなお悩みを 完 全 解 決 。
									さあ自分だけのホッピー居酒屋リストを作成するがよい。`,
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
  margin-bottom: 0.75rem;
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
.js-autoLink {
  a {
    color: $secondary !important;
  }
}
</style>
