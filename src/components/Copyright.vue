<template>
	<footer class="footer text-center">
		<div class="mysLogo">
			<a href="https://myscreate.com/" target="_blank" rel="noopener">
				<img src="https://myscreate.com/wp-content/themes/mycreate/common/img/myc_logo_w.svg" alt="ma-ya's CREATE" />
			</a>
		</div>
		<div class="copyright">
			<small>© Copyright {{ now }} │ ma-ya's CREATE All rights reserved.</small>
		</div>
		<div class="credit">
			<small>photo by {{ getThemeCredit }}</small>
		</div>
	</footer>
</template>

<script lang="ts">
	import Vue from "vue";
	import { mapGetters } from "vuex";
	export default Vue.extend({
		data() {
			return {
				now: 0,
			};
		},
		created() {
			const date = new Date();
			this.now = date.getFullYear();
		},
		computed: {
			...mapGetters(["getThemeCredit"]),
		},
	});
</script>

<style scoped lang="scss">
	.footer {
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.mysLogo {
		width: 70px;
		height: 35px;

		a {
			display: block;
			opacity: 0.3;
			transition: opacity 0.3s;

			&:hover {
				opacity: 0.5;
			}
		}
	}

	.copyright,
	.credit {
		small {
			font-size: 0.75rem;
			opacity: 0.3;
		}
	}

	.copyright {
		margin-top: 0.3rem;
	}

	.credit {
		margin-top: -0.5rem;
	}
</style>