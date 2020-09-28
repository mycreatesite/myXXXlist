<template>
	<v-container fluid fill-height>
		<v-container pb-16 pb-md-0 pt-16 pt-md-0 text-center>
			<v-layout row wrap>
				<v-flex xs12>
					<h1 class="siteTitle mb-8 mb-md-14 font-family-accent">
						<span class="titleBox">
							<span class="titleBoxInner">
								<span class="line first">
									<span class="asterisk">*</span>
									ORENO
									<span class="asterisk">*</span>
								</span>
								<span class="lineGroup">
									<span class="line second">ホッピー</span>
									<span class="line third">居酒屋</span>
									<span class="line last">管理帳</span>
								</span>
							</span>
						</span>
					</h1>
					<p class="description">
						俺の<span>{{ getThemeKeyword }}</span>管理帳をご利用の方は、<br />Googleアカウントでホッピーしてください。<br />
						自分だけのホッピー居酒屋リストを作成しよう。
					</p>
				</v-flex>

				<v-flex xs12 mt-4 mt-md-8>
					<v-btn color="accent" outlined tile @click="login" class="btn-maxLarge">
						<v-icon left>mdi-glass-mug-variant</v-icon>Googleアカウントで<br class="d-md-none" />ホッピーする
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</v-container>
</template>

<script>
	import { mapActions } from "vuex";
	import { mapGetters } from "vuex";
	export default {
		methods: {
			...mapActions(["login"]),
		},
		computed: {
			...mapGetters(["getThemeKeyword", "getThemeImg"]),
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/mixin";

	.description {
		font-size: 0.8rem;
		margin-bottom: 0;

		@include media-up(sm) {
			font-size: 1rem;
		}
	}

	.siteTitle {
		.titleBox {
			display: block;
			width: 60vw;
			height: 60vw;
			margin: 0 auto;
			padding: 2vw;
			font-size: calc(1.4rem + 1vw);
			border-radius: 4px;
			background: linear-gradient(145deg, #222222, #1d1d1d);
			box-shadow: 6px 6px 12px #0d0d0d, -6px -6px 12px #333333;

			.titleBoxInner {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 100%;
				border: 6px solid rgba(white, 0.05);
			}

			.first {
				font-size: 0.8rem;
				letter-spacing: 1vw;
				color: $secondary;

				.asterisk {
					vertical-align: -15%;
				}
			}

			.lineGroup {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.line:not(.first) {
				text-shadow: 0 0 15px rgba(#fff, 0.8);

				&.third,
				&.last {
					letter-spacing: 2vw;
				}
			}
		}
	}

	@include media-up(sm) {
		.siteTitle {
			.titleBox {
				width: 20vw;
				height: 20vw;
				min-width: 250px;
				min-height: 250px;
				padding: 1vw;
				font-size: calc(1.2rem + 1vw);

				.line:not(.first) {

					&.third,
					&.last {
						letter-spacing: 0.8vw;
					}
				}

				.first {
					font-size: 0.9rem;
					letter-spacing: 0.4vw;
					margin-bottom: 0.5vw;
					color: $secondary;
				}
			}
		}
	}
</style>