<template>
  <div class="header">

      <el-header>
        <div class="card">
					<login></login>
          <!-- 搜索区域 -->
          <div style="width: 1200px;margin: 0 auto;">
            <el-row>
              <!-- logo区域 -->
              <el-col :span="4">
                <div class="logo_l">
                  <img src="./../../../static/images/logo.png" alt>
                </div>
              </el-col>
              <!-- 搜索框 -->
              <el-col :span="14" class="paddingLeft138">
                <div class="search">
                  <input class="search_input" type="text">
                  <button class="btn-search el-icon-search"></button>
                  <!-- <img class="search" src="./../assets/images/search.png" alt> -->
                </div>

                <ul class="ul1">
                  <li>
                    <a href="javasrcipt:void(0)" class="ff5">热门搜索 :</a>
                  </li>
                  <li>
                    <a href="javasrcipt:void(0)">考研政治</a>
                  </li>
                  <li>
                    <a href="javasrcipt:void(0)">考研英语</a>
                  </li>
                  <li>
                    <a href="javasrcipt:void(0)">考研数学</a>
                  </li>
                  <li>
                    <a href="javasrcipt:void(0)">考研集训营</a>
                  </li>
                  <li>
                    <a href="javasrcipt:void(0)">考研面试课</a>
                  </li>
                </ul>
              </el-col>
              <!-- 热线电话 -->
              <el-col :span="6">
                <div class="logo_r">
                  <div class="tel">
                    <img src="./../../../static/images/phone.png" alt>
                  </div>
                  <div class="tel_r">
                    <p>全国服务热线</p>
                    <p class="phone_txt">15545452365</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 菜单栏 -->

          <div style="width: 1200px;margin: 0 auto;">
            <div class="meus">
              <span class="iconfont icon-caidan1"></span>
              <span class="paddingLt15">行业分类</span>
            </div>

            <ul class="meus_ul">
              <li>
								<router-link to="/about">关于我们</router-link>
              </li>
              <li>
                	<router-link to="/trainCourse">培训课程</router-link>
              </li>
              <li>
                培训学校
              </li>
              <li>
								<router-link to="/msg">讯息资讯</router-link>
                
              </li>
              <li>
                <router-link to="/home">教考知识</router-link>
              </li>
              <li>
                <router-link to="/starRecommendation">明星推荐</router-link>
              </li>
              <li>
               <router-link to="/talkme">联系我们</router-link>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
    </el-container>
		<!-- 遮罩层 -->
		<!-- <bg-model></bg-model> -->
  </div>
</template>

<script>
	// import Bgmodel from './Bgmodel.vue'
	import Login from './Login.vue'
	
	export default{
		components:{
			'login':Login,
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
/* 整体容器样式 */
.el-container {
  width: 100%;
}
/* 头部区域样式后期可能抽离出去 */
.el-header {
  border-bottom: 2px solid #ff5722;
  height: 217px !important;
  padding: 0;
}
/* .el-header .card {
  width: 1200px;
  margin: 0 auto;
} */

/* 搜索logo区样式 */
.search {
  margin-top: 25px;
  position: relative;
}
.search_input {
  height: 47px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
}

.btn-search {
  width: 80px;
  height: 47px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ff5722;
  border: none;
}
.el-icon-search {
  color: white;
  font-size: 20px;
}
.ul1 li {
  float: left;
  margin-top: 15px;
  padding: 0px 13px;
  font-size: 14px;
}
.ul1 li a {
  color: #b2b2b2;
}
.ul1 li:last-child {
  float: left;
  padding: 0px 0px 0px 13px;
}
.paddingLeft138 {
  padding-left: 138px;
}
.logo_r {
  padding: 40px 0px 0px 100px;
}
.tel {
  float: left;
}
.tel_r p:first-child {
  text-align: right;
}
.tel_r p:last-child {
  color: #ffa589;
  font-size: 21px;
  text-align: right;
}
.ff5 {
  color: #ff5722;
}
/* 横菜单栏 */
.meus {
	
  width: 254px;
  height: 38px;
  line-height: 38px;
  background-color: #ff5722;
  color: white;
  float: left;
	padding-left: 15px;
	box-sizing: border-box;
}
.meus_ul {
  /* padding-left: 52px;
  padding-right: 52px; */
  width: 946px;
  height: 38px;
  line-height: 38px;
  float: left;
}

.meus_ul li {
  float: left;
  width: 14.28%;
  text-align: center;
}
.meus_ul li a {
  display: block;
  width: 100%;
  font-size: 16px;
  color: #333333;
}
.paddingLt15{
	padding-left: 15px;
}
</style>
