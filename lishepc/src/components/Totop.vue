<template>
	<div class="toTop" v-show="btnFlag">
		<slot name="nav-float-l"></slot>
		<a href="#">
			<i class="kefu"></i>
			<br>联系客服</a>
		<div class="saomabox"><i class="saoma"></i><br>扫码下载</div>
		<div @click="backTop" class="totopbox"><i class="totop"></i><br>回到顶部</div>
	</div>
</template>

<script>
	export default {
		name: "toTop",
		data: function() {
			return {
				btnFlag: false
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},
		methods: {
			backTop() {
				const that = this
				let timer = setInterval(() => {
					let ispeed = Math.floor(-that.scrollTop / 5)
					document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
					if (that.scrollTop === 0) {
						clearInterval(timer)
					}
				}, 16)
			},
			scrollToTop() {
				const that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop > 200) {
					that.btnFlag = true
				} else {
					that.btnFlag = false
				}
			}

		}
	}
</script>

<style lang="less">
	.toTop {
		width: 100px;
		z-index: 99;
		position: fixed;
		right: 20px;
		top: 200px;
		background: #fff;
		display: flex;
		text-align: center;
		flex-direction: column;
		font-size: 12px;
		padding: 20px;
		color: #666;

		a {
			color: #666;
			margin: 15px 0;

			&:hover i {
				background: url(../assets/imgs/icon/icon_footer_select3.png);
			}
		}

		>div {
			margin: 15px 0;

			&:hover {
				cursor: pointer;
			}

		}

		.saomabox {
			&:hover i {
				background: url(../assets/imgs/icon/icon_footer_select2.png);
			}
		}

		.totopbox {
			&:hover i {
				background: url(../assets/imgs/icon/icon_footer_select1.png);
			}
		}

		i {
			display: inline-block;
			width: 35px;
			height: 35px;

		}

		.kefu {
			background: url(../assets/imgs/icon/icon_footer3.png);

		}

		.saoma {
			background-image: url(../assets/imgs/icon/icon_footer2.png);
		}

		.totop {
			background-image: url(../assets/imgs/icon/icon_footer1.png);
		}
	}
</style>
