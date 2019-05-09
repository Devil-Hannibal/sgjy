<template>
    <div class="CourseAnswers">
        <div class="answers">
            <ul v-for="item in 5" class="qf">
                <li>
                    <img :src="img2" alt="">
                    <p><span>学员</span>[山风水影]</p>
                </li>
                <li>
                    <div><span>咨询：</span>帮助孩子强化知识应该采用什么样的方式方法？</div>
                    <div><span>咨询师[陈炳阳]回复：</span>学员，您好！期间，哈尔滨百川教育为学员提供了针对于各个年级的期强化课程，帮助孩子全面强化知识内容。主要采用：提高兴趣、巩固基础的教学方式。孩子学习水平差，主要是因是能够充分激发孩子的学习兴趣，让学员能够更加轻松的了解有关于学科的重点知识，并进行强化...</div>
                </li>
                <li>
                    <router-link to=""><img :src="img1" alt=""></router-link>
                </li>
            </ul>
        </div>
        <div class="block" style="margin-top:60px;margin-bottom: 55px;margin-left: 160px;">
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
</template>

<script>
    import CourseAnswersImg_1 from '../../../static/images/yc-CourseAnswers1.png'
    import CourseAnswersImg_2 from '../../../static/images/yc-CourseAnswers2.png'
    import CourseAnswersImg_3 from '../../../static/images/yc-CourseAnswers3.png'
    export default {
        name: 'CourseAnswers',
        data(){
            return {
                img1:CourseAnswersImg_1,    //跳页圆箭头
                img2:CourseAnswersImg_2,    //电话
                img3:CourseAnswersImg_3,    //par2图

                currentPage3: 5,    //分页控件数据
            }
        },
        components:{

        },
        created(){
            this.getData();
        },
        methods:{
            getData(){

            },
            methods: {
                handleSizeChange(val) {       //分页控件方法
                    console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                }
            },

        }
    }
</script>

<style lang="less" scoped>
    .qf:after{ content:"";display:block;clear:both;}
    .CourseAnswers{width: 100%;margin: 0;padding: 0;}
    .answers{margin-top: 45px;width:100%;}
    .answers>ul{width:100%;height:200px;border: 1px solid #d9d9d9;position: relative;margin-top:33px;}
    .answers>ul:first-child{margin-top: 0;}
    .answers>ul:nth-child(even){box-shadow: 2px 2px 5px #999;}
    .answers>ul li:first-child{float: left;width:170px;height:100%;text-align: center;margin-top:27px; }
    .answers>ul li:first-child img{width: 108px;height:108px;border: 2px solid #d9d9d9;border-radius: 50%;box-sizing: border-box;}
    .answers>ul li:first-child p{margin-top: 10px;}
    .answers>ul li:nth-child(2){float: left;width:720px;height:100%;}
    .answers>ul li:nth-child(2)>div:first-child{width:100%;margin-top:33px; font-size: 18px;color:#666;}
    .answers>ul li:nth-child(2)>div:first-child>span{color:#ff5722;}
    .answers>ul li:nth-child(2)>div:last-child{width:100%;height:145px;margin-top:23px; font-size: 15px;color:#666;overflow:hidden;text-overflow:ellipsis;line-height: 25px;}
    .answers>ul li:nth-child(2)>div:last-child>span{color:#568cec;}
    .answers>ul li:nth-child(3){position: absolute;bottom:20px;right:30px;}

</style>
<style>
    .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff5722 !important;
    color: #FFF;
    }
</style>