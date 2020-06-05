<template>
	<div class="footer">
		<div class="footer_topBox">
			<div class="footer_top">
				<ul class="service">
					<li class="service_number">400-833-0288</li>
					<li class="service_time">周一至周日 &nbsp;&nbsp;&nbsp; 9：00-22：00</li>
					<li class="service_line"><a href="#"><img src="../assets/imgs/icon/kefu.png" alt="">在线客服</a></li>
					<li class="follow_we">
						<span>关注我们：</span>
						<img src="../assets/imgs/icon/weixin.png" alt="">
						<img src="../assets/imgs/icon/footer_img_qrcode.png" alt="">
					</li>
				</ul>
				<ul class="txtbox">
					<li class="service_number">何为礼舍</li>
					<li></li>
					<li class="lishe_txt">每一款商品精心为您而选，每一次福利深入人心、关怀备至。礼舍作为企业福利领域的领跑者，致力于帮助企业实现福利数字化转型，让关爱拉近彼此，让福利紧贴心意。</li>
				</ul>
				<ul class="business">
					<li class="service_number">商业入驻</li>
					<li>
						<a href="#"><img src="../assets/imgs/icon/footer_1_ruzhu.png" alt=""></a>
						<a href="#"><img src="../assets/imgs/icon/footer_1_ruzhu2.png" alt=""></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="footerBox">
			<div class="footer-box">
				<div class="footer_2_pr">
					<div class="footer_2_tips_quan">
						<p>全</p>
						<span>商品齐全 随心挑选</span>
					</div>
					<div class="footer_2_tips_quan">
						<p>优</p>
						<span>全球优品 万里挑一</span>
					</div>
					<div class="footer_2_tips_quan">
						<p>兑</p>
						<span>灵活兑换 购物无忧</span>
					</div>
					<div class="footer_2_tips_quan">
						<p>惠</p>
						<span>专属内购 专享折扣</span>
					</div>
					<div class="footer_2_tips_quan">
						<p>快</p>
						<span>多仓直发 全国配送</span>
					</div>
					<div class="footer_2_tips_quan">
						<p>享</p>
						<span>极速响应 品质服务</span>
					</div>
				</div>
				<div class="footer_2_bottom">
					<div class="footer_2_bottom_a">
						<a href="#">关于我们</a>
						<a href="#">礼舍指南</a>
						<a href="#">积分兑换</a>
						<a href="#">关于我们</a>
						<a href="#">关于我们</a>
						<a href="#">关于我们</a>
						<a href="#">关于我们</a>
					</div>
				</div>
				<div class="footer_2_bottom_text">
					<span>食品经营许可证：JY14403050238924</span>
					<span>营业执照 礼舍科技版权所有 统一社会信用代码：91440300071136394Y</span>
				</div>
				<div class="footerimg">
					<img src="../../assets/img/index/govIcon.gif" alt="">
				</div>
			</div>
		</div>
	</div>

  <!-- <div class="footer">
    <div class="footer-box">
      <div class="footer_2_pr">
        <div class="footer_2_tips_quan">
          <p>全</p>
          <span>商品齐全 随心挑选</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>优</p>
          <span>全球优品 万里挑一</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>兑</p>
          <span>灵活兑换 购物无忧</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>惠</p>
          <span>专属内购 专享折扣</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>快</p>
          <span>多仓直发 全国配送</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>享</p>
          <span>极速响应 品质服务</span>
        </div>
      </div>
      <div class="footer_2_bottom">
        <div class="footer_2_bottom_a">
          <a href="#">关于我们</a>
          <a href="#">礼舍指南</a>
          <a href="#">积分兑换</a>
          <a href="#">常见问题</a>
          <a href="#">客户服务</a>
          <a href="#">礼舍服务</a>
          <a href="#">商务合作</a>
        </div>
      </div>
      <div class="footer_2_bottom_text">
        <span>食品经营许可证：JY14403050238924</span>
        <span>营业执照 礼舍科技版权所有 统一社会信用代码：91440300071136394Y</span>
      </div>
      <div class="footerimg">
        <img src="../../assets/img/index/govIcon.gif" alt="">
      </div>
    </div>
  </div> -->

</template>
<script>
	export default {
		name: "foot"
	};
</script>
<style lang="less" scope>
	.footer {
		.footerBox {
			background: #414141;
		}

		.footer-box {
			width: 1300px;
			margin: 0 auto;
			position: relative;
		}

		.footer_topBox {
			background: #fff;
		}

		.footer_top {
			width: 1300px;
			height: 350px;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			align-items: center;

			ul {
				flex: 1;
				li {
					text-align: center;
					margin: 10px 0;
				}
			}

			.service_number {
				font-weight: bolder;
			}

			.service_time {
				color: #a6a6a6;
			}

			.service_line {
				a {
					background: #f58133;
					display: inline-block;
					width: 130px;
					color: #fff;
					height: 30px;
					line-height: 30px;
					border-radius: 20px;

					img {
						vertical-align: middle;
						position: relative;
						right: 10px;
					}
				}
			}

			.follow_we {
				padding-top: 10px;

				span {
					font-size: 12px;
					color: #a6a6a6;
				}

				img {
					&:last-child {
						margin-left: 20px;
					}

				}
			}

			.txtbox {
				border-right:1px solid gainsboro ;
				li {
					&:nth-child(2) {
						margin: 0 auto;
						width: 25px;
						height: 3px;
						background: #cecece;
					}
				}
			}

			.lishe_txt {
				margin: 10px auto;
				width: 250px;
				height: 120px;
			}

			.business {
				
				li {
					&:nth-child(2) {
						margin: 10px auto;
						margin-top: 40px;
						width: 250px;
						a {
							margin: 0 15px;
						}
					}
				}
			}
		}

		.footer_2_pr {
			width: 1300px;
			margin: 0 auto;
			padding: 30px 0;
			box-sizing: border-box;
			display: flex;

			.footer_2_tips_quan {
				margin-right: 30px;

				p {
					height: 40px;
					width: 40px;
					text-align: center;
					line-height: 34px;
					border-radius: 50%;
					border: 2px solid #fff;
					font-size: 20px;
					font-weight: bold;
					color: #fff;
					display: inline-block;
					margin-right: 14px;
					margin-right: 10px;
				}

				span {
					color: #fff;
					font-size: 16px;
				}
			}
		}

		.footer_2_bottom {
			width: 1150px;
			padding-top: 25px;
			border-top: 1px solid #999;
			color: #999;
			font-size: 12px;
			margin-left: 55px;

			.footer_2_bottom_a {
				display: flex;
				justify-content: center;
			}

			.footer_2_bottom_a a {
				height: 16px;
				line-height: 16px;
				padding: 0 15px;
				font-size: 12px;
				color: #999;
				display: inline-block;

				&+a {
					border-left: 1px solid #999;

				}
			}

		}

		.footer_2_bottom_text {
			width: 1200px;
			text-align: center;
			padding: 18px 0 35px;
			position: relative;

			span {
				font-size: 12px;
				color: #999;
				margin-left: 30px;
			}
		}

		.footerimg {
			position: absolute;
			right: 100px;
			top: 132px;

			img {
				width: 36px;
				height: 50px;
			}
		}
	}
</style>
