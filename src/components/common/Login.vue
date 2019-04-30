<template>
	<div>
		<div class="nav">
			<el-row>
				<el-col :span="12">
					<div class="fl_title">欢迎来到*-*******网！</div>
				</el-col>
				<el-col :span="12">
					<div class="fr_title font16">
						<span class="font15" @click="getLogin(true)">登录</span>
						<span @click="getSurrce(true)">注册</span>
					</div>
				</el-col>
			</el-row>
		</div>
		<bg-model v-show="isBgmodel">
			<!-- 注册 -->
			<div class="card">
				<!-- 注册 -->
				<div class="surrce clearfix" v-show="isSurrce">
					<div class="iconfont icon-jiantou pos1" @click="getLogin(true)"></div>
					<div class="el-icon-close pos2" @click="choseBtns(false)"></div>
					<p class="title">注册思古教育</p>
					<!-- 注册表单 -->
					<el-form :model="surrceForm" :rules="rules" ref="surrceForm" class="surrceFroms">
						<el-form-item prop="phone">
							<el-input type="text" v-model="surrceForm.phone" prefix-icon="el-icon-search" placeholder="请输入手机号码 " maxlength="11"></el-input>
						</el-form-item>
						<el-form-item prop="code">
							<el-input type="text" v-model="surrceForm.code" prefix-icon="el-icon-search" placeholder="请输入验证码" class="bdr realtive">

							</el-input>
							<div class="posText" @click="getCode">获取验证码</div>
						</el-form-item>
						<el-form-item prop="pass">
							<el-input type="password" prefix-icon="el-icon-search" v-model="surrceForm.pass" placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item prop="checkPass">
							<el-input type="password" prefix-icon="el-icon-search" v-model="surrceForm.checkPass" placeholder="请再次输入密码"></el-input>
						</el-form-item>
						<p>我接受并同意<span>《用户服务条款》</span>和<span>《隐私权相关政策》</span></p>
						<el-form-item>
							<el-button type="primary" class="surrceBtn" @click="regInfo">同意并注册</el-button>
						</el-form-item>
					</el-form>
				</div>

				<!-- 登录 -->
				<div class="pc_login" v-show="isSurrce==false">
					<!-- PC登录 -->
					<div class="pcLogin clearfix">
						<p class="el-icon-close pos2" @click="choseBtns(false)"></p>
						<p class="title">登录思古教育</p>
					</div>
					<!-- PC登录表单 -->
					<el-form :model="loginFrom" :rules="rules" class="loginFrom" v-show="isPcLogin==true">
						<el-form-item prop="idName">
							<el-input type="text" v-model="loginFrom.idName" prefix-icon="el-icon-search" placeholder="请输入手机/邮箱/昵称"></el-input>
						</el-form-item>
						<el-form-item prop="pass">
							<el-input type="text" v-model="loginFrom.pass" prefix-icon="el-icon-search" placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item class="el-form-item_btn">
							<el-button type="primary" class="LoginBtn"  @click="login">登录</el-button>
						</el-form-item>
					</el-form>
					<!-- 手机登录表单-->
					<el-form :model="loginFrom" :rules="rules" class="loginFrom" v-show="isPcLogin==false">
						<el-form-item prop="phone1">
							<el-input type="text" v-model="loginFrom.phone" prefix-icon="el-icon-search" placeholder="请输入手机号"></el-input>
						</el-form-item>
						<el-form-item prop="code">
							<el-input type="text" v-model="loginFrom.code" prefix-icon="el-icon-search" placeholder="请输入验证码"></el-input>
						</el-form-item>
						<el-form-item class="el-form-item_btn">
							<el-button type="primary" class="LoginBtn" @click="login">登录</el-button>
						</el-form-item>
					</el-form>
					<div class="tab">
						<div @click="getLogin(false)" v-show="isPcLogin==true">手机验证码登录</div>
						<div @click="getLogin(true)" v-show="isPcLogin==false">账号密码登录</div>
						<div @click="getSurrce(true)">注册新账户</div>
					</div>
				</div>
			</div>
		</bg-model>

	</div>
</template>
<script>
	import Bgmodel from './Bgmodel.vue'
	import common from './../../plugin/common.js'

	export default {
		components: {
			'bg-model': Bgmodel,
		},
		data() {
			return {
				isSurrce: false, //判断登录还是注册 true是注册。false 是登录
				isPcLogin: false, //判断PC登录还是手机端登录 true是PC。false 是手机
				isBgmodel: false,
				surrceForm: { // 注册验证表单
					pass: '',
					checkPass: '',
					phone: '',
					code: ''
				},
				loginFrom: { // 登录验证表单
					idName: '',
					pass: '',
					phone: '',
					code: ''
				},

				rules: {
					phone: [{
							required: true,
							message: "请输入手机号",
							trigger: "blur"
						},
						// {
						// 	validator: function(rule, value, callback) {
						// 		if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(value) == false) {
						// 			callback(new Error("请输入正确的手机号"));
						// 		} else {
						// 			callback();
						// 		}
						// 	},
						// }

					],
					code: [{
						required: true,
						message: "请输入验证码",
						trigger: "blur"
					}],
					pass: [{
						// validator: validatePass,
						required: true,
						trigger: 'blur'
					}],
					checkPass: [{
						// validator: validatePass2,
						required: true,
						trigger: 'blur'
					}],
				},
				rule: {}
			}
		},

		mounted() {

		},
		methods: {
			// 注册按钮
			getSurrce(bool) {
				this.isBgmodel = bool
				this.isSurrce = bool
			},
			// 登录按钮
			getLogin(bool) {
				this.isBgmodel = true
				this.isSurrce = false
				this.isPcLogin = !this.isPcLogin

			},
			// 关闭按钮
			choseBtns(bool) {
				this.isBgmodel = bool
			},
			// 获取验证马
			getCode() {
				let queryString = {
					phone: this.surrceForm.phone
				}
				// this.$axios.post('/api/reg', this.surrceForm)
				this.$axios.post("/api/sendCode", queryString).then(res => {

				})
				// sendCode(queryString).then(res=>{
				// 	alert(123);
				// })
			},
			regInfo() {
				let queryString = {
					phone: this.surrceForm.phone,
					code: this.surrceForm.code,
					password: this.surrceForm.pass
				}
				this.$axios.get("/api/reg", queryString).then(res => {
					console.log(res)
				})
				
			},
			login(){
				let queryString={
						userName:17645175927,//this.loginFrom.idName,
						password:123456//this.loginFrom.pass
				}
				this.$axios.post("/api/login", queryString).then(res => {
					var userInfo=res.data.user
					// console.log(userInfo)
					// return
					// common.alertmsg()
					// common.sessionset('userName',userInfo)
					// var Jsxs=JSON.stringify(userInfo)
					if(typeof(userInfo)=='object'){
						alert('aaaa ')
					}
					window.sessionStorage.setItem('userName',userInfo)
				})
			}
		},

	}
</script>

<style scoped lang="less">
	.nav {
		height: 40px;
		background-color: #f5f5f5;
		line-height: 40px;
	}

	.fl_title {
		color: #949494;
		font-size: 12px;
	}

	.fr_title {
		text-align: right;
	}

	.card {
		position: absolute;
		width: 438px;
		background-color: white;
		left: 50%;
		margin: 246px auto 0;
		border-radius: 10px;
		transform: translateX(-50%);

		// 注册
		.surrce {

			// padding: 15px;
			.pos1 {
				position: absolute;
				left: 15px;
				top: 15px;
				font-size: 18px;
			}

			.pos2 {
				position: absolute;
				right: 15px;
				top: 15px;
				font-size: 18px;
			}

			.title {
				margin-top: 50px;
				font-size: 24px;
				line-height: 35px;
				color: #1e1e1e;
				text-align: center;
			}


		}

		.surrceFroms {
			padding: 40px 27px 0px 27px;

			& .el-form-item:nth-child(2) {
				.el-form-item__content {
					position: relative;
					background-color: pink;
				}
			}

			& .el-form-item:nth-child(4) {
				margin: 0;
			}

			p {
				color: #b5b5b5;
				font-size: 14px;
				line-height: 60px;
				text-align: left;
				height: 60px;

				span {
					color: #2ea6a5;
				}
			}

			.surrceBtn {
				background-color: #2ea6a5;
				color: white;
				font-size: 18px;
				height: 50px;
				line-height: 50px;
				padding: 0;
				text-align: center;
				width: 100%;
				cursor: pointer;

			}
		}

		// 登录
		// pc登录
		// 注册
		.pc_login {
			.pos2 {
				position: absolute;
				right: 15px;
				top: 15px;
				font-size: 18px;
			}

			.title {
				margin-top: 50px;
				font-size: 24px;
				line-height: 35px;
				color: #1e1e1e;
				text-align: center;
			}


		}

		.loginFrom {
			padding: 40px 27px 0px 27px;

			.el-form-item {
				margin-bottom: 34px;
			}

			.el-form-item_btn {
				margin: 0;
			}

			p {
				color: #b5b5b5;
				font-size: 14px;
				line-height: 60px;
				text-align: left;
				height: 60px;

				span {
					color: #2ea6a5;
				}
			}

			.LoginBtn {
				background-color: #2ea6a5;
				color: white;
				font-size: 18px;
				height: 50px;
				line-height: 50px;
				padding: 0;
				text-align: center;
				width: 100%;
				cursor: pointer
			}
		}

		.tab {
			display: flex;
			padding: 0 35px;
			justify-content: space-between;
			padding-bottom: 15x;

			div {
				font-size: 14px;
				line-height: 35px;
				color: #959595;
				cursor: pointer
			}
		}
	}

	.posText {
		position: absolute;
		right: 15px;
		top: 0;
		color: #2ea6a5;
	}

	.realtive {
		position: relative;
	}
</style>
