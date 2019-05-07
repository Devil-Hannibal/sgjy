<template>
	<div class="about">
		<!-- 公共头部 -->
		<!-- <my-header></my-header> -->
		<!-- 轮播图 -->
		<my-banner :imgList="imgList" :imgHeight="imgHeight"></my-banner>
		<!-- 内容 -->
		<div class="about_container">
			<router-view></router-view>
			<!-- 右边内容 -->
			<div class="fr_content">

				<div class="reserveKc">
					<div class="title">
						<span><img src="./../../../static/images/hq.png" alt=""></span>
						<span class="text">个性定制课程</span>
					</div>
				</div>
				<!-- 推荐学校 -->
				<div class="hot">
					<div class="hot_title">
						<span>图标</span>
						<span>热门课程</span>
						<span>MORE+</span>
					</div>
					<div class="hot_centent">
						<div><img src="./../../../static/images/aboutS.png" alt=""></div>
						<ul>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合素质...</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="hot_kecheng"></div>
			</div>
		</div>
		<!-- <my-footer></my-footer> -->
	</div>
</template>

<script>
	import Header from "./../common/Header";
	import Banner from "./../common/Banner";
	import Footer from "./../common/Footer";

	export default {
		components: {
			"my-header": Header,
			"my-banner": Banner,
			"my-footer": Footer
		},
		data() {
			return {
				imgHeight: 412, //轮播图高度
				imgList: [{
						//轮播图图片数组
						srcName: require("./../../../static/images/about_b1.png")
					},
					{
						srcName: require("./../../../static/images/about_b2.png")
					}
				]
			};
		}
	};
</script>

<style lang="less" scoped>
	.about_container {
		width: 1200px;
		margin: 0 auto;
		padding-top: 23px;
		display: flex;
		justify-content: space-around;

		// 关于我们文字右侧盒模型
		.fr_content {
			width: 297px;
			height: 600px;
			// 报名课程
			.reserveKc {
				border: 5px solid #ddd;
				border-image: -webkit-linear-gradient(#ff5722, #fed16c) 1 1;
				border-image: -moz-linear-gradient(#ff5722, #fed16c) 1 1;
				border-image: -o-linear-gradient(#ff5722, #fed16c) 1 1;
				border-image: linear-gradient(#ff5722, #fed16c) 1 1;

				.title {
					.text {
						background: linear-gradient(to top, #ff5722, #fed16c);
						-webkit-background-clip: text;
						color: transparent;
					}
				}
			}
			// 热门
			.hot {
				.hot_title {
					color: #ff5722;
					border-bottom: 1px solid #ff5722;
					& span:nth-child(1){}
				}
			
				.hot_centent {
					padding-top: 23px;
				}
			}

			

		}


	}
</style>
