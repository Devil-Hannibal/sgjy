<template>
	<div class="train">

		<div class="shopCourse">
			<!--  -->
			<div class="shop_train">
				<div>
					<div class="title">
						<ul>
							<li>综合</li>
							<li class="active">近期</li>
							<li>人气</li>
							<li>价格</li>
						</ul>
						<div>
					
							<span class="iconfont icon-jiantouzuo"></span>
							<span>1</span>
							<span>/</span>
							<span>180</span>
							<span class="iconfont icon-jiantou"></span>
						</div>
					</div>
					<div class="content">
						<ul>
							<li>
								<div class="imgBox">
									<img :src="img1" alt="">
								</div>
								<div class="imgText">
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>
										<span>价格：电话咨询 </span>
										<span class="iconfont icon-huojing"></span>
										<span>课程人气：6326</span>
									</p>
									<p>授课学校：北京567GO健身学院</p>
								</div>
								<div class="imgBtn">
									<p><span class="iconfont icon-xiaoxi"></span><span>在线咨询</span></p>
									<p>0451-00**988</p>
								</div>
							</li>
							<li>
								<div class="imgBox">
									<img :src="img1" alt="">
								</div>
								<div class="imgText">
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>
										<span>价格：电话咨询 </span>
										<span class="iconfont icon-huojing"></span>
										<span>课程人气：6326</span>
									</p>
									<p>授课学校：北京567GO健身学院</p>
								</div>
								<div class="imgBtn">
									<p><span class="iconfont icon-xiaoxi"></span><span>在线咨询</span></p>
									<p>0451-00**988</p>
								</div>
							</li>
							<li>
								<div class="imgBox">
									<img :src="img1" alt="">
								</div>
								<div class="imgText">
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>
										<span>价格：电话咨询 </span>
										<span class="iconfont icon-huojing"></span>
										<span>课程人气：6326</span>
									</p>
									<p>授课学校：北京567GO健身学院</p>
								</div>
								<div class="imgBtn">
									<p><span class="iconfont icon-xiaoxi"></span><span>在线咨询</span></p>
									<p>0451-00**988</p>
								</div>
							</li>
							<li>
								<div class="imgBox">
									<img :src="img1" alt="">
								</div>
								<div class="imgText">
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>
										<span>价格：电话咨询 </span>
										<span class="iconfont icon-huojing"></span>
										<span>课程人气：6326</span>
									</p>
									<p>授课学校：北京567GO健身学院</p>
								</div>
								<div class="imgBtn">
									<p><span class="iconfont icon-xiaoxi"></span><span>在线咨询</span></p>
									<p>0451-00**988</p>
								</div>
							</li>
							<li>
								<div class="imgBox">
									<img :src="img1" alt="">
								</div>
								<div class="imgText">
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>北京私教选择性功能评估与筛查培训</p>
									<p>
										<span>价格：电话咨询 </span>
										<span class="iconfont icon-huojing"></span>
										<span>课程人气：6326</span>
									</p>
									<p>授课学校：北京567GO健身学院</p>
								</div>
								<div class="imgBtn">
									<p><span class="iconfont icon-xiaoxi"></span><span>在线咨询</span></p>
									<p>0451-00**988</p>
								</div>
							</li>
						</ul>
						
					</div>
				</div>
				
				
				<div class="pagination">
					<button>首页</button>
					<el-pagination background layout="prev, pager, next,slot" :total="1000" :page-size="50" prev-text="上一页" next-text="下一页">
					</el-pagination>
					<button>尾页</button>
				</div>
			</div>
			
			<my-diy></my-diy>
		</div>
	</div>
</template>

<script>
	import DiyCourse from './../common/DiyCourse'

	export default {
		components: {
			'my-diy': DiyCourse,
		},
		data() {
			return {
				img1: require('./../../../static/images/courseList.png'),
				shaixuan:{
					ClassA:{
						ClassB:{}
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.train {
		margin: 0 auto;
		width: 1200px;

		.shopCourse {
			display: flex;
			justify-content: space-between;
			margin-top: 25px;

			.shop_train {
				width: 100%;
				& div:first-child{
					border: 1px solid #e7e7e7;
				}

				// 头部
				.title {
					display: flex;
					justify-content: space-between;
					font-size: 15px;
					line-height: 30px;
					height: 46px;
					line-height: 46px;
					border-bottom: 1px solid #e7e7e7;
					padding-right: 24px;

					ul {
						display: flex;
						justify-content: start;

						li {
							padding: 0 33px;

							&.active {
								color: #ff5722;
							}
						}

					}
				}

				.content {
					ul {
						li {
							display: flex;
							justify-content: space-between;
							padding: 24px 30px 24px 22px;
							border-bottom: 1px solid #e9e9e9;
							box-sizing: border-box;
							&:last-child{
								border: none;
								}

							.imgBox {
								width: 236px;
								height: 164px;

								img {
									width: 100%;
									height: 100%;
								}
							}

							.imgText {
								width: 480px;
								padding: 20px 30px;
								box-sizing: border-box;

								p {
									font-size: 16px;
									height: 29px;
									color: #666666;
									& span:nth-child(2){
										color: #ff5722;
										margin-left: 40px;
									}

									&:nth-child(1) {
										font-size: 22px;
										line-height: 36px;
										height: 40px;
										color: #000000;
									}
									&:nth-child(2) {
										color: #ff5722;
									}
								}
							}
							.imgBtn{
								& p:nth-child(1){
									color: #fdbf02;
									border: 1px solid #fdbf02;
									border-radius: 5px;
									font-size: 16px;
									height: 30px;
									line-height: 30px;
									padding: 0 10px;
									margin-top: 55px;
									 & span:last-child{
										 margin-left: 14px;
									 }
								}
								& p:nth-child(2){
									color: #ff5722;
									font-size: 18px;
									margin-top: 17px;
								}
							}
						}
					}
				}
			}
		}
	}
	// 分页
	.pagination{
		display: flex;
		justify-content: center;
		padding: 59px 0;
		button{
			font-size: 14px;
			background-color: transparent;
			border: 1px solid #e8e8e8;
			padding: 2px 5px;
		}
	}
	.el-breadcrumb {
		height: 40px;
		line-height: 40px;
		font-size: 15px;
	}

</style>
