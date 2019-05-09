<template>
	<div class="train">
		<div class="headerStar">
			<div class="headerBreadcrumb">
				<el-breadcrumb separator-class="el-icon-arrow-right" style="height:36px;">
					<el-breadcrumb-item :to="{ path: '/' }">源学网首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/' }">明星推荐</el-breadcrumb-item>
					<el-breadcrumb-item v-for="item in linkage" :key="item">
						<el-select v-model="value" placeholder="请选择" size="mini">
							<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
							</el-option>
						</el-select>
					</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="Breadcrumb_del">
				<img :src="Delete_Img" alt="">清空条件
			</div>
			<div class="headerContent">
				<ul class="qf">
					<li>行业分类：</li>
					<li>
						<div class="qf">
							<p v-for="item in 10" style="margin-left: 20px;" @mouseover="industryShow()">电脑与IT</p>
						</div>
						<div class="qf" v-if="is_display"><!--is_display-->
							<p v-for="item in 5" style="margin-left: 20px;" @click="industrySelect()">软件</p>
						</div>
					</li>

				</ul>
				<ul class="qf">
					<li>上课时间：</li>
					<li class="qf">
						<p v-for="item in 20" style="margin-left: 20px;">全日制</p>
					</li>
				</ul>
				<ul class="qf">
					<li>培训周期：</li>
					<li class="qf">
						<p v-for="item in 20" style="margin-left: 20px;">一周</p>
					</li>
				</ul>
				<ul class="qf">
					<li>课程级别：</li>
					<li class="qf">
						<p v-for="item in 20" style="margin-left: 20px;">入门级</p>
					</li>
				</ul>

			</div>
		</div>


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
							<li>
								<p class="iconfont icon-iconfontplatformentrance-copy"></p>
								<p class="iconfont icon-iconfont-left"></p>
							</li>
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
									<p @click="getDeatails">北京私教选择性功能评估与筛查培训(跳转)</p>
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
    import StarImg from '../../../static/images/yc-star.png'
    import DeleteImg from '../../../static/images/yc-star-delete.png'

	export default {
		components: {
			'my-diy': DiyCourse,
		},
		data() {
			return {
				img1: require('./../../../static/images/courseList.png'),





                Star_img:StarImg,    //产品图
                Delete_Img:DeleteImg,//删除小图标
                options: [{       //选择器数据
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',

                linkage:3,            //联动数据
                is_display:false  ,  //行业分类是否隐藏

			}
		},
		methods:{
            industryShow(){
                this.is_display=true;
            },
            industrySelect(){
                this.is_display=false;
            },
			// 跳转详情
			getDeatails(){
				this.$router.push({
					path:'/courseDetails'
				})
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
							&:nth-child(4){
								padding-right: 5px;
							}
							&:last-child{
								padding: 0;
								display: flex;
								justify-content: center;
								flex-direction: column;
								align-items: center;
							}
							p{
								line-height: 10px;
								color: #cecece;
							}

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






	.qf:after{ content:"";display:block;clear:both;}
	.headerStar{width:1200px;position: relative;}
	.headerBreadcrumb{height:50px;}
	.headerStar .Breadcrumb_del{position: absolute;right:15px;top:15px;z-index: 888;height:18px;line-height: 18px;}
	.headerStar .Breadcrumb_del:hover{cursor: pointer;}
	.headerStar .Breadcrumb_del>img{margin-right: 10px;}
	.headerStar .headerContent{width:1200px;border: 1px solid #a8a9b0;box-sizing:border-box;}
	.el-breadcrumb{height:50px !important;line-height: 50px;}
	.el-breadcrumb__inner{color:#a8a9b0;}
	.headerContent{width:1200px;margin: 0 auto;}
	.headerContent>ul{padding:15px;padding-bottom: 0;}
	.headerContent>ul:first-child>li:nth-child(2)>div>p{float: left;margin-bottom: 10px;}
	.headerContent>ul:first-child>li:nth-child(2)>div>p:hover{color:#ff5722;cursor: pointer;}
	/*.headerContent>ul:first-child>li:nth-child(2)>div:nth-child(2){display: none;}*/

	.headerContent>ul>li{float: left;}
	.headerContent>ul>li:first-child{width:80px;text-align: left;}
	.headerContent>ul>li:nth-child(2){width:1088px;text-align: left;}
	.headerContent>ul>li:nth-child(2)>p{float: left;margin-bottom: 10px;}
	.headerContent>ul>li:nth-child(2)>p:hover{color:#ff5722;cursor: pointer;}

</style>
