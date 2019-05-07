<template>
	<div class="about">
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
					<div class="content">
						
						<el-form :model="formLabelAlign">
							<el-form-item label="姓名:">
								<!-- <lable>啊</lable> -->
								<el-input v-model="formLabelAlign.name"></el-input>

							</el-form-item>
							<el-form-item label="电话:">
								<el-input v-model="formLabelAlign.phone"></el-input>
							</el-form-item>
							<el-form-item label="备注:">
								<el-input v-model="formLabelAlign.message" type="textarea" rows=3></el-input>
							</el-form-item>
							<el-form-item>
								<el-button class="btn">立即预约</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
				<!-- 推荐学校 -->
				<div class="hot">
					<div class="hot_title">
						<span>图标</span>
						<span>推荐学校</span>
						<span>MORE+</span>
					</div>
					<div class="hot_centent">
						<div><img src="./../../../static/images/aboutS.png" alt=""></div>
						<ul>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="hot">
					<div class="hot_title">
						<span>图标</span>
						<span>热门课程</span>
						<span>MORE+</span>
					</div>
					<div class="hot_centent">
						<div><img src="./../../../static/images/aboutS.png" alt=""></div>
						<ul>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
							<li class="text-ellipsis">
								<span class="iconfont icon-jiantou"></span>
								<span>2019幼儿教师资格合师资格合师资格合师资格合搜索素质</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from "./../common/Banner";

	export default {
		components: {
			"my-banner": Banner,
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
				],
				formLabelAlign:{  //From表单
					name:"",
					phone:'',
					message:''
				}
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
			padding-left: 24px;
			box-sizing: border-box;

			// 报名课程
			.reserveKc {
				padding: 25px 15px;
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
				margin-top: 34px;
				padding-bottom: 30px;

				// 热门头部
				.hot_title {

					color: #ff5722;
					border-bottom: 2px solid #ff5722;
					padding-bottom: 13px;

					& span:nth-child(2) {
						font-size: 20px;
					}

					& span:nth-child(3) {
						font-size: 14px;
						float: right;
					}
				}

				// 热门内容区
				.hot_centent {
					padding-top: 23px;
					padding-left: 10px;

					img {
						width: 256px;
						height: 115px;
					}

					// 文章列表
					ul {
						padding-left: 24px;
						padding-right: 24px;

						li {
							line-height: 36px;
							font-size: 15px;
							color: #666666;

							& span:last-child {
								padding-left: 20px;
							}
						}
					}
				}
			}



		}


	}
	
</style>
