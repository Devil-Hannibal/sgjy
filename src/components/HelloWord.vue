<template>
	<div class="HelloWord">
		<!-- 公共头部 -->
		<my-header></my-header>
		<!-- 首屏渲染主页Home -->
		<router-view></router-view>
		<!-- 公共尾部 -->
		<my-footer></my-footer>
	</div>
</template>

<script>
	import Header from './common/Header'
	import Footer from './common/Footer'
	
	export default{
		components:{
			'my-header':Header,
			'my-footer': Footer,
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>
