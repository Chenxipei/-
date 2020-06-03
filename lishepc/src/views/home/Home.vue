<template>
	<div class="home">
		<div class="banner">
			轮播图
		</div>
		<div class="contenter">
			<homelist :title_img="timeLimit.title_img" :txt_title="timeLimit.title">
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
								<span>已抢</span>
							</p>
						</div>
					</div>
				</div>
			</homelist>
			
			<div class="tiktok">
				<h2>抖音</h2>
				<div class="tiktokBox">
					<div class="tabBox" v-for="(item,index) in tiktok.group_list">
						<div class="tiktok_tab">
							<div class="tiktok_tab_titleImg"><img :src="item.icon_img" alt=""></div>
							<span>{{item.txt_title}}</span>
						</div>
						<div class="con_bgImg">
							<img :src="item.img_url" alt="">
						</div>
					</div>
				</div>
			</div>
			<homelist :title_img="ceremony.title_img" :txt_title="ceremony.title"  ceremony="ceremony">
				<div slot="ceremony" v-for="(item,index) in ceremony.group_list" :key="index">
					<img :src="item.img_url" alt="">
				</div>
			</homelist>
		</div>
	</div>
</template>

<script>
	import homelist from './homeList.vue'
	export default {
		name: 'Home',
		components:{
			homelist
		},
		data:function(){
			return{
				timeLimit:[],
				ceremony:[],
				tiktok:[]
			}
		},
		mounted() {
			this.getGroupData()
		},
		methods:{
			getGroupData(){
				this.$axios.get('/data/index/group.json')
				.then(res=>{
					console.log(res.data.group[2])
					this.timeLimit = res.data.group[0]
					this.ceremony = res.data.group[1]
					this.tiktok = res.data.group[2]
				})
			}
		}
	}
</script>

<style lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.home,.contenter{
		width: 1200px;
		margin: 0 auto;
	}
	.home{
		h2{
			margin: 20px 0;
		}
		.tiktok{
			width: 1200px;
			box-sizing: border-box;
			img{
				width: 100%;
				height: 100%;
			}
			.tiktokBox{
				// height: 500px;
				box-sizing: border-box;
				background: #efaba0;
				padding:50px 40px;
				position: relative;
			}
			.con_bgImg{
				width: 820px;
				height: 400px;
				position: absolute;
				left: 320px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.tabBox{
			margin-bottom:30px ;
		}
			.tiktok_tab{
				width: 220px;
				height: 60px;
				line-height: 60px;
				border-radius:25px ;
				border: 1px solid #fff;
				text-align: center;
				position: relative;
				margin-right:50px ;
				color: #fff;
				font-size: 25px;
				
				.tiktok_tab_titleImg{
					position: absolute;
					width: 50px;
					height: 50px;
					border-radius:50% ;
					overflow: hidden;
					top: 50%;
					left: 5px;
					transform: translateY(-50%);
					
				}
				span{
					margin-left:30px ;
					width: 130px;
					display: inline-block;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		
	}
</style>
