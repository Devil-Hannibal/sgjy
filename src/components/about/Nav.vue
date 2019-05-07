<template>
	<div class="about">
		<!-- 轮播图 -->
		<my-banner :imgList="imgList" :imgHeight="imgHeight"></my-banner>
		<!-- 内容 -->
		<div class="about_container">
			<router-view></router-view>
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
			'my-diy':DiyCourse,
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
		


	}
	
</style>
