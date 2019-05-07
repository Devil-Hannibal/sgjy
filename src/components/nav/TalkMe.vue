<template>
	<div class="talkMe">
		<div class="listPos">
			<div >
				<ul>
					<li><span>南岗</span><span>网通校区</span>
						<span>凯德校区</span><span>万达校区</span></li>
					<li><span>道理</span><span>中央校区</span></li>
					<li><span>香坊</span><span>和平校区</span>
					</li>
				</ul>
			</div>
			<!-- 学校的位置联系 -->
				<ul>
					<li class="schoolList">
						<div>
							<div class="title"></div>
							<div class="content">
								<p><span><img src="./../../../static/images/yu.png" alt=""></span>
								<span>400-801-826</span></p>
								<p></p>
								<p></p>
								<p></p>
							</div>
						</div>
						<div><img src="./../../../static/images/lxwm_1.png" alt=""></div>
					</li>
				</ul>
				
		</div>
		<my-diy></my-diy>

	</div>
</template>

<script>
	import DiyCourse from './../common/DiyCourse'
	export default{
		components:{
			'my-diy': DiyCourse,
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="less">
	.talkMe {
		width: 1200px;
		margin: 0 auto;
		padding-top: 23px;
		display: flex;
		justify-content: space-around;
		.listPos{
			width: 903px;
		}
	}
</style>
