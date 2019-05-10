<template>
	<div class="about">
		<!-- 轮播图 -->
		<my-banner :imgList="imgList" :imgHeight="imgHeight"></my-banner>
		<!-- 内容 -->
		<div class="about_container">
			<div class="scenery chearfix">
				<!-- 左边内容 -->
				<div class="fl_content">
					<!-- 头部样式 -->
					<div class="title">
						<div>学校简介</div>
						<div class="active">教学环境</div>
						<div>联系我们</div>
					</div>
					<!-- 内容区域 -->
					<div class="content">
						<h1 class="head">哈尔滨百川教育</h1>
						<p>哈尔滨百川教育是一家专注于个性化教学的中小学课外辅导教育机构，教师、教育规划师、学习管理师完美对接，帮助学员高效学习，专注于一对一教学，想要提高学习效率，快速掌握学习方式。百川教育集团创立于2006年，建校十余年，现已成立9个校区，全职教师220余人，自成教育体系，设有试题研究中心，为无数学子实现名校梦想。是经黑龙江省教育厅、哈尔滨市教育局特批的省级教育培训机构，管理机制严格、教学设备先进，是我省集中办学规模领先的文化教育机构。先后获得“哈尔滨市十佳教育培训机构”“黑龙江省先进教育培训行业”等荣誉称号！我校开设少儿英语、小初高全科名师一对一、N对一、一对多辅导，另有小初高小班教学，分别设有初高中起点教学、小升初及初升高衔接教学、新课班及复习班教学，中高考冲刺强化等课程。建校以来始终坚持以最优化的教学模式帮助学生提高学习成绩，为无数的学子实现名校的梦想。想要快速提高学习成绩就来哈尔滨百川教育。</p>
						<div class="flexImgBox">
							<img src="./../../../static/images/about_bc1.png" alt>
							<img src="./../../../static/images/about_bc2.png" alt>
						</div>
						<p>哈尔滨百川教育是一家专注于个性化教学的中小学课外辅导教育机构，教师、教育规划师、学习管理师完美对接，帮助学员高效学习，专注于一对一教学，想要提高学习效率，快速掌握学习方式。百川教育集团创立于2006年，建校十余年，现已成立9个校区，全职教师220余人，自成教育体系，设有试题研究中心，为无数学子实现名校梦想。是经黑龙江省教育厅、哈尔滨市教育局特批的省级教育培训机构，管理机制严格、教学设备先进，是我省集中办学规模领先的文化教育机构。先后获得“哈尔滨市十佳教育培训机构”“黑龙江省先进教育培训行业”等荣誉称号！我校开设少儿英语、小初高全科名师一对一、N对一、一对多辅导，另有小初高小班教学，分别设有初高中起点教学、小升初及初升高衔接教学、新课班及复习班教学，中高考冲刺强化等课程。建校以来始终坚持以最优化的教学模式帮助学生提高学习成绩，为无数的学子实现名校的梦想。想要快速提高学习成绩就来哈尔滨百川教育。</p>
					</div>
				</div>
			</div>
			<my-diy></my-diy>
		</div>
	</div>
</template>

<script>
	import Banner from "./../common/Banner";
	import DiyCourse from './../common/DiyCourse'

	export default {
		components: {
			"my-banner": Banner,
			'my-diy': DiyCourse,
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
				formLabelAlign: { //From表单
					name: "",
					phone: '',
					message: ''
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

		// 关于我们文字左侧盒模型
		.fl_content {

			// width: 903px;
			// 头部样式
			.title {
				display: flex;
				justify-content: space-start;
				background-color: #fff5f2;
				height: 50px;

				&>div {
					cursor: pointer;
					font-size: 18px;
					line-height: 50px;
					padding: 0 30px;

					&.active {
						color: #ff5722;
					}
				}
			}

			// 内容样式
			.content {
				.head {
					text-align: center;
					color: #1d1d1d;
					font-size: 27px;
					line-height: 35px;
					padding: 45px 0px 38px;
				}

				&>p {
					text-indent: 2rem;
					font-size: 15px;
					line-height: 28px;
					color: #666666;
				}

				.flexImgBox {
					display: flex;
					justify-content: space-between;
					padding: 50px 0px 42px;

					img {
						width: 432px;
						height: 186px;
					}
				}
			}
		}

		// 关于我们文字右侧盒模型



	}
</style>
