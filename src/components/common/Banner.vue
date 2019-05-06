<template>
	<div class="swiperBox" :style="{height:imgHeight+'px'}">
		<!-- 正常状态下轮播图 -->
		<swiper class="swiper-wrapper" :options="swiperOption" v-show="isCarousel==false">
			<swiper-slide class="swiper-slide" v-for="banner in imgList" :key="banner.index">
				<img :src="banner.srcName">
			</swiper-slide>
		</swiper>
		<!-- Carousel状态下轮播图 -->
		<swiper class="swiper-wrapper" v-show="isCarousel==true" :options="swiperCarouselOption" ref="myisCarouselSwiper">
			<swiper-slide class="swiper-slide isCarousel" :style="{height:imgHeight+'px'}" v-for="banner in imgList" :key=banner.id>
				<img :src="banner.srcName">
			</swiper-slide>

		</swiper>
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
			'imgWidth': Number,
		},

		data() {
			return {
				// 正常状态下轮播图配置项
				swiperOption: {
					notNextTick: true,
					//循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay: true,
					//滑动速度
					speed: 800,
					//滑动方向
					direction: 'horizontal',
					//小手掌抓取滑动
					// grabCursor : true,


					//分页器设置         
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						//type: 'fraction',
						//type : 'progressbar',
						//type : 'custom',
						// progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
						bulletElement: 'span', //设定分页器指示器（小点）的HTML标签。
						// dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
						dynamicMainBullets: 4, //动态分页器的主指示点的数量
						hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
						clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。

					},
				},

				// Carousel模式下配置项
				swiperCarouselOption: {
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},

					notNextTick: true,
					// 循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay: true,
					speed: 800,
					direction: 'horizontal',
					slidesPerView: 3,
					paginationClickable: true,
					spaceBetween: 5

				},

			}
		},
		created() {
			console.log(this.$refs.mySwiper)


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
