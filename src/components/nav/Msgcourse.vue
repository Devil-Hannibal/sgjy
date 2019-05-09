<template>
	<div class="msgcourse">
		<!-- 面包屑导航Start -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>讯息咨询</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 面包屑导航End -->
		<!-- 行业分类Start -->
		<div class="msg_container">
			<div style="height: 40px;line-height: 40px;">行业分类 : &nbsp;&nbsp;&nbsp;</div>
			<el-tabs type="border-card" >
				<el-tab-pane label="电脑与IT" ref="tabs">
					<ul>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="语言培训">未配置</el-tab-pane>
				<el-tab-pane label="职业技能">未配置</el-tab-pane>
				<el-tab-pane label="企业管理">未配置</el-tab-pane>
				<el-tab-pane label="资格考试">
					<ul>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
						<li>的撒旦</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="文体艺术">
					<ul>
						<li>默认1</li>
						<li>默认3</li>
						<li>默认4</li>
						<li>默认5</li>
						<li>默认6</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="学历文凭">未配置</el-tab-pane>
				<el-tab-pane label="学习辅导">未配置</el-tab-pane>
				<el-tab-pane label="出国留学">未配置</el-tab-pane>
				<el-tab-pane label="远程教育">未配置</el-tab-pane>
			</el-tabs>
		</div>
		<!-- 行业分类End -->
		<!-- 文章列表Start -->
		<div class="aticleBox">
			<router-view></router-view>

			<my-diy></my-diy>
		</div>
		<!-- 文章列表End -->
	</div>
</template>

<script>
	import DiyCourse from './../common/DiyCourse'

	export default {
		components: {
			'my-diy': DiyCourse
		},
		data() {
			return {

			}
		},
		
		mounted() {
			this.bb()
		},
		methods:{
			bb(){
				console.log(this.$refs.tabs)
			}
		}
	}
</script>

<style lang="less" scoped>
	.msgcourse {
		margin: 0 auto;
		width: 1200px;

		// 面包屑导航
		.el-breadcrumb {
			height: 40px;
			line-height: 40px;
			font-size: 15px;
		}

		// 行业分类容器
		.msg_container {
			display: flex;
			justify-content: start;
			background-color: white;
			border: 1px solid #e8e8e8;
			padding-left: 16px;
			min-height: 80px;

			.el-tabs {
				width: 100%;
				border: none;

			}

			.el-tab-pane {
				ul {
					background-color: #f9f9fd;
					display: flex;
					justify-content: start;
					padding-left: 25px;

					li {
						font-size: 15px;
						height: 40px;
						line-height: 40px;
						color: #666666;
						margin-right: 20px;
						cursor: pointer;
					}
				}
			}
		}

		// 文章列表
		.aticleBox {
			display: flex;
			justify-content: space-between;
			margin-top: 34px;

			
		}
		
	}
</style>
