<template>
  <v-container fluid>
    <v-container text-xs-center>
      <v-row justify="center">
        <v-col cols="12" class="text-center pb-10">
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
        </v-col>

        <v-col cols="12" md="6" class="mt-5">
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
                <v-textarea
                  auto-grow
                  v-model="itemData.remark"
                  label="備考"
                ></v-textarea>
                <v-container class="pt-0">
                  <v-row>
                    <v-col cols="6">
                      <v-btn
                        tile
                        outlined
                        x-large
                        block
                        color="disable"
                        @click="$router.push({ name: 'saveditems' })"
                        >キャンセル</v-btn
                      >
                    </v-col>
                    <v-col cols="6">
                      <v-btn
                        tile
                        x-large
                        block
                        color="secondary"
                        class="ml-2"
                        @click="submit"
                      >
                        <v-icon left>mdi-glass-mug-variant</v-icon>保存
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
