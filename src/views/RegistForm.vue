<template>
  <v-container fluid>
    <v-container text-xs-center>
      <v-layout row wrap justify-center>
        <v-flex xs12 pb-10 class="text-center">
          <h1 class="font-weight-bold text-h5 text-md-h4 font-family-accent">
            <span
              v-if="!$router.currentRoute.params.item_id"
              class="font-family-accent"
              >{{ getThemeKeyword }}を<br class="d-md-none" />追加する</span
            >
            <span v-else class="font-family-accent">
              {{ getThemeKeyword }}を<br class="d-md-none" />編集する
            </span>
          </h1>
        </v-flex>

        <v-flex xs12 md6 mt-5>
          <v-card>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="itemData.name"
                  label="店名"
                ></v-text-field>
                <v-text-field
                  v-model="itemData.tel"
                  label="電話番号"
                ></v-text-field>
                <v-text-field
                  v-model="itemData.station"
                  label="最寄駅"
                ></v-text-field>
                <v-text-field
                  v-model="itemData.remark"
                  label="備考"
                ></v-text-field>
                <div class="text-center">
                  <v-btn
                    tile
                    outlined
                    large
                    color="disable"
                    @click="$router.push({ name: 'saveditems' })"
                    >キャンセル</v-btn
                  >
                  <v-btn
                    tile
                    large
                    color="secondary"
                    class="ml-2"
                    @click="submit"
                    >保存</v-btn
                  >
                </div>
              </v-form>
            </v-card-text>
          </v-card>
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
    if (!this.$route.params.item_id) return;
    const itemData = this.$store.getters.getItemDataById(
      this.$route.params.item_id
    );
    if (itemData) {
      this.itemData = itemData;
    } else {
      this.$router.push({ name: "saveditems" });
    }
  },
  data() {
    return {
      itemData: {},
    };
  },
  methods: {
    submit() {
      if (this.$route.params.item_id) {
        this.updateItemData({
          id: this.$route.params.item_id,
          itemData: this.itemData,
        });
      } else {
        this.addItemData(this.itemData);
      }
      this.$router.push({ name: "saveditems" });
      this.itemData = {};
    },
    ...mapActions(["addItemData", "updateItemData"]),
  },
  computed: {
    ...mapGetters(["getThemeKeyword", "getThemeImg"]),
  },
};
</script>
