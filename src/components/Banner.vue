<template>
	<div :options="swiperOption" :style="{height:imgHeight+'px'}" ref="mySwiper">
		<div class="swiper-wrapper" :options="swiperOption">
			<div class="swiper-slide" v-for="banner in imgList">
				<img :src="banner.srcName">
			</div>
		</div>
	<!-- 	<div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
		<div class="swiper-scrollbar" slot="scrollbar"></div> -->
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		props:{'imgList':Array,
				'imgHeight':Number,
				},

		data() {
			return {
				swiperOption: { //swiper3
					autoplay: 3000,
					speed: 1000,
				}
			}
		},
		created(){
			// this.imgHeight=this.$props.heights
		},
		computed: {
			
		},
		mounted() {

		},
		methods: {}
	}
</script>



<style lang="less" scoped="scoped">
	.swiper-wrapper {
		width: 100%;
		height: 100%;

		.swiper-slide {
			width: 100%;
			height: 100%;
			padding-right: 5px;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
