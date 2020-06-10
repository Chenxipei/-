<template>
	<div class="sellementHead">
		<div class="top">
			<div class="warp-left">
				<!-- <img src="../../assets/imgsrc/settlement/1590561641_90344.png" alt /> -->
				<span>结算页</span>
			</div>
			<div class="warp-rigth">
				<el-steps :active="2" align-center>
					<el-step title="我的购物车"></el-step>
					<el-step title="填写核对订单信息"></el-step>
					<el-step title="成功提交订单"></el-step>
				</el-steps>
			</div>
		</div>
		<!-- 收货地址 -->
		<div class="my-address">
			<div class="address-list">
				<div class="item" v-for="(tab,i) in addressData" :key="i">
					<div class="name-box">
						{{tab.name}}
						<i v-if="i===0" class="icon el-icon-check"></i>
					</div>
					<div class="name">{{tab.name}}</div>
					<div class="addrress">{{tab.area.join("")}}{{tab.address}}</div>
					<div class="phone">{{tab.phone}}</div>
					<div class="edit">
						<a class="table-edit" href="#" @click.prevent="toFirst(i)" v-if="i!==0">设为默认</a>
						<a class="table-edit" href="#" @click.prevent="editAddress(i)">编辑</a>
						<a class="table-edit" href="#" @click.prevent="delAddress(i)" v-if="i!==0">删除</a>
						<a class="table-edit" href="#" v-if="i===0">默认地址不可删除</a>
					</div>
				</div>
			</div>
			<div class="address-menu">
				<div class="menu-left">显示全部地址</div>
				<div class="menu-right" @click="dialogFormVisible = true">+新增收货地址</div>
			</div>
			<!-- 商品列表 -->
			<div class="wrap">
				<h4 class="clear title">确认订单信息</h4>
				<div class="commodity_head clear">
					<div class="commodity">店铺宝贝</div>
					<div class="comm_attr">商品属性</div>
					<div class="price">单价</div>
					<div class="quantity">数量</div>
					<div class="sum">优惠方式</div>
					<div class="controller">小计</div>
				</div>
			</div>
			<div class="shop_list_wrap">
				<div class="shop_tit">
					<div class="shop_name">
						<!-- <img src="../../assets/imgsrc/settlement/house.png" alt /> -->
						<a href="#" class="name">八马茶业旗舰店</a>
						<span class="shop_kefu">
							<a href="#" class="name1">
								<!-- <img src="../../assets/imgsrc/settlement/pay_ic_service.png" alt />联系客服 -->
							</a>
						</span>
						<span class="shop_text">满1积分包邮</span>
						<a href="#" class="name2">，去凑单></a>
					</div>
				</div>
				<div class="group_item">
					<ul class="shopping_ul">
						<li>
							<a href="#">
								<!-- <img src="https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/images/32/0f/97/00e952f4936be1f30bb871f1dedb4237.jpg?x-oss-process=png/resize,w_100/quality,q_80/format,jpg" -->
								 alt />
							</a>
							<span>八马茶叶 安溪铁观音清香型茶叶新茶 小清新1号铁观音252克</span>
						</li>
						<div class="attr_con">
							<span>包装：独立包装</span>
						</div>
						<div class="comm_price">
							<p class="skuCashPoint">150积分</p>
						</div>
						<div class="number">1</div>
						<div class="you">
							满1积分包邮
							<!-- <img src="../../assets/imgsrc/settlement/you.png" alt /> -->
						</div>
						<div class="sum_text">
							<p class="sum_price">150积分</p>
						</div>
					</ul>
					<p class="inv-note">
						<input type="text" placeholder=" 商品备注（所填内容建议已经和商家达成一致意见，85字以内）" />
					</p>
				</div>
				<p class="bottom">
					<span>普通快递 运费：</span>
					<span>0积分</span>
					<span class="fr">
						总质量:0.25kg；店铺总计:
						<b>150积分</b>
					</span>
				</p>
			</div>
			<!-- 优惠券 -->
			<div class="discounts">
				<h3>优惠券</h3>
				<div class="yhq">
					<select name="couponCode" id="coupon" type="select-one">
						<option value="0" selected="true" class="coupon">不使用优惠券</option>
					</select>
					<input type="text" placeholder="输入优惠码" />
					<span class="discounts_btn">兑换</span>
				</div>
			</div>
			<!-- 礼金余豆 -->
			<div class="gift_cards">
				<h3 class="gift_cards_title">礼金豆余额</h3>
				<p class="jindou">
					<span class="cards_deduction">无可用礼金豆余额</span>
					<el-switch v-model="value2" disabled></el-switch>
				</p>
			</div>
			<!-- 去结算 -->
			<div class="clearing">
				<div class="right_clearing">
					<div class="left_account">
						<h3>
							购物须知
							<span>（如下品类将不享受“7天无理由退货”政策）</span>
						</h3>
						<p>① 消费者定制商品；</p>
						<p>② 生鲜鲜活易腐商品；</p>
						<p>③ 在线下载或消费者拆封的音像制品、计算机软件等数字化商品；</p>
						<p>④ 食用类商品非食品本身问题，不接受退换；</p>
						<p>⑤ 奢侈品等贵重类商品；</p>
						<p>⑥ 个人护理、贴身类商品；</p>
						<p>⑦ 礼品卡等虚拟类商品；</p>
						<p>⑧ 婴童喂养用品；</p>
						<p>⑨ 跨境商品价格已含税费，且不支持退换货。</p>
					</div>
					<div class="right_account">
						<p>
							商品应付总计:
							<span class="price1">150积分</span>
						</p>
						<p>
							应付总额:
							<span class="price2">
								150
								<b>积分</b>
							</span>
						</p>
						<p>
							寄送至:
							<span class="price3">北京市/朝阳区/四环到五环之间</span>
						</p>
						<p>
							收货人:
							<span class="price4">小明</span>
						</p>
					</div>
				</div>
			</div>
			<!-- 底部按钮 -->
			<div class="bottom_cart">
				<span class="goback" @click="goCart()">

					<!-- <img src="../../assets/imgsrc/settlement/blue_back.png" alt /> -->
					返回购物车
				</span>
				<span class="dindan" @click="topayment()">提交订单</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value2: false,
				addressData: [{
					name: "老王",
					address: "金沙江路1",
					area: ["上海", "上海", "普陀区"],
					phone: 13188888888
				}]
			}
		},
		methods: {

			goCart() {
				this.$router.push("/cart")
			},
			topayment(){
				this.$router.push("/payment")
			}
		}

	}
</script>
<style lang="less" scope>
	.sellementHead {
		width: 1000px;
		margin: 0 auto;

		.top {
			display: flex;
			justify-content: space-between;
			height: 120px;
			align-items: center;

			.warp-left {
				span {
					font-size: 22px;
					height: 40px;
					line-height: 40px;
					padding-left: 15px;
				}
			}

			.warp-rigth {
				width: 600px;
				margin-right: -80px;
			}

			.el-step__title {
				font-size: 14px;
			}
		}

		.content_details {
			padding: 30px;

			.info_title .xinxi {
				font-size: 16px;
				color: #333;
				font-weight: bold;
				line-height: 16px;
			}

			.address_info {
				width: 1000px;
				border: 1px dotted #dadada;
				background-color: #fff;
				height: 72px;
				margin-top: 10px;

				.sl_ul {
					overflow: hidden;
					margin-right: 20px;
				}

				.username {
					width: 150px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					border: 1px solid red;
					margin-top: 20px;
					margin-left: 20px;
				}
			}
		}
	}

	.my-address {
		font-size: 14px;
	}

	.my-address {
		.address-list {
			border: 1px dashed #ddd;
			padding: 5px 20px;

			.item {
				display: flex;
				font-size: 13px;
				margin: 15px 0;

				&:hover {
					background: rgb(255, 243, 243);

					.edit {
						display: block;
					}
				}

				>div+div {
					padding: 6px 0;
					margin: 0 10px;
				}

				>div {
					&.name-box {
						padding: 6px 0;
						width: 140px;
						position: relative;
						text-align: center;
						border: 1px solid #ff0000;
						overflow: hidden;

						.el-icon-check {
							position: absolute;
							right: -2px;
							bottom: -8px;
							color: #fff;
							background: rgb(245, 80, 83);
							width: 20px;
							height: 20px;
						}
					}
				}

				.edit {
					display: none;
				}
			}
		}

		.address-menu {
			display: flex;
			padding: 20px 0;
			justify-content: space-between;
			font-size: 13px;
		}
	}

	//商品列表

	.wrap {
		h4 {
			padding: 20px 0;
			font-size: 16px;
			color: #333;
		}

		.commodity_head {
			display: flex;
			color: #666;
			font-size: 12px;
			height: 43px;
			line-height: 43px;
			text-align: center;
		}

		.commodity {
			width: 260px;
			border-bottom: 2px solid #bae0f3;
		}

		.comm_attr {
			width: 203px;
			border-bottom: 2px solid #ffd3d1;
		}

		.price {
			width: 114px;
			border-bottom: 2px solid #bae0f3;
		}

		.quantity {
			width: 115px;
			border-bottom: 2px solid #ffd3d1;
		}

		.sum {
			width: 170px;
			border-bottom: 2px solid #bae0f3;
		}

		.controller {
			width: 129px;
			border-bottom: 2px solid #ffd3d1;
		}
	}

	.shop_list_wrap .shop_tit {
		margin-top: 20px;
		margin-bottom: 10px;
		color: #666;
		font-size: 12px;

		.shop_name {
			display: flex;
			align-items: center;

			.name {
				color: #666;
				margin-left: 6px;
			}
		}

		.shop_kefu .name1 {
			display: inline-block;
			width: 82px;
			height: 22px;
			line-height: 22px;
			border: 1px solid rgb(48, 155, 223);
			margin-left: 10px;
			border-radius: 10px;
			color: rgb(77, 169, 227);
			text-align: center;
		}

		.shop_kefu img {
			margin-top: 3px;
			margin-right: 5px;
		}

		.shop_text {
			font-size: 12px;
			color: rgb(245, 80, 83);
			margin-left: 15px;
		}

		.name2 {
			margin-right: 10px;
			color: rgb(245, 80, 83);
		}
	}

	.group_item {
		width: 1000px;
		height: 143px;
		background: rgb(245, 253, 255);

		.shopping_ul {
			padding-top: 16px;
			padding-left: 10px;
			display: flex;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;

			img {
				width: 65px;
				height: 65px;
				border: 1px solid #eee;
			}

			span {
				font-size: 12px;
				margin-left: 10px;
			}

			.attr_con span {
				margin-left: 39px;
				padding-top: 3px;
				font-size: 12px;
				color: #666;
			}

			.comm_price {
				width: 150px;
				font-size: 12px;
				color: #333333;
				line-height: 20px;
				font-weight: bold;
				text-align: center;
			}

			.number {
				width: 60px;
				color: #666;
				font-size: 12px;
				text-align: center;
			}

			.you {
				font-size: 12px;
				vertical-align: top;
				margin-left: 20px;
				width: 140px;
				text-align: center;
				min-height: 1px;

				img {
					width: 18px;
					height: 23px;
				}
			}

			.sum_text {
				width: 90px;

				.sum_price {
					text-align: right;
					font-size: 12px;
					color: rgb(245, 120, 123);
					font-weight: bold;
					line-height: 18px;
				}
			}
		}

		.inv-note {
			padding-left: 10px;

			input {
				width: 40%;
				padding-left: 10px;
				font-size: 12px;
				height: 30px;
				line-height: 30px;
				border: 1px solid #dadada;
				margin-top: 10px;
				outline: none;
			}
		}
	}

	.bottom {
		margin: 10px 0;

		span {
			font-size: 12px;
			color: #666;
		}
	}

	.fr {
		b {
			color: rgb(245, 80, 83);
		}
	}

	// 优惠券
	.discounts {
		margin-top: 30px;
		position: relative;

		h3 {
			font-size: 16px;
			color: #333;
			margin-bottom: 10px;
		}

		.yhq {
			overflow: hidden;

			#coupon {
				width: 180px;
				height: 30px;
				border: 1px solid #dadada;
				box-sizing: border-box;
				border-radius: 4px;
				padding-left: 10px;
				color: #666;
				outline: none;
				float: left;
				line-height: 30px;
				font-size: 14px;
			}

			input {
				line-height: 30px;
				height: 30px;
				width: 159px;
				float: left;
				margin-left: 20px;
				color: #666;
				padding-left: 10px;
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
				border: 1px solid #dadada;
				border-right: 0 !important;
				outline: none;
				font-size: 12px;
			}

			.discounts_btn {
				width: 50px;
				height: 30px;
				background: #f55053;
				color: #fff;
				text-align: center;
				line-height: 30px;
				border-top-right-radius: 4px;
				border-bottom-right-radius: 4px;
				float: left;
				font-size: 12px;
				cursor: pointer;
				transition: 0.3s;
				-webkit-transition: 0.3s;
			}
		}
	}

	.gift_cards {
		align-items: center;
		margin-top: 20px;

		h3 {
			font-size: 16px;
		}

		.jindou {
			margin-top: 20px;
		}

		.el-switch__core {
			margin-left: 80px;
		}
	}

	// 去结算
	.clearing {
		font-size: 12px;
		margin-top: 15px;
		line-height: 25px;
		width: 1000px;
		margin-left: auto;
		margin-right: auto;

		.right_clearing {
			border: 1px solid #ff4c4c;
			overflow: hidden;
			padding: 20px;
			display: flex;
			justify-content: space-between;

			.left_account {
				float: left;
				overflow: hidden;
				width: 360px;

				h3 {
					font-size: 15px;
					color: #333;
				}

				p {
					color: #666;
				}

				span {
					color: #666;
					font-size: 12px;
					font-weight: 400;
				}
			}
		}

		.right_account {
			text-align: right;

			p {
				font-size: 16px;
				font-weight: 600;
			}

			.price1 {
				font-weight: normal;
				font-size: 12px;
			}

			.price2 {
				font-size: 24px;
				color: rgb(245, 80, 83);

				b {
					font-size: 14px;
				}
			}

			.price3 {
				font-weight: normal;
				font-size: 12px;
			}

			.price4 {
				font-weight: normal;
				font-size: 12px;
			}
		}
	}

	// 底部按钮
	.bottom_cart {
		text-align: right;
		span{
			&:hover{
				cursor: pointer;
			}
		}
	}

	.goback img {
		margin-right: 5px;
		vertical-align: baseline;
	}



	.dindan {
		background: #ff4138;
		color: #fff;
		height: 40px;
		min-width: 195px;
		display: inline-block;
		text-align: center;
		line-height: 40px;
		font-size: 16px;

	}
</style>
