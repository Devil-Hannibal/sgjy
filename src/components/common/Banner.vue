<template>
	<div class="swiperBox" :style="{height:imgHeight+'px'}">
		<!-- 正常状态下轮播图 -->
		<swiper class="swiper-wrapper" :options="swiperOption" v-show="isCarousel==false">
			<swiper-slide class="swiper-slide" v-for="banner in imgList" :key="banner.index">
				<img :src="banner.srcName">
			</swiper-slide>
		</swiper>
		<!-- Carousel状态下轮播图 -->
		<!-- <swiper class="swiper-wrapper" v-show="isCarousel==true" :options="swiperOption" ref="myisCarouselSwiper">
			<swiper-slide class="swiper-slide isCarousel" :style="{height:imgHeight+'px'}" v-for="banner in imgList" :key=banner.id>
				<img :src="banner.srcName">
			</swiper-slide>

		</swiper> -->
		<!-- 按钮配置 -->
		<div class="swiper-pagination" slot="pagination" id="pagination" v-show="isCarousel==false">
		</div>
		<div class="swiper-button-prev" slot="button-prev" v-show="isCarousel==true">
			<span class="iconfont icon-jiantouzuo"></span>
		</div>
		<div class="swiper-button-next" slot="button-next" v-show="isCarousel==true">
			<span class="iconfont icon-jiantou"></span>
		</div>
		<div class="swiper-scrollbar" slot="scrollbar"></div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		props: {
			'imgList': Array,
			'imgHeight': Number,
			'isCarousel': Boolean,
			'swiperOption': Object,
		},

		data() {
			return {
				

			}
		},
		created() {


		},
		computed: {

		},
		mounted() {

		},
		methods: {

		}
	}
</script>



<style lang="less" scoped="scoped">
	// 轮播图盒子
	.swiperBox {
		position: relative;

		.swiper-pagination {
			position: absolute;
			bottom: 20px;
			right: 26px;
			background-color: rgba(0, 0, 0, 0.3);

		}
	}

	.swiper-wrapper {
		width: 100%;
		height: 100%;

		.swiper-slide {
			width: 100%;
			height: 100%;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}

	.swiper-pagination-bullet swiper-pagination-bullet-active {
		li {
			background-color: yellow;
		}
	}

	// 左键右键样式
	.swiper-button-prev,
	.swiper-button-next {
		background: rgba(0, 0, 0, 0.5);
		color:white;
		height:80px;
		width:20px;
		line-height:80px;
		transfrom:translateY(-20%);

	}
	.swiper-button-prev{
		left:2px;
	}
	.swiper-button-next {
		right:2px;
	}
</style>
