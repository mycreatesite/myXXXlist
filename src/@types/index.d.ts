interface state {
  loginUser: null | {
    displayName: string | null;
    uid: string | null;
    photoURL: string | null;
  }
  itemDataList: string[];
  theme: {
    title: string;
    keyword: string;
    img: string;
    credit: string;
  }
}

interface itemData {
  id: string;
  name: string;
  remark: string;
  station: string;
  tel: string;
}