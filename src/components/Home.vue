<template>
	<div class="home">
		<Header></Header>
		<!-- 内容区域 -->
		<div class="container">
			<!-- 轮播图与菜单区域 -->
			<div class="hyfl_box">
				<!-- 行业分类	 -->
				<div class="navMenus">
					<ul>
						<!-- 列表 -->
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
					</ul>
				</div>
				<div class="lunbo">
					<div class="banner_box">
						<div class="banner_one">
							<Banner></Banner>
						</div>
						<div class="newsList"></div>
					</div>
					<div class="banner_two"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './Header';
	import Banner from './Banner';

	export default {

		components: {
			Header,
			Banner
		},
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style lang="less" scoped="scoped">
	.container {
		width: 1200px;
		margin: 0 auto;
	}

	.navMenus {
		width: 252px;
		border: 1px solid #ff5722;
	}
	.navMenus li {
		position: relative;
		padding-left: 20px;
		height: 66px;
		box-sizing: border-box;
		border-bottom: 1px dashed #e7e7e7;
	}
	.navMenus li:last-child {
		border-bottom: none;
	}
	.navMenus li p:first-child {
		padding-top: 10px;
	}
	.icon-shu {
		color: #ff5722;
		font-size: 22px;
	}
	.iconPos {
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
		color: #999999;
	}
	.ts {
		font-size: 18px;
		color: #333333;
		padding-left: 14px;
	}
	.ts1 {
		color: #b4b4b4;
		font-size: 15px;

	}
	.ts1 span:last-child {
		padding-left: 10px;
	}
</style>
