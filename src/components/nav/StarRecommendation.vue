<template>
    <div class="StarRecommendation">
        <div class="headerStar">
            <div class="headerBreadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right" style="height:36px;">
                    <el-breadcrumb-item :to="{ path: '/' }">源学网首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/' }">明星推荐</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="item in linkage">
                        <el-select v-model="value" placeholder="请选择" size="mini">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="Breadcrumb_del">
                <img :src="Delete_Img" alt="">清空条件
            </div>
            <div class="headerContent">
                <ul class="qf">
                    <li>行业分类：</li>
                    <li>
                        <div class="qf">
                            <p v-for="item in 10" style="margin-left: 20px;" @mouseover="industryShow()">电脑与IT</p>
                        </div>
                        <div class="qf" v-if="is_display"><!--is_display-->
                            <p v-for="item in 5" style="margin-left: 20px;" @click="industrySelect()">软件</p>
                        </div>
                    </li>

                </ul>
                <ul class="qf">
                    <li>上课时间：</li>
                    <li class="qf">
                        <p v-for="item in 20" style="margin-left: 20px;">全日制</p>
                    </li>
                </ul>
                <ul class="qf">
                    <li>培训周期：</li>
                    <li class="qf">
                        <p v-for="item in 20" style="margin-left: 20px;">一周</p>
                    </li>
                </ul>
                <ul class="qf">
                    <li>课程级别：</li>
                    <li class="qf">
                        <p v-for="item in 20" style="margin-left: 20px;">入门级</p>
                    </li>
                </ul>

            </div>
        </div>


        <div class="middleStar qf">
            <div class="middleStar_content">
                <div class="middleStar_content_head qf">
                    <div>综合</div>
                    <div>近期</div>
                    <div>星级推荐</div>
                    <div>
                        <p>价格</p>
                    </div>
                </div>
                <ul v-for="item in 15">
                    <li><img :src="Star_img" alt=""></li>
                    <li><h1>普通话水平测试（幼儿）</h1></li>
                    <li class="qf">
                        <div><span>课程数量：</span>197</div>
                        <div><span>星级推荐：</span>★★★★★</div>
                    </li>
                </ul>
                <div class="block" style="position: absolute;left:180px;top:1700px;">
                    <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>

            <div class="middleStar_right">
                <DiyCourse></DiyCourse>
            </div>
        </div>


    </div>
</template>
<script>
    import StarImg from '../../../static/images/yc-star.png'
    import DeleteImg from '../../../static/images/yc-star-delete.png'
    import DiyCourse from '@/components/common/DiyCourse'
    export default {
        name: 'CourseDetails',
        data(){
            return {
                Star_img:StarImg,    //产品图
                Delete_Img:DeleteImg,//删除小图标
                options: [{       //选择器数据
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',

                linkage:3,            //联动数据
                is_display:false  ,  //行业分类是否隐藏
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
            industryShow(){
                this.is_display=true;
            },
            industrySelect(){
                this.is_display=false;
            }

        }
    }
</script>
<style lang="less" scoped>


    .StarRecommendation{width:1200px;margin: 0 auto;}

    .qf:after{ content:"";display:block;clear:both;}
    .headerStar{width:1200px;position: relative;}
    .headerBreadcrumb{height:50px;}
    .headerStar .Breadcrumb_del{position: absolute;right:15px;top:15px;z-index: 888;height:18px;line-height: 18px;}
    .headerStar .Breadcrumb_del:hover{cursor: pointer;}
    .headerStar .Breadcrumb_del>img{margin-right: 10px;}
    .headerStar .headerContent{width:1200px;border: 1px solid #a8a9b0;box-sizing:border-box;}
    .el-breadcrumb{height:50px !important;line-height: 50px;}
    .el-breadcrumb__inner{color:#a8a9b0;}
    .headerContent{width:1200px;margin: 0 auto;}
    .headerContent>ul{padding:15px;padding-bottom: 0;}
    .headerContent>ul:first-child>li:nth-child(2)>div>p{float: left;margin-bottom: 10px;}
    .headerContent>ul:first-child>li:nth-child(2)>div>p:hover{color:#ff5722;cursor: pointer;}
    /*.headerContent>ul:first-child>li:nth-child(2)>div:nth-child(2){display: none;}*/

    .headerContent>ul>li{float: left;}
    .headerContent>ul>li:first-child{width:80px;text-align: left;}
    .headerContent>ul>li:nth-child(2){width:1088px;text-align: left;}
    .headerContent>ul>li:nth-child(2)>p{float: left;margin-bottom: 10px;}
    .headerContent>ul>li:nth-child(2)>p:hover{color:#ff5722;cursor: pointer;}


    .middleStar{width:1200px;min-height: 1500px;margin: 0 auto;margin-top:24px;}
    .middleStar_content{float: left;width:903px;height:1660px;border: 1px solid #a8a9b0;box-sizing: border-box;position:relative;margin-bottom:140px;}
    .middleStar_content_head{width:100%;height:45px;border-bottom: 1px solid #a8a9b0;box-sizing: border-box;}
    .middleStar_content_head>div{float: left;color:#666;height:45px;line-height:45px;margin: 0 35px;}
    .middleStar_content>ul{float: left;width:275px;height:273px;border-bottom: 1px solid #a8a9b0;
        box-sizing: border-box;margin-left: 17px;margin-top:35px;}
    .middleStar_content>ul>li{width:100%;}
    .middleStar_content>ul>li:first-child img{width:275px;height:180px;}
    .middleStar_content>ul>li:nth-child(2) h1{width:275px;height:18px;font-size: 18px;margin-top: 18px;font-weight: normal;}
    .middleStar_content>ul>li:nth-child(3){margin-top: 17px;}
    .middleStar_content>ul>li:nth-child(3)>div{float: left;}
    .middleStar_content>ul>li:nth-child(3)>div>span{color:#ff0808;}
    .middleStar_content>ul>li:nth-child(3)>div:first-child{color:#ff0808;}
    .middleStar_content>ul>li:nth-child(3)>div:last-child{float:right;color:#ffbe2e;}


    .middleStar_right{float: left;width:297px;min-height:1500px;}
</style>
<style>
    .el-breadcrumb__inner{color:#ff5722 !important;}
    .is-link{color:#a8a9b0 !important;}
    .is-link:hover{color:blue !important;}
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff5722 !important;
        color: #FFF;
    }
</style>