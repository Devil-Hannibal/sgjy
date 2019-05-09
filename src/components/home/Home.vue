<template>
	<div class="home">
		<!-- 内容区域 -->
		<div class="container">
			<!-- 轮播图与菜单区域 -->
			<div class="hyfl_box clearfix">
				<!-- 行业分类	 -->
				<div class="navMenus" ref='navMenus' @mouseout="navListBox(false)">
					<ul class="nav" @mousemove="navListBox(true)">
						<!-- 列表 -->
						<li>
							<p>
								<span class="iconfont icon-shu"></span>
								<span class="ts">学习辅导</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
							<div class="infoDetaial" v-show="infoDetaial==true">
								<div class="paddingIner">
									<dl class="info_dl clearfix">
										<dt>
											<a href="javascript:void(0)">宠物</a>
											<b class="sm_arrow"> ></b>
										</dt>
										<dd class="cell clearfix">
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
										</dd>
									</dl>
									<dl class="info_dl clearfix">
										<dt>
											<a href="javascript:void(0)">宠物</a>
											<b class="sm_arrow"> ></b>
										</dt>
										<dd class="cell clearfix">
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
											<em>
												<a class="highlight" href="javascript:void(0)">
													气修家电
												</a>
											</em>
											<em>
												<a class="highlight" href="javascript:void(0)">
													模特走秀
												</a>
											</em>
										</dd>
									</dl>
									<dl class="info_dl clearfix">
										<dt>
											<a href="javascript:void(0)">宠物</a>
											<b class="sm_arrow"> ></b>
										</dt>
										<dd class="cell clearfix">
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
										</dd>
									</dl>
									<dl class="info_dl clearfix">
										<dt>
											<a href="javascript:void(0)">宠物</a>
											<b class="sm_arrow"> ></b>
										</dt>
										<dd class="cell clearfix">
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
											<em>
												<a class="highlight" href="javascript:void(0)">
													宠物美容
												</a>
											</em>
										</dd>
									</dl>
								</div>
								<div class="posLogo"><img src="./../../../static/images/listpng.png" alt=""></div>
							</div>
						</li>
						<li>
							<p>
								<span class="iconfont icon-yishu"></span>
								<span class="ts">文体艺术</span>
							</p>
							<p class="ts1"><span>书画</span>
								<span> 音乐</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-peixun"></span>
								<span class="ts">英语培训</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-computer_icon"></span>
								<span class="ts">电脑与IT</span>
							</p>
							<p class="ts1"><span>办公应用</span>
								<span> 软件系统</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-lingjin"></span>
								<span class="ts">职业技能</span>
							</p>
							<p class="ts1"><span>拓展训练营</span>
								<span> 中小学教育</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
						<li>
							<p>
								<span class="iconfont icon-37"></span>
								<span class="ts">资格考试</span>
							</p>
							<p class="ts1"><span>会计</span>
								<span> 金融</span>
								<span> 职称考试</span></p>
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
								<span class="iconfont icon-boshimao"></span>
								<span class="ts">学历文凭</span>
							</p>
							<p class="ts1"><span>成人教育</span>
								<span> 靠博考研</span></p>
							<span class="iconfont icon-jiantou iconPos"></span>
						</li>
					</ul>

				</div>
				<div class="lunbo">
					<div class="banner_box clearfix">
						<div class="banner_one">
							<my-banner :imgList="imgLoop_one" :imgHeight="imgHeight_one" :swiperOption="swiperOptionOne"></my-banner>
						</div>
						<div class="newsList">
							<div class="title">
								<span class="iconfont icon-baobiao"></span>
								<span>热门头条</span>
							</div>
							<div class="content">
								<ul>
									<li>
										<span :style="hot_bg" class="hot_bg">1</span><span>2019幼儿教师资格综合素质啊啊啊 啊啊啊</span></li>
									<li>
										<span :style="hot_bg" class="hot_bg">2</span><span>2019幼儿教师资格综合素质啊啊啊 啊啊啊</span></li>
									<li>
										<span :style="hot_bg" class="hot_bg">3</span><span>2019幼儿教师资格综合素质啊啊啊 啊啊啊</span></li>
									<li>
										<span :style="hot_bg" class="hot_bg">4</span><span>2019幼儿教师资格综合素质啊啊啊 啊啊啊</span></li>
									<li>
										<span :style="hot_bg" class="hot_bg">5</span><span>2019幼儿教师资格综合素质啊啊啊 啊啊啊</span></li>
									<li>
										<span :style="hot_bg" class="hot_bg">6</span><span>2019幼儿教师资格综合素质啊啊啊 啊啊啊</span></li>
									<li>
										<span :style="hot_bg" class="hot_bg">7</span><span>2019幼儿教师资格综合素质啊啊啊 啊啊啊</span></li>


								</ul>
							</div>
						</div>
					</div>
					<div class="banner_two">
						<my-banner :imgList="imgLoop_two" :imgHeight="imgHeight_two" :swiperOption="swiperOptionTwo"></my-banner>
					</div>
				</div>
			</div>
			<!-- 地区划分 -->
			<div class="dqhf ">
				<div class="title clearfix">
					<div>
						<span class="iconfont icon-dingwei"></span>
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
										<el-rate v-model="start_value" disabled text-color="#ffbe2e" score-template="{value}"></el-rate>

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
										<el-rate v-model="start_value" disabled text-color="#ffbe2e" score-template="{value}"></el-rate>

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
										<el-rate v-model="start_value" disabled text-color="#ffbe2e" score-template="{value}"></el-rate>

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
										<el-rate v-model="start_value" disabled text-color="#ffbe2e" score-template="{value}"></el-rate>

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
								<span class="bg" :style="{backgroundImage: 'url(' + bg1 + ')' }">1F</span>
								<span>语言培训</span>
							</div>
							<ul class="tabs">
								<li @click="getLanguageTrain('xyz')" :class="{'active':this.train.language=='xyz'}">小语种</li>
								<li @click="getLanguageTrain('yy')" :class="{'active':this.train.language=='yy'}">英语</li>
							</ul>
						</div>
						<div class="content clearfix">
							<div class="fl"> <img src="./../../../static/images/1.png" alt=""></div>
							<div class="fl details" v-show="this.train.language=='xyz'">
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
							<div class="fl details" v-show="this.train.language=='yy'">
								<ul class="clearfix">
									<li>
										<div>
											<img src="./../../../static/images/121.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/121.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/121.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/121.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/121.png" alt="">
											<p class="txt">中推联合（北京）医学研究院</p>
											<p class="txt1">
												<span class="text-left">价格:&yen;10097</span>
												<span class="fr">人气:7582</span>
											</p>
										</div>
									</li>
									<li>
										<div>
											<img src="./../../../static/images/121.png" alt="">
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
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>

								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
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
								<span class="bg" :style="{backgroundImage: 'url(' + bg3 + ')' }">2F</span>
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
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>

								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
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
								<span class="bg" :style="{backgroundImage: 'url(' + bg3 + ')' }">3F</span>
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
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>

								<li>
									<i class="iconfont icon-laba_"></i>
									<span>2019幼儿教师综合资格证书</span>
								</li>
								<li>
									<i class="iconfont icon-laba_"></i>
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
				<my-banner :imgList="imgLoop_three" :imgHeight="imgHeight_three" :swiperOption="swiperOptionOne"></my-banner>
			</div>
			<!-- 新闻动态 -->
			<div class="newsDt">
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span class="iconfont icon-diqiu"></span>
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
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 热门课程 -->
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span class="iconfont icon-shu"></span>
							<span>热门课程</span>
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
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 人气学校 -->
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span class="iconfont icon-xuexiao"></span>
							<span>人气学校</span>
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
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 特惠信息 -->
				<div class="jyxw">
					<div class="title clearfix">
						<div class="new_icon fl">
							<span class="iconfont icon-jilu"></span>
							<span>特惠信息</span>
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
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
								<span>哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈尔滨哈</span>
							</li>
							<li>
								<span class="iconfont icon-laba_"></span>
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
	import Banner from './../common/Banner';
	import Bg1 from './../../../static/images/floor_title_1.png'
	import Bg2 from './../../../static/images/floor_title_2.png'
	import Bg3 from './../../../static/images/floor_title_3.png'

	export default {

		components: {
			'my-banner': Banner,
		},
		data() {
			return {
				bg1:Bg1,
				bg2:Bg2,
				bg3:Bg3,
				
				train: {
					language: "xyz",
				},
				
				// 第一个轮播图的配置项
				swiperOptionOne: {
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
				// 第二个轮播图的配置项
				swiperOptionTwo: {
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
				start_value: 3, //星星的数量
				hot_bg: {
					backgroundImage: "url(" + require("./../../../static/images/01.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",

				}, //热门列表的背景图
				infoDetaial: false, //显示 菜单分类列表
				// isCarousel: true, //判断是否是Carousel模式下轮播图
				imgHeight_one: 328, //轮播图高度
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
		mounted() {},
		methods: {
			// 触摸菜单 显示分类盒子
			navListBox(bool) {
				this.infoDetaial = bool;
			},
			getLanguageTrain(val) {
				this.train.language = val;
			}
		},
		watch: {

		}
	}
</script>

<style lang="less" scoped="scoped">
	.container {
		width: 1200px;
		margin: 0 auto;
	}

	.navMenus .iconfont {
		color: #ff5722;
		font-size: 22px;
	}

	.navMenus {
		width: 252px;
		border: 1px solid #ff5722;
		float: left;
		position: relative;
		border-top: none;
	}

	.navMenus .nav li {
		position: relative;
		padding-left: 20px;
		height: 67px;
		box-sizing: border-box;
		border-bottom: 1px dashed #e7e7e7;
	}

	.navMenus .nav li:last-child {
		border-bottom: none;
	}

	.navMenus .nav li p:first-child {
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
			padding-left: 20px;
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

			.iconfont {
				font-size: 20px;
				padding-right: 10px;
			}

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
							display: flex;
							justify-content: space-between;

							& span:nth-child(2) {
								display: flex;
								justify-content: start;
							}

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
				.bg{
					background: no-repeat;
					width: 60px;
					color: white;
					height: 40px;
					display: inline-block;
					font-size: 18px;
					line-height: 40px;
					
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
					padding-left: 22px;
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

				.iconfont {
					font-size: 20px;
					margin-right: 10px;
				}

				.sg_skew {
					display: inline-block;
					width: 20px;
					height: 51px;
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

	// 菜单弹出内容
	.infoDetaial {
		position: absolute;
		top: 0;
		right: -680px;
		width: 678px;
		height: 536px;
		background-color: white;
		z-index: 100;
		border: 1px solid #ccc;

		.posLogo {
			position: absolute;
			right: 20px;
			bottom: 0;

			img {
				width: 197px;
				height: 157px;
			}

		}

		.paddingIner {
			padding: 38px 24px 24px 40px;

			.info_dl {
				dt {
					float: left;
					position: relative;
					width: 58px;
					text-align: right;
					padding-right: 15px;
					margin-top: 10px;

					a {
						font-size: 14px;
						color: #ff5400;
						line-height: 14px
					}

					.sm_arrow {
						position: absolute;
						right: -30px;
						width: 40px;
						color: #ff5400;

					}
				}

				.cell {
					padding-top: 10px;
					padding-bottom: 10px;
					margin-left: 125px;
					border-bottom: 1px dashed #ddd;
				}

				dd em {
					border-right: 1px solid #ff5400;
					float: left;
					font-style: normal;
					height: 14px;
					line-height: 14px;
					margin: 5px 0;
					padding: 0 20px;
					font-size: 14px;

					&:last-child {
						border-right: none;
					}

					a {
						color: #ff5400;
					}
				}
			}
		}
	}

	.hot_bg {
		padding: 0 10px;
		text-align: center;
		margin-right: 15px;
	}
</style>
