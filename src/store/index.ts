import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import vueConfig from "../../vue.config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    loading: true,
    loginUser: null,
    itemDataList: [],
    theme: {
      title: vueConfig.pages.index.title,
      keyword: vueConfig.pages.index.keyword,
      img: "/img/theme.png",
      credit: "hoppy-happy.com",
    },
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    closeLoading(state) {
      state.loading = false;
    },
    setLoginUser(state, user) {
      state.loginUser = user;
    },
    deleteLoginUser(state) {
      state.loginUser = null;
    },
    addItemData(state: state, { id, itemData }) {
      itemData.id = id;
      state.itemDataList.push(itemData);
    },
    updateItemData(state: state, { id, itemData }) {
      const index = state.itemDataList.findIndex(
        (itemData: any) => itemData.id === id
      );
      state.itemDataList[index] = itemData;
    },
    deleteItemData(state, { id }) {
      const index = state.itemDataList.findIndex(
        (itemData: any) => itemData.id === id
      );
      state.itemDataList.splice(index, 1);
    },
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    closeLoading({ commit }) {
      commit("closeLoading");
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    fetchItemData({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/itemDataList`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) =>
            commit("addItemData", { id: doc.id, itemData: doc.data() })
          );
        });
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
		logout() {
			firebase.auth().signOut();
    },
    addItemData({ getters, commit }, itemData) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/itemDataList`)
          .add(itemData)
          .then((doc) => {
            commit("addItemData", { id: doc.id, itemData });
          });
      }
    },
    updateItemData({ getters, commit }, { id, itemData }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/itemDataList`)
          .doc(id)
          .update(itemData)
          .then(() => {
            commit("updateItemData", { id, itemData });
          });
      }
    },
    deleteItemData({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/itemDataList`)
          .doc(id)
          .delete()
          .then(() => {
            commit("deleteItemData", { id });
          });
      }
    },
  },
  getters: {
    userName: (state: state): string | null =>  {console.log(state.itemDataList);return state.loginUser ? state.loginUser.displayName : ""},
    photoURL: (state: state): string | null => (state.loginUser ? state.loginUser.photoURL : ""),
    uid: (state: state): string | null => (state.loginUser ? state.loginUser.uid : null),
    getItemDataById: (state) => (id: string | void) =>
      state.itemDataList.find((itemData: itemData) => itemData.id === id),
    getThemeKeyword: (state): string => state.theme.keyword,
    getThemeImg: (state): string => state.theme.img,
    getThemeCredit: (state): string => state.theme.credit,
  },
});
