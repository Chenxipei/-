<template>
	<div class="home">
		<Totop></Totop>
		<banner swiperName='homeBanner'>
			<div slot="loginbox" class="loginbox">
				<div class="login">
					<a href="#">
						<img src="../../assets/imgs/icon/loginIcon.png" alt="">
						<span>个人登录</span>
					</a>
					<a href="#">
						<img src="../../assets/imgs/icon/loginIcon.png" alt="">
						<span>企业登录</span>
					</a>
				</div>
			</div>
			<div slot='swiper-con' class="swiper-slide" v-for="(item,index) in bannerArr" :key="index">
				<img :src="item.imgSrc" alt="">
			</div>
		</banner>

		<div class="contenter">
			<homelist :txt_title="timeLimit.title">
				<div class="titlebg" slot="titlebg">
					<img :src="timeLimit.title_img" alt="">
					<div class="timer" slot="timer">
						<div class="timer_title">距离结束还剩</div>
						<div class="timer_time">
							<div>{{h<10?'0'+h:h}}</div>:
							<div>{{m<10?'0'+m:m}}</div>:
							<div>{{s<10?'0'+s:s}}</div>
						</div>
					</div>
				</div>

				<div slot="componentItem" class="componentItem" v-for="(item,index) in timeLimit.group_list" :key="index">
					<div class="goodsImg">
						<img :src="item.img_url" alt="">
					</div>
					<div class="item">
						<div class="item_1">
							<div class="title">{{item.txt_title}}</div>
							<div class="tag">{{item.introduce}}</div>
						</div>
						<div class="item_2">
							<p class="price">
								限时价：<span>{{item.price}}</span>￥
							</p>
							<p class="sold">
								<el-progress :percentage="item.sold" color="#e0a3a3" :stroke-width="10"></el-progress><span>已抢</span>
							</p>
						</div>
					</div>
				</div>
			</homelist>

			<div class="tiktok">
				<h2>{{tiktok.title}}</h2>
				<div class="tiktokBox" ref="tiktokBox">
					<div class="tabBox" v-for="(item,index) in tiktok.group_list" :key='index'>
						<div class="tiktok_tab" @mousemove="tab(index)">
							<div class="tiktok_tab_titleImg"><img :src="item.icon_img" alt=""></div>
							<span>{{item.txt_title}}</span>
						</div>
						<div class="con_bgImg" :class="{con_Imgblock:index==tab_current}">
							<img :src="item.img_url" alt="">
						</div>
					</div>
				</div>
			</div>
			<homelist :txt_title="ceremony.title" ceremony="ceremony">
				<div class="titlebg" slot="titlebg">
					<img :src="ceremony.title_img" alt="">
				</div>
				<div slot="ceremony" v-for="(item,index) in ceremony.group_list" :key="index">
					<img :src="item.img_url" alt="">
				</div>
			</homelist>

			<homelist :txt_title="qingdan.title">
				<div slot="bgimg" class="bgimg">
					<img :src="qingdan.title_img" alt="">
				</div>
				<div slot="qingbox" class="qingdan" v-for="(item,index) in qingdan.group_list" :key="index">
					<div class="goodsImg">
						<img :src="item.img_url" alt="">
					</div>
				</div>
			</homelist>
			<div class="like">
				<a href="#" class="like_goods" v-for="(item,index) in likeArr.group_list" :key="index">
					<div class="like_goods_img">
						<img :src="item.img_url" alt="">
					</div>
					<p class="like_goods_title">
						{{item.txt_title}} <br>
						<!-- <span>{{item.introduce==""?'&nbsp':item.introduce}}</span> -->
					</p>
					<div class="like_bottom">
						<div class="price">
							175<span>积分</span>
						</div>
						<div class="like_bottom_car">
							<img src="../../assets/imgs/icon/user_cart.png" alt="">
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import homelist from './homeList.vue'
	import banner from '../../components/Banner.vue'
	import Totop from '../../components/Totop.vue'
	export default {
		name: 'Home',
		components: {
			homelist,
			banner,
			Totop
		},
		data: function() {
			return {
				bannerArr: [],
				timeLimit: [],
				ceremony: [],
				tiktok: [],
				qingdan: [],
				likeArr: [],
				tab_current: 0,
				h: '',
				m: '',
				s: "",
			}
		},
		mounted() {
			this.getGroupData()
			if (this.tab_current == 0) {
				this.$refs.tiktokBox.style.background = "#ce4757"
			}
			setInterval(() => {
				this.timer()
			}, 1000)
		},
		methods: {
			getGroupData() {
				this.$axios.get('/data/index/group.json')
					.then(res => {
						this.timeLimit = res.data.group[0]
						this.ceremony = res.data.group[1]
						this.tiktok = res.data.group[2]
						this.qingdan = res.data.group[3]
						this.likeArr = res.data.group[4]
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})
				// 请求轮播图数据
				this.$axios.get('/data/index/banner.json')
					.then(res => {
						this.bannerArr = res.data.banner
					})
					.catch(err => {
						console.log(errr)
					})
			},
			tab(index) {
				this.tab_current = index
				if (this.tab_current == 0) {
					this.$refs.tiktokBox.style.background = "#ce4757"
				}
				if (this.tab_current == 1) {
					this.$refs.tiktokBox.style.background = "#99cbab"
				}
				if (this.tab_current == 2) {
					this.$refs.tiktokBox.style.background = "#a3c7e2"
				}
				if (this.tab_current == 3) {
					this.$refs.tiktokBox.style.background = "#99d3d4"
				}
			},
			timer() {
				let Today = new Date();
				var NowHour = Today.getHours();
				var NowMinute = Today.getMinutes();
				var NowSecond = Today.getSeconds();
				this.h = 23 - NowHour;
				this.m = 59 - NowMinute;
				this.s = 59 - NowSecond
				if (this.s < 0) {
					console.log(this.s)
					this.s = 60 + this.s
					this.m = this.m - 1
				}
				if (this.m < 0) {
					this.m = 60 + this.m
					this.h = this.h - 1
				}
			}
		},

	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	.contenter {
		width: 1200px;
		margin: 0 auto;
	}

	.home {
		background: #f0f0f0;

		h2 {
			margin: 20px 0;
		}

		img {
			width: 100%;
			height: 100%;
		}

		.tiktok {
			width: 1200px;
			box-sizing: border-box;

			img {
				width: 100%;
				height: 100%;
			}

			.tiktokBox {
				// height: 500px;
				box-sizing: border-box;
				padding: 50px 40px;
				position: relative;
			}

			.con_bgImg {
				width: 820px;
				height: 400px;
				position: absolute;
				left: 320px;
				top: 50%;
				transform: translateY(-50%);
				display: none;
			}

			.con_Imgblock {
				display: block;
			}
		}

		.tabBox {
			margin-bottom: 30px;
		}

		.tiktok_tab {
			width: 220px;
			height: 60px;
			line-height: 60px;
			border-radius: 25px;
			border: 1px solid #fff;
			text-align: center;
			position: relative;
			margin-right: 50px;
			color: #fff;
			font-size: 25px;

			&:hover {
				background: #fff;
				color: black;
				cursor: pointer;
			}

			.tiktok_tab_titleImg {
				position: absolute;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				overflow: hidden;
				top: 50%;
				left: 5px;
				transform: translateY(-50%);

			}

			span {
				margin-left: 30px;
				width: 130px;
				display: inline-block;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.like {
			width: 1200px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 50px;
			.like_goods {
				display: block;
				width: 18%;
				color: black;
				background: #fff;
				padding: 15px;
				margin-bottom: 20px;
			}

			.like_goods_img {
				width: 100%;
			}

			.like_goods_title {
				padding-top: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				width: 100%;
				font-size: 20px;

				span {
					font-size: 12px;
					color: #8699ad;
				}
			}

			.like_bottom {
				margin-top: 30px;
				display: flex;
				justify-content: space-between;

				.price {
					color: #e72418;
					font-size: 17px;

					span {
						font-size: 12px;
					}
				}

				.like_bottom_car {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
</style>
