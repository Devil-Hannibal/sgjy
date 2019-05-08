<template>
    <div class="CourseDetails">
        <div class="headerDetails">
            <div class="headerContent">
                <el-breadcrumb separator-class="el-icon-arrow-right" style="height:36px;">
                    <el-breadcrumb-item :to="{ path: '/' }">源学网首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/' }">培训课程</el-breadcrumb-item>
                    <el-breadcrumb-item>实操培训课程</el-breadcrumb-item>
                    <el-breadcrumb-item>北京龙潭路仁和会计出口退税课程培训</el-breadcrumb-item>
                </el-breadcrumb>
                <ul class="qf">
                    <li><img :src="img1" alt=""></li>
                    <li>
                        <h1>北京龙潭路仁和会计出口退税课程培训</h1>
                        <p>北京龙潭路仁和会计出口退税课程培训</p>
                        <div>
                            <span>价格：电话咨询</span>
                            <img :src="img2" alt="">
                            <span>课程人气：6326</span>
                        </div>
                        <h2>授课学校：北京567GO健身学院</h2>
                        <h3>咨询电话：0451-85**20</h3>
                        <div class="qf">
                            <img :src="img3" alt="">
                            <div>在线咨询</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="middleDetails qf">
            <div class="middleDetails_content">
                <div class="middleDetailsNav">
                    <router-link to="/courseDetails/1">课程简介</router-link>
                    <router-link to="/courseDetails/2">课程问答</router-link>
                </div>
                <router-view></router-view>
            </div>
            <div class="middleDetails_right">
                <DiyCourse></DiyCourse>
            </div>
        </div>



    </div>
</template>
<script>
    import CourseDetailsImg from '../../../static/images/yc-CourseDetails-1.png'
    import CourseDetailsImg_2 from '../../../static/images/yc-CourseDetails-2.png'
    import CourseDetailsImg_3 from '../../../static/images/yc-CourseDetails-3.png'
    import DiyCourse from '@/components/common/DiyCourse'
    export default {
        name: 'CourseDetails',
        data(){
            return {
                img1:CourseDetailsImg,    //课程图
                img2:CourseDetailsImg_2,    //课程人气图
                img3:CourseDetailsImg_3    //在线咨询图
            }
        },
        components:{
            DiyCourse
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){

            },

        }
    }
</script>
<style lang="less" scoped>
    .qf:after{ content:"";display:block;clear:both;}
    .CourseDetails{width: 100%;margin: 0;padding: 0;}
    .headerDetails{width:100%;height:413px;background: #2f3441;}
    .headerContent{width:1200px;height:100%;margin: 0 auto;}
    .el-breadcrumb{height:0 !important;padding-top: 36px;}
    .el-breadcrumb__inner{color:#a8a9b0;}
    .headerContent>ul{width:100%;margin-top: 52px;}
    .headerContent>ul>li{float: left;}
    .headerContent>ul>li:first-child img{width:400px;height:280px;}
    .headerContent>ul>li:last-child{margin-left: 50px;}
    .headerContent>ul>li:last-child h1{color:#fff;font-size: 30px;}
    .headerContent>ul>li:last-child p{color:#a8a9b0;font-size: 15px;margin-top: 19px;}
    .headerContent>ul>li:last-child>div:nth-child(3){margin-top: 28px;}
    .headerContent>ul>li:last-child>div:nth-child(3)>span:first-child{color:#fff;font-size: 16px;}
    .headerContent>ul>li:last-child>div:nth-child(3)>img{width: 18px;height:20px;margin-left: 30px;}
    .headerContent>ul>li:last-child>div:nth-child(3)>span:last-child{color:#fff;font-size: 16px;margin-left: 8px;}
    .headerContent>ul>li:last-child h2{color:#fff;font-size: 16px;margin-top: 14px;}
    .headerContent>ul>li:last-child h3{color:#ff5722;font-size: 30px;margin-top: 14px;}
    .headerContent>ul>li:last-child>div:nth-child(6){width:153px;height:40px;line-height:40px;text-align:left;border-radius: 20px;
        background: #ff5722;margin-top: 24px;}
    .headerContent>ul>li:last-child>div:nth-child(6)>img{float:left;margin-top: 10px;margin-left: 20px;margin-right: 10px;}
    .headerContent>ul>li:last-child>div:nth-child(6)>div{float:left;height:40px;line-height:40px;font-size:18px;color: #fff;}

    .middleDetails{width:1200px;min-height: 1500px;margin: 0 auto;margin-top:26px;}
    .middleDetails_content{float: left;width:903px;height:100%;}
    .middleDetails .middleDetailsNav{width: 100%;height:50px;background: #fff5f2;}
    .middleDetails .middleDetailsNav a{font-size: 18px;color:#333;height:50px;line-height: 50px;}
    .middleDetails .middleDetailsNav a:first-child{margin-left: 30px;}
    .middleDetails .middleDetailsNav a:last-child{margin-left: 55px;}


    .middleDetails_right{float: left;width:297px;min-height:1500px;}
</style>
<style>
    .el-breadcrumb__inner{color:#a8a9b0 !important;}
    .is-link{color:#a8a9b0 !important;}
    .is-link:hover{color:blue !important;}


</style>