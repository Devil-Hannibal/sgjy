<template>
	<div class="talkMe">
		<div class="banner">
			<img src="./../../../static/images/banenr_one.png" alt="">
		</div>
		<div class="listPos">
			<div  class="posList">
				<ul>
					<li><span>南岗</span><span>网通校区</span>
						<span>凯德校区</span><span>万达校区</span></li>
					<li><span>道理</span><span>中央校区</span></li>
					<li><span>香坊</span><span>和平校区</span>
					</li>
				</ul>
			
			<!-- 学校的位置联系 -->
			<ul class="schoolList">
				<li>
					<div>
						<div class="title"></div>
						<div class="content">
							<p><span><img src="./../../../static/images/yu.png" alt=""></span>
								<span>400-801-826</span></p>
							<p>上课地址：南岗区学府路哈师大对面</p>
							<p>乘车路线：379、68、94、104、106、114、116、87</p>
							<p><span>提醒信息:</span><span>建议前来报名之前电话咨询和预约</span></p>
						</div>
					</div>
					<div><img src="./../../../static/images/lxwm_1.png" alt=""></div>
				</li>
			</ul>
			</div>

			<my-diy></my-diy>
		</div>


	</div>
</template>

<script>
	import DiyCourse from './../common/DiyCourse'
	export default {
		components: {
			'my-diy': DiyCourse,
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="less">
	.talkMe {
		margin: 0 auto;

		.banner {
			width: 100%;
			height: 412px;
			text-align: center;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.listPos {
			width: 1200px;
			margin: 0 auto;
			padding-top: 30px;
			display: flex;
			justify-content: space-between;
			.posList{
				display: flex;
				justify-content: start;
				flex-direction: column;
				align-items: center;
				li{
					border-bottom: 1px solid #ccc;
				}
			}
		}
	}
</style>
