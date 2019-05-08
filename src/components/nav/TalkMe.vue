<template>
	<div class="talkMe">
		<div class="banner">
			<img src="./../../../static/images/banenr_one.png" alt="">
		</div>
		<div class="container">
			<div class="listPos">
				<div class="posList">
					<ul class="pos">
						<li><span>南岗</span><span>网通校区</span>
							<span>凯德校区</span><span>万达校区</span></li>
						<li><span>道理</span><span>中央校区</span></li>
						<li><span>香坊</span><span>和平校区</span>
						</li>
					</ul>

					<!-- 学校的位置联系 -->
					<ul class="schoolList ">
						<li class="clearfix">
							<div class="lt">
								<div class="title">南岗校区</div>
								<div class="content">
									<p><span class="tb_icon"><img src="./../../../static/images/yu.png" alt=""></span>
										<span class="phone">400-801-826</span></p>
									<p>上课地址：南岗区学府路哈师大对面</p>
									<p>乘车路线：379、68、94、104、106、114、116、87</p>
									<p><span>提醒信息:</span><span>建议前来报名之前电话咨询和预约</span></p>
								</div>
							</div>
							<div class="rt"><img src="./../../../static/images/lxwm_1.png" alt=""></div>
						</li>
						<li class="clearfix">
							<div class="lt">
								<div class="title">南岗校区</div>
								<div class="content">
									<p><span class="tb_icon"><img src="./../../../static/images/yu.png" alt=""></span>
										<span class="phone">400-801-826</span></p>
									<p>上课地址：南岗区学府路哈师大对面</p>
									<p>乘车路线：379、68、94、104、106、114、116、87</p>
									<p><span>提醒信息:</span><span>建议前来报名之前电话咨询和预约</span></p>
								</div>
							</div>
							<div class="rt"><img src="./../../../static/images/default.png" alt=""></div>
						</li>
						<li class="clearfix">
							<div class="lt">
								<div class="title">南岗校区</div>
								<div class="content">
									<p><span class="tb_icon"><img src="./../../../static/images/yu.png" alt=""></span>
										<span class="phone">400-801-826</span></p>
									<p>上课地址：南岗区学府路哈师大对面</p>
									<p>乘车路线：379、68、94、104、106、114、116、87</p>
									<p><span>提醒信息:</span><span>建议前来报名之前电话咨询和预约</span></p>
								</div>
							</div>
							<div class="rt"><img src="./../../../static/images/lxwm_1.png" alt=""></div>
						</li>
						<li class="clearfix">
							<div class="lt">
								<div class="title">南岗校区</div>
								<div class="content">
									<p><span class="tb_icon"><img src="./../../../static/images/yu.png" alt=""></span>
										<span class="phone">400-801-826</span></p>
									<p>上课地址：南岗区学府路哈师大对面</p>
									<p>乘车路线：379、68、94、104、106、114、116、87</p>
									<p><span>提醒信息:</span><span>建议前来报名之前电话咨询和预约</span></p>
								</div>
							</div>
							<div class="rt"><img src="./../../../static/images/lxwm_1.png" alt=""></div>
						</li>
					</ul>
				</div>

				<my-diy></my-diy>
			</div>
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

			}
		}
	}
</script>

<style scoped lang="less">
	.talkMe {
		margin: 0 auto;

		.banner {
			width: 100%;
			height: 412px;
			text-align: center;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.container {
			width: 1200px;
			margin: 0 auto;

			.listPos {
				display: flex;
				justify-content: space-between;

				// 
				.posList {
					width: 100%;

					.pos {
						padding: 0 24px;

						li {
							border-bottom: 1px solid #d9d9d9;

							&:last-child {
								border-bottom: none;
							}

							span {
								font-size: 16px;
								color: #666666;
								line-height: 40px;
								margin-right: 20px;

							}

							span:first-child {
								color: black;
								margin-right: 50px;

							}
						}
					}

					// 图文列表
					.schoolList {
						li {
							padding-top: 43px;
							padding-bottom: 50px;
							border-top: 1px solid #d9d9d9;
							&:nth-child(odd){
								.lt{
									float: left;
								}
								.rt{
									float: right;
								}
							}
							&:nth-child(even){
								.lt{
									float: right;
								}
								.rt{
									float: left;
								}
							}

							// 左侧内容
							.lt {
								.title {
									background-color: #ff5722;
									color: white;
									font-size: 30px;
									line-height: 30px;
									text-align: center;
									padding-top: 18px;
									padding-bottom: 18px;

									
								}
								.content {
									border-bottom: 10px solid #ff5722;
									p {
										font-size: 16px;
										color: #4c4b4b;
										padding-bottom: 24px;
										height: 36px;
										box-sizing: border-box;
										.tb_icon {
											width: 46px;
											height: 42px;
											padding-left: 43px;
											padding-right: 17px;
								
											img {
												// width: 100%
												 vertical-align: middle;
												 
											}
										}
										.phone{
											font-size: 28px;
											line-height: 36px;
											color: #fe1000;
										}
								
									}
								
									& p:first-child {
										margin-top: 18px;
										margin-bottom: 24px;
									}
								}
							}

							// 右侧内容
							.rt {
								border: 8px solid #d9d9d9;
								width: 438px;
								height: 263px;
								box-sizing: border-box;

								img {
									width: 100%;
									height: 100%;
								}
							}
							
						}
					}
				}
			}
		}

	}
</style>
