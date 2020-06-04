<template>
	<div class="homelist">
		<h2>{{txt_title}}</h2>
		<div class="component" :class="{ceremony:flag()}">
			<div class="titlebg">
				<img :src="title_img" alt="">
			</div>
			<slot name="componentItem"></slot>
			<slot name="ceremony"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'homeList',
		props: ['title_img', 'txt_title', 'ceremony'],
		methods: {
			flag() {
				if (this.ceremony == 'ceremony') {
					return true
				}
			}
		}
	}
</script>

<style lang="less">
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

			img {
				width: 100%;
				height: 100%;
			}
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
</style>
