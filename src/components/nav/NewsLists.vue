<template>
	<div class="newsList">
		<ul class="aticle_list clearfix">
			<li @click="getNewsDetails">
				<div class="title">自考报名要考多少科目?怎么毕业? 能跳转文章详情 </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
			<li>
				<div class="title">自考报名要考多少科目?怎么毕业? </div>
				<div class="time">2019-4-17</div>
			</li>
	
		</ul>
		<div class="pagination">
			<button>首页</button>
			<el-pagination background layout="prev, pager, next,slot" :total="1000" :page-size="50" prev-text="上一页" next-text="下一页">
			</el-pagination>
			<button>尾页</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			getNewsDetails(){
				this.$router.push({
					path:'/news/details'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.aticle_list {
		border: 1px solid #e8e8e8;
		width: 100%;
	
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			padding-left: 18px;
			padding-right: 35px;
			box-sizing: border-box;
			float: left;
			text-align: center;
			font-size: 14px;
			width: 50%;
			 cursor:pointer;
	
			&:hover {
				background-color: #fff5f2
			}
	
			.title {
				color: #111111;
			}
	
			.time {
				color: #7c7c7c;
			}
		}
	}
	// 分页
	.pagination{
		display: flex;
		justify-content: center;
		padding: 59px 0;
		button{
			font-size: 14px;
			background-color: transparent;
			border: 1px solid #e8e8e8;
			padding: 2px 5px;
		}
	}
</style>
