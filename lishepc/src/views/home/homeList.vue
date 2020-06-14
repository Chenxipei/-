<template>
	<div class="homelist">
		<h2>{{txt_title}}</h2>
		<div class="component" :class="{ceremony:flag()}">
			<slot name="titlebg">
				<slot name="timer"></slot>
			</slot>
			<slot name="bgimg"></slot>
			<slot name="componentItem"></slot>
			<slot name="ceremony"></slot>
			<slot name="qingbox"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'homeList',
		props: ['title_img', 'txt_title', 'ceremony'],
		data: function() {
			return {}
		},
		mounted() {

		},
		methods: {
			flag() {
				if (this.ceremony == 'ceremony') {
					return true
				}
				if (this.qingdan == "qingdan") {
					return true
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.homelist {
		margin: 30px 0;
	}

	.component {
		margin: 10px 0;
		width: 100%;

		img {
			width: 100%;
			height: 100%;
		}

		&::after {
			display: block;
			content: "";
			clear: both;
		}

		>div {
			float: left;
			margin-bottom: 10px;
			margin-left: 10px;

			&:nth-child(1) {
				margin-left: 0;
			}

			&:nth-child(1),
			&:nth-child(4),
			&:nth-child(5) {
				margin-bottom: 0;
			}
		}

		.titlebg {
			width: 300px;
			height: 400px;
			position: relative;

			img {
				width: 100%;
				height: 100%;
			}

			.timer {
				position: absolute;
				width: 160px;
				top: 50%;
				left: 50%;
				transform: translateX(-50%);
				text-align: center;

				.timer_title {
					padding: 10px 0;
					font-size: 18px;
				}

				.timer_time {
					display: flex;
					color: #ff4c4c;
					justify-content: space-between;
					align-items: center;
					font-size: 20px;

					>div {
						padding: 10px;
						border-radius: 5px;
						text-align: center;
						background: #ff4c4c;
						color: #fff;
						font-size: 20px;
					}
				}
			}
		}

		.bgimg {
			width: 416px;
			height: 537px;
		}

		.componentItem {
			box-sizing: border-box;
			padding: 20px 0;
			width: 440px;
			height: 195px;
			background: #fff;
			display: flex;

			.goodsImg {
				width: 200px;
				height: 100%;
			}

			.item {
				margin-left: 10px;

				.title {
					font-size: 20px;
					width: 200px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.item_2 {
					margin-top: 50px;
				}

				.tag {
					display: inline-block;
					margin-top: 10px;
					font-size: 16px;
					color: #fff;
					background: #de6f38;
					padding: 3px 5px;
				}
			}

			.price {
				font-size: 16px;
				color: red;

				span {
					font-size: 30px;
				}
			}

			.sold {
				position: relative;

				span {
					position: absolute;
					font-size: 10px;
					color: gray;
					right: -15px;
					top: 3px;
				}
			}
		}
	}

	.ceremony {
		>div {
			margin: 0;
			width: 220px;
			height: 200px;

			&:first-child {
				margin-right: 20px;
			}

			&:nth-child(2),
			&:last-child {
				width: 440px;
			}
		}
	}



	.qingdan {
		img {
			width: 100%;
		}

		.goodsImg {
			width: 371px;
			height: 261px;
			margin: 0;
		}
	}
</style>
