<template>
  <footer class="footer text-center">
    <div class="mysLogo">
      <a href="https://myscreate.com/" target="_blank">
        <img
          src="https://myscreate.com/wp-content/themes/mycreate/common/img/myc_logo_w.svg"
          alt="ma-ya's CREATE"
        />
      </a>
    </div>
    <small class="copyright"
      >© Copyright {{ now }} │ ma-ya's CREATE All rights reserved.</small
    >
  </footer>
</template>

<script>
export default {
  data() {
    return {
      now: "",
    };
  },
  created() {
    const date = new Date();
    this.now = date.getFullYear();
  },
};
</script>

<style scoped lang="scss">
.footer {
  padding-bottom: 1rem;
}
.mysLogo {
  width: 70px;
  height: 35px;
  margin: 0 auto;
  a {
    display: block;
    opacity: 0.3;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
}
.copyright {
  font-size: 0.7rem;
  opacity: 0.3;
}
</style>
