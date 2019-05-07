<template>
	<div class="home">
		<!-- 内容区域 -->
		<div class="container">
			<!-- 轮播图与菜单区域 -->
			<div class="hyfl_box clearfix">
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
					<div class="banner_box clearfix">
						<div class="banner_one">
							<my-banner :imgList="imgLoop_one" :imgHeight="imgHeight_one"></my-banner>
						</div>
						<div class="newsList">
							<div class="title">
								<span></span>
								<span>热门头条</span>
							</div>
							<div class="content">
								<ul>
									<li>2019幼儿教师资格综合素质啊啊啊 啊啊啊</li>
									<li>2019幼儿教师资格综合素质啊啊啊</li>
									<li>2019幼儿教师资格综合素质啊啊啊</li>
									<li>2019幼儿教师资格综合素质啊啊啊</li>
									<li>2019幼儿教师资格综合素质啊啊啊</li>
									<li>2019幼儿教师资格综合素质啊啊啊</li>
									<li>2019幼儿教师资格综合素质啊啊啊</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="banner_two">
						<my-banner :imgList="imgLoop_two" :imgHeight="imgHeight_two" :isCarousel="isCarousel" :imgWidth="imgWidth"></my-banner>
					</div>
				</div>
			</div>
						<!-- 地区划分 -->
			<div class="dqhf ">
				<div class="title clearfix">
					<div>
						<span class="iconfont icon-jiantou"></span>
						<span>按地区划分</span>
					</div>
					<ul class="tabs">
						<li>道理</li>
						<li>道理</li>
						<li class="active">道理</li>
						<li>道理</li>
						<li>道理</li>
						<li>道理</li>
						<li>道理</li>
					</ul>
				</div>
				<div class="content">
					<ul>
						<li>
							<div>
								<img src="./../../../static/images/adqhf.png" alt="">
								<p class="txt">中推联合（北京）医学研究院</p>
								<p class="txt1">
									<span class="text-left">课程数量:197</span>
									<span class="text-right">星级推荐
										<i><img src="./../../../static/images/start.png" alt="">
											<img src="./../../../static/images/start.png" alt="">
											<img src="./../../../static/images/start.png" alt="">
										</i>

									</span>
								</p>
							</div>
						</li>
						<li>
							<div>
								<img src="./../../../static/images/adqhf.png" alt="">
								<p class="txt">中推联合（北京）医学研究院</p>
								<p class="txt1">
									<span class="text-left">课程数量:197</span>
									<span class="text-right">星级推荐
										<i><img src="./../../../static/images/start.png" alt="">
											<img src="./../../../static/images/start.png" alt="">
											<img src="./../../../static/images/start.png" alt="">
										</i>

									</span>
								</p>
							</div>
						</li>
						<li>
							<div>
								<img src="./../../../static/images/adqhf.png" alt="">
								<p class="txt">中推联合（北京）医学研究院</p>
								<p class="txt1">
									<span class="text-left">课程数量:197</span>
									<span class="text-right">星级推荐
										<i><img src="./../../../static/images/start.png" alt="">
											<img src="./../../../static/images/start.png" alt="">
											<img src="./../../../static/images/start.png" alt="">
										</i>
						
									</span>
								</p>
							</div>
						</li>
					<li>
						<div>
							<img src="./../../../static/images/adqhf.png" alt="">
							<p class="txt">中推联合（北京）医学研究院</p>
							<p class="txt1">
								<span class="text-left">课程数量:197</span>
								<span class="text-right">星级推荐
									<i><img src="./../../../static/images/start.png" alt="">
										<img src="./../../../static/images/start.png" alt="">
										<img src="./../../../static/images/start.png" alt="">
									</i>
					
								</span>
							</p>
						</div>
					</li>
					</ul>
				</div>
			</div>
			
<!-- 教育专栏 -->
			<div class="education">
				<div class="head">教育专栏</div>
				<div class="yypx clearfix">
					<div class="px_details fl">
						<div class="title clearfix">
							<div class="fl">
								<span>1F</span>
								<span>语言培训</span>
							</div>
							<ul class="tabs">
								<li class="active">小语种</li>
								<li>英语</li>
							</ul>
						</div>
						<div class="content clearfix">
							<div class="fl"> <img src="./../../../static/images/1.png" alt=""></div>
							<div class="fl details">
								<ul class="clearfix">
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- 热门回答 -->
					<div class="headlines fr">
						<div class="hot_title">
							<span class="hot_tt">热门头条</span>
							<span class="hot_hd">热门回答</span>
							<span>MORE+</span>
						</div>
						<div class="hot_content">
							<ul class="imgTxtList">
								<li>
									<img src="./../../../static/images/px.png" alt="">
									<div class="fr txt">
										<p>会计职称精品班</p>
										<p>培训周期:6个月</p>
										<p>价格: <span class="f52">电话咨询</span></p>
									</div>
								</li>
								<li>
									<img src="./../../../static/images/px.png" alt="">
									<div class="fr txt">
										<p>会计职称精品班</p>
										<p>培训周期:6个月</p>
										<p>价格: <span class="f52">电话咨询</span></p>
									</div>
								</li>
							</ul>
							<ul class="txtList">
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>

								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- 资格考试 -->
				<div class="yypx clearfix zgks">
					<div class="px_details fl">
						<div class="title clearfix">
							<div class="fl">
								<span>2F</span>
								<span>资格考试</span>
							</div>
							<ul class="tabs">
								<li class="active">小语种</li>
								<li>英语</li>
							</ul>
						</div>
						<div class="content clearfix">
							<div class="fl"> <img src="./../../../static/images/1.png" alt=""></div>
							<div class="fl details">
								<ul class="clearfix">
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- 热门回答 -->
					<div class="headlines fr">
						<div class="hot_title">
							<span class="hot_tt">热门头条</span>
							<span class="hot_hd">热门回答</span>
							<span>MORE+</span>
						</div>
						<div class="hot_content">
							<ul class="imgTxtList">
								<li>
									<img src="./../../../static/images/px.png" alt="">
									<div class="fr txt">
										<p>会计职称精品班</p>
										<p>培训周期:6个月</p>
										<p>价格: <span class="f52">电话咨询</span></p>
									</div>
								</li>
								<li>
									<img src="./../../../static/images/px.png" alt="">
									<div class="fr txt">
										<p>会计职称精品班</p>
										<p>培训周期:6个月</p>
										<p>价格: <span class="f52">电话咨询</span></p>
									</div>
								</li>
							</ul>
							<ul class="txtList">
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>

								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- 学习辅导 -->
				<div class="yypx clearfix xxfd">
					<div class="px_details fl">
						<div class="title clearfix">
							<div class="fl">
								<span>3F</span>
								<span>学习辅导</span>
							</div>
							<ul class="tabs">
								<li class="active">小语种</li>
								<li>英语</li>
							</ul>
						</div>
						<div class="content clearfix">
							<div class="fl"> <img src="./../../../static/images/1.png" alt=""></div>
							<div class="fl details">
								<ul class="clearfix">
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/px.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- 热门回答 -->
					<div class="headlines fr">
						<div class="hot_title">
							<span class="hot_tt">热门头条</span>
							<span class="hot_hd">热门回答</span>
							<span>MORE+</span>
						</div>
						<div class="hot_content">
							<ul class="imgTxtList">
								<li>
									<img src="./../../../static/images/px.png" alt="">
									<div class="fr txt">
										<p>会计职称精品班</p>
										<p>培训周期:6个月</p>
										<p>价格: <span class="f52">电话咨询</span></p>
									</div>
								</li>
								<li>
									<img src="./../../../static/images/px.png" alt="">
									<div class="fr txt">
										<p>会计职称精品班</p>
										<p>培训周期:6个月</p>
										<p>价格: <span class="f52">电话咨询</span></p>
									</div>
								</li>
							</ul>
							<ul class="txtList">
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>

								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-jiantou"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- END -->
			</div>

			<!-- 轮播图3 -->
			<div class="lbt3">
				<my-banner :imgList="imgLoop_three" :imgHeight="imgHeight_three"></my-banner>
			</div>
			<!-- 新闻动态 -->
			<div class="newsDt">
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span>图标</span>
							<span>教育新闻</span>
							<span class="sg_skew"></span>
							<span class="bg_line"></span>
						</div>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="more fr">MORE+</span>
					</div>
					<div class="content">
						<div class="clearfix news_box">
							<div class="fl"><img src="./../../../static/images/jyxw1.png" alt=""></div>
							<div class="fr"><img src="./../../../static/images/jyxw2.png" alt=""></div>

						</div>
						<ul class="textList">
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 热门课程 -->
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span>图标</span>
							<span>教育新闻</span>
							<span class="sg_skew"></span>
							<span class="bg_line"></span>
						</div>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="more fr">MORE+</span>
					</div>
					<div class="content">
						<div class="clearfix news_box">
							<div class="fl"><img src="./../../../static/images/jyxw1.png" alt=""></div>
							<div class="fr"><img src="./../../../static/images/jyxw2.png" alt=""></div>

						</div>
						<ul class="textList">
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 人气学校 -->
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span>图标</span>
							<span>教育新闻</span>
							<span class="sg_skew"></span>
							<span class="bg_line"></span>
						</div>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="more fr">MORE+</span>
					</div>
					<div class="content">
						<div class="clearfix news_box">
							<div class="fl"><img src="./../../../static/images/jyxw1.png" alt=""></div>
							<div class="fr"><img src="./../../../static/images/jyxw2.png" alt=""></div>

						</div>
						<ul class="textList">
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 特惠信息 -->
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span>图标</span>
							<span>教育新闻</span>
							<span class="sg_skew"></span>
							<span class="bg_line"></span>
						</div>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="bg_line"></span>
						<span class="more fr">MORE+</span>
					</div>
					<div class="content">
						<div class="clearfix news_box">
							<div class="fl"><img src="./../../../static/images/jyxw1.png" alt=""></div>
							<div class="fr"><img src="./../../../static/images/jyxw2.png" alt=""></div>

						</div>
						<ul class="textList">
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-jiantou"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
						</ul>
					</div>
				</div>
			</div>





		</div>
		<!-- 底部 -->
		<router-view></router-view>
	
	</div>
</template>

<script>
	// import Header from './../common/Header';
	import Banner from './../common/Banner';
	// import Footer from './../common/Footer'
	// import About from './../about/About'

	export default {

		components: {
			// 'my-header': Header,
			'my-banner': Banner,
			// 'my-footer': Footer,
		},
		data() {
			return {
				isCarousel: true,
				imgWidth: 33,
				imgHeight_one: 328,
				imgLoop_one: [{
						srcName: require('./../../../static/images/banner1.png')
					},
					{
						srcName: require('./../../../static/images/banner2.png')
					},
					{
						srcName: require('./../../../static/images/banner3.png')
					},
				],
				imgHeight_two: 200,
				imgLoop_two: [{
						srcName: require('./../../../static/images/t1.png')
					},
					{
						srcName: require('./../../../static/images/t2.png')
					},
					{
						srcName: require('./../../../static/images/t3.png')
					},
					{
						srcName: require('./../../../static/images/t3.png')
					},
					{
						srcName: require('./../../../static/images/t2.png')
					},
					{
						srcName: require('./../../../static/images/t1.png')
					},
				],
				imgHeight_three: 190,
				imgLoop_three: [{
						srcName: require('./../../../static/images/lbt.png')
					},

				],
			};
			// imgHeight:400
		},
		methods: {}
	}
</script>

<style lang="less" scoped="scoped">
	.container {
		width: 1200px;
		margin: 0 auto;
	}

	.navMenus {
		width: 252px;
		border: 1px solid #ff5722;
		float: left;
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

	// 轮播图一
	.lunbo {
		float: right;
		margin-top: 10px;
	}

	.banner_one {
		width: 667px;
		overflow: hidden;
		float: left;
		padding-right: 10px;

	}

	// 新闻
	.newsList {
		width: 255px;
		height: 329px;
		float: right;

		.title {
			line-height: 40px;
			color: #fff;
			background-color: #ff5722;
		}

		.content {
			height: 284px;
			font-size: 15px;
			border-bottom: 1px solid #e6e6e6;
			border-left: 1px solid #e6e6e6;
			border-right: 1px solid #e6e6e6;
			padding: 16px 23px 28px 17px;
			box-sizing: border-box;

			li {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				line-height: 36px;
			}
		}
	}

	// 轮播图二
	.banner_two {
		width: 932px;
		height: 200px;
	}

	// 地区划分
	.dqhf {
		margin-top: 22px;

		.title {
			color: #ff5722;
			font-size: 24px;
			line-height: 30px;
			border-bottom: 2px solid #ff633c;

			&>div {
				float: left;

			}

			.tabs {
				float: right;

				li {
					float: left;
					height: 40px;
					line-height: 40px;
					padding: 0px 23px;
					color: #333333;
					font-size: 16px;
					background-color: #f5f5f5;

					&.active {
						background-color: #ff5722;
						color: white;
					}
				}
			}
		}

		.content {
			padding: 41px 14px 60px;

			ul {
				// width: 100%;
				height: 200px;

				li {
					float: left;
					width: 25%;
					box-sizing: border-box;

					&+li {
						padding-left: 10px;
					}

					&>div {
						height: 200px;
						text-align: center;
						border: 1px solid #e2e2e2;
						padding: 0px 10px 10px 10px;
						box-sizing: border-box;

						.txt {
							font-size: 16px;
							color: #333333;
							text-align: center;
							line-height: 30px;


						}

						.txt1 {
							font-size: 14px;
							color: #ff0808;

						}
					}
				}
			}
		}

	}

	// 教育专栏
	.education {
		border-top: 1px solid #333333;
		// background-color: pink;
		position: relative;
		padding-top: 60px;

		.head {
			font-size: 36px;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			font-family: '黑体';
			background-color: white;
			padding: 0px 20px;
		}
	}

	// 语言培训
	.yypx {

		// width: 934px;
		// 左侧信息
		.px_details {
			float: left;
			width: 934px;

			.title {
				color: #333333;
				font-size: 24px;
				border-bottom: 2px solid #70d5cd;

				.tabs {
					float: right;

					li {
						float: left;
						height: 40px;
						line-height: 40px;
						padding: 0px 23px;
						color: #333333;
						font-size: 16px;
						background-color: #f5f5f5;

						&.active {
							background-color: #70d5cd;
							color: white;
						}
					}
				}
			}

			.content {
				padding-top: 30px;

				>div {
					width: 221px;

					img {
						width: 100%;
					}
				}

				.details {
					width: 700px;
					padding-left: 10px;

					ul {
						width: 100%;


						li {
							float: left;
							width: 33.333%;
							box-sizing: border-box;

							&+li {
								padding-left: 10px;
							}

							&:nth-child(4) {

								padding-left: 0px;
							}

							&:nth-child(n+4) {
								margin-top: 6px;
							}

							div {
								border: 1px solid #999999;

								img {
									width: 100%;
									height: 135px;
								}

								.txt {
									font-size: 16px;
									color: #333333;
									text-align: center;
									line-height: 30px;


								}

								.txt1 {
									font-size: 14px;
									color: #ff0808;
									padding: 0px 10px 10px;
								}
							}
						}
					}
				}

			}

		}

		.f52 {
			color: #ff5722;
		}

		// 右侧新闻
		.headlines {
			padding-left: 15px;
			width: 250px;

			// 人们回答头部
			.hot_title {
				height: 40px;
				line-height: 30px;
				padding-bottom: 10px;
				box-sizing: border-box;
				border-bottom: 1px solid #dcdcdc;

				span {
					font-size: 18px;
					color: #333333;

				}

				& span:nth-child(2) {
					padding-left: 18px;
				}

				& span:last-child {
					font-size: 14px;
					color: #ff5722;
					padding-left: 25px;
				}
			}

			.hot_content {
				padding: 16px 10px 0px;

				// 带图片的新闻
				.imgTxtList {
					li {
						&:nth-child(2) {
							margin-top: 20px;
						}

						// margin: 20px;
						img {
							width: 100px;
							height: 70px;

							.txt {
								font-size: 15px;
								line-height: 40px;
								color: #666666;

							}
						}
					}
				}

				.txtList {
					color: #b2b2b2;
					font-size: 15px;
					line-height: 36px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;

					span {
						padding-left: 15px;

					}
				}
			}
		}
	}

	.zgks {
		margin-top: 45px;

	}

	.xxfd {
		margin-top: 45px;
	}

	.lbt3 {
		margin-top: 38px;
		background-color: #70d5cd;
	}

	// 教育新闻

	.jyxw {
		width: 49%;
		border: 1px solid #d9d9d9;

		&:nth-child(n+3) {
			margin-top: 20px;
		}


		.title {
			border-bottom: 1px solid #ff6433;

			.new_icon {
				line-height: 50px;
				color: white;
				background-color: #ff5722;
				font-size: 22px;
				padding: 0px 17px;
				position: relative;

				.sg_skew {
					display: inline-block;
					width: 20px;
					height: 50px;
					transform: skew(14deg);
					position: absolute;
					top: 0;
					right: -10px;
					background-color: #ff5722;

				}

				.bg_line::before {
					display: block;
					content: '';
					width: 2px;
					height: 50px;
					background-color: #ff5722;
					transform: skew(14deg);
					position: absolute;
					right: -15px;
					top: 0;
				}
			}

			.more {
				font-size: 14px;
				color: #ff5722;
				line-height: 50px;
			}
		}

		.content {

			padding: 27px;

			.news_box {
				&>div {
					width: 48%;

					// padding-right: 22px;
					img {
						width: 100%;
					}
				}
			}

			.textList {
				padding-top: 30px;
				font-size: 15px;
				color: #666666;

				li {
					border-bottom: 1px dashed #e4e0e0;
					height: 40px;
					line-height: 40px;

					& span:last-child {
						padding-left: 20px;
					}

					&+li {
						border-bottom: none;
					}

				}
			}
		}
	}

	.newsDt {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 40px;
	}
</style>
