<template>
	<div class="payment">
		<div class="payment_content">
			<div class="payment_content_top">
				<div>
					订单金额：<span>129.00</span>元
				</div>
			</div>
			<div class="payment_content_middle">
				<ul>
					<li>
						<img class="payment_content_middle_icon" src="../../assets/imgs/icon/pay_icon1.png" alt="">
						积分支付方式
					</li>
					<li>
						<el-radio-group v-model="radio3" size="medium " text-color>
							<el-radio label="1" border>
								<!-- <img src="../../assets/imgs/icon/pay_ic_exclusive.png" alt=""> -->
							积分支付</el-radio>
						</el-radio-group>
						&nbsp;&nbsp;
						<span>可用：0.00元/不可用：0.00元<a href="#">(查看)</a></span>
					</li>
				</ul>
				<ul>
					<li>
						<img class="payment_content_middle_icon" src="../../assets/imgs/icon/pay_icon1.png" alt="">
						现金支付方式
					</li>
					<li>
						<el-radio-group v-model="radio4" size="medium " text-color>
							<el-radio label="2" border>
								<img src="../../assets/imgs/icon/payment_ic_wepay.png" alt="">
							微信支付</el-radio>
							<el-radio label="3" border>
								<img src="../../assets/imgs/icon/payment_ic_alipay.png" alt="">
								支付宝</el-radio>
						</el-radio-group>
					</li>
				</ul>
			</div>
			<div class="payment_content_bottom">
				<div class="need">
					<div>
						订单金额：<span>129.00</span>元
					</div>
				</div>
				<div class="payment_content_bottom_txt">
					现金与积分混合支付的订单，需先支付积分再使用支付宝支付现金部分金额，如果积分支付成功，支付宝支付不成功，则积分将在24小时后返回个人账户，或在【个人中心】查询当前订单，点击【取消订单】，可即时返回支付积分。
				</div>
				<div class="payment_content_bottom_btn">
					<button>立即支付</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "payment",
		data() {
			return {
				radio1: '1',
				radio2: '1',
				radio3: '1',
				radio4: '1'
			};
		},
		mounted() {

		},
		methods: {

		},
	}
</script>

<style lang="less">
	.el-radio-group {}

	.el-radio.is-bordered.is-checked {
		border: 2px solid #f55053;
	}

	.el-radio--medium.is-bordered {
		height: 45px;
		padding: 15px 20px 0 10px;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: black;

		img {
			width: 25px;
			position: relative;
			bottom: 5px;
			right: 5px;
		}
	}

	.el-radio__input.is-checked .el-radio__inner {
		border: none;
		background: url(../../assets/imgs/icon/cart_ic_choose_select.png) no-repeat;
		background-size: cover;

		&::after {
			background: none;
		}

	}

	.el-radio__label {
		img {
			width: 25px;
			position: relative;
			bottom: 5px;
			right: 5px;
		}
	}

	.payment {
		background: #f0f0f0;
		padding: 20px 0;

		.payment_content {
			width: 1200px;
			margin: 0 auto;
			background: #ffffff;
			padding: 20px;

			.payment_content_top {
				text-align: right;
				padding-bottom: 15px;
				border-bottom: 1px solid #e6e6e6;
				margin-bottom: 30px;
				font-size: 12px;

				span {
					font-size: 25px;
					color: #f55053;
				}
			}

			.payment_content_middle {
				ul {
					margin-bottom: 30px;

					li {
						&:nth-child(1) {
							margin-bottom: 20px;
						}

						&:nth-child(2) {
							font-size: 12px;

							>span {
								margin-left: 20px;

								a {
									color: #4fa2ff;
									margin-left: 10px;
								}
							}
						}
					}
				}

				.payment_content_middle_icon {
					display: inline-block;
					width: 15px;
					height: 15px;
					margin-right: 5px;
				}
			}


			.payment_content_bottom {
				.need {
					text-align: right;
					padding-top: 15px;
					border-top: 1px solid #e6e6e6;
					margin-top: 30px;
					font-size: 12px;

					span {
						font-size: 25px;
						color: #f55053;
					}
				}

				.payment_content_bottom_txt {
					line-height: 22px;
					font-size: 12px;
					color: #666666;
					display: inline-block;
					margin-top: 20px;
				}

				.payment_content_bottom_btn {
					text-align: right;
					button {
						font-size: 18px;
						color: #fff;
						background: #f55053;
						border-radius: 4px;
						width: 120px;
						height: 40px;
						line-height: 40px;
						text-align: center;
						display: inline-block;
						bottom: 0;
						right: 0;
						cursor: pointer;
						transition: 0.3s;
						-webkit-transition: 0.3s;
						border: none;
						outline: none;
					}

				}
			}
		}
	}
</style>
