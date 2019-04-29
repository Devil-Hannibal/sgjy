<template>
	<div class="footer">
		<div class="top_f">
			<div class="w">
				<div class="yq_link">
					<h4>友情链接</h4>
					<ul class="clearfix">
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
						<li>煨汤下载</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 备注 -->
		<div class="bot_f clearfix">
			<!-- 客服 -->
			<div class="ll">
				<p>龙采学校：0451-895**89 </p>
				<p>龙采加盟：1864634**895</p>
				<button><span class="iconfont icon-jiantou">在线客服</span></button><br>
				<button><span class="iconfont icon-jiantou">在线客服</span></button>
			</div>
			<!-- 公司介绍 -->
			<div class="lc">
				<ul class="clearfix">
					<li>首页 </li>
					<li class="line"></li>
					<li>关于我们</li>
					<li class="line"></li>
					<li>联系我们</li>
					<li class="line"></li>
					<li>免责声明</li>
					<li class="line"></li>
					<li>法律顾问</li>
					<li class="line"></li>
					<li>友情链接</li>
				</ul>
				<div class="marginTop40">
					<p>版权所有：龙采smart科技发展有限公司</p>
					<p>友情提示：投资有风险，咨询请细致，以便成功加盟。</p>
					<p>技术支持：龙采科技</p>
					<p>备案号：895</p>
				</div>
			</div>
			<!-- 二维码区域 -->
			<div class="lr ">
				<img src="./../../../static/images/2wm.png" style="{height: 125px;}" alt="">
				<p class="text-center">关注微信公众号</p>
			</div>

		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	// 通用尾部
	.footer {
		width: 100%;
		background-color: #333333;

		.top_f {
			border-bottom: 1px solid #505050;
			padding: 18px 0px 38px;

			.w {
				width: 1200px;
				margin: 0 auto;

				// 友情链接
				.yq_link {
					color: #b3b3b3;
					font-size: 15px;
					line-height: 26px;

					ul {
						padding-right: 80px;

						li {
							padding-left: 25px;
							float: left;
						}
					}
				}
			}
		}

		.bot_f {
			width: 1200px;
			margin: 0 auto;
			padding: 30px 0 25px;

			// 客服
			.ll {
				float: left;
				p{
					color: white;
					font-size: 16px;
					line-height: 26px;
				}
				button{
					// border: none;
					padding: 3px 20px;
					margin-top: 12px;
					font-size: 16px;
					line-height: 26px;
					&:first-child{
						
						margin-top: 26px;
					}
				}
				
			}

			// 公司介绍
			.lc {
				float: left;
				padding-left: 117px;

				ul {
					li {
						float: left;
						position: relative;

						// 伪元素分割竖线
						&.line::before {
							display: inline-block;
							content: '';
							width: 1px;
							height: 17px;
							position: absolute;
							top: 5px;
							left: 0;
							background-color: #898989;


						}

						&:nth-child(odd) {
							padding: 0px 15px;
							color: #898989;
							font-size: 15px;
							line-height: 24px;
						}
						&:first-child{
							padding-left: 0;
						}
					}
				}

			}

			// 二维码区域
			.lr {
				float: right;
				p{
					font-size: 15px;
					line-height: 26px;
					margin-top:10px;
					 color: #989898;
				}
			}

		}

	}
	.marginTop40{
		margin-top:25px; 
		p{
			font-size: 14px;
			line-height: 26px;
			color: #b3b3b3;
		}
	}
</style>
