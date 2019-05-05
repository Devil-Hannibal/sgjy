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
					<el-form :model="surrceForm" :rules="rules1" ref="surrceForm" class="surrceFroms">
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
							<el-button type="primary" class="LoginBtn" @click="login">登录</el-button>
						</el-form-item>
					</el-form>
					<!-- 手机登录表单-->
					<el-form :model="loginFrom" :rules="rules" class="loginFrom" v-show="isPcLogin==false">
						<el-form-item prop="phone1">
							<el-input type="text" v-model="loginFrom.phone" prefix-icon="el-icon-search" placeholder="请输入手机号"></el-input>
						</el-form-item>
						<el-form-item prop="code">
							<el-input type="text" v-model="loginFrom.code" prefix-icon="el-icon-search" placeholder="请输入验证码"></el-input>
							<div class="posText" @click="getCode">获取验证码</div>
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
			// <!--验证手机号是否合法-->
			let checkTel = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入手机号码'))
				} else if (!this.checkMobile(value)) {
					callback(new Error('手机号码不合法'))
				} else {
					callback()
				}
			}
			//  <!--验证码是否为空-->
			let checkSmscode = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入手机验证码'))
				} else {
					callback()
				}
			}
			// <!--验证密码-->
			let validatePass = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"))
				} else {
					if (this.surrceForm.checkPass !== "") {
						this.$refs.surrceForm.validateField("checkPass");
					}
					callback()
				}
			}
			// <!--二次验证密码-->
			let validatePass2 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value !== this.surrceForm.pass) {
					callback(new Error("两次输入密码不一致!"));
				} else {
					callback();
				}
			};
			return {
				isSurrce: false, //判断登录还是注册 true是注册。false 是登录
				isPcLogin: false, //判断PC登录还是手机端登录 true是PC。false 是手机
				isBgmodel: false,
				isCodeTrue: false, //验证码一直为true，反之为false
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

				rules1: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					phone: [{
						validator: checkTel,
						trigger: 'blur'
					}],
					code: [{
						validator: checkSmscode,
						trigger: 'blur'
					}],
				},
				rules: {}
			}
		},

		mounted() {

		},
		methods: {
			// 验证手机号
			checkMobile(str) {
				let re = /^1\d{10}$/
				if (re.test(str)) {
					return true;
				} else {
					return false;
				}
			},
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
					phone: this.surrceForm.phone || this.loginFrom.phone
				}
				this.$axios.post("/api/sendCode", queryString).then(res => {

				})
			},
			// 用户校正验证码
			matchingCode() {
				let queryString = {
					phone: this.surrceForm.phone || this.loginFrom.phone,
					ck_code: this.loginFrom.code || this.surrceForm.code,
				}
				this.$axios.post('/api/check_code', queryString).then(res => {
					if (res.data.matching == 1) {
						alert('验证通过')
						this.isCodeTrue = true
					} else {
						alert('验证失败')
						this.isCodeTrue = false;
						return false
					}
				})
			},
			// 注册用户信息
			regInfo() {
				this.matchingCode()
				let queryString = {
					phone: this.surrceForm.phone,
					code: this.surrceForm.code,
					password: this.surrceForm.pass
				}
				this.$axios.post("/api/reg", queryString).then(res => {
					console.log(res.data)
					alert('注册成功')
				})



			},
			// 用户登录
			login() {
				this.matchingCode()
				let queryString = {
					userName: this.loginFrom.idName,
					password: this.loginFrom.pass,
					phone: this.loginFrom.phone,
					code: this.loginFrom.code,
				}
				this.$axios.post("/api/login", queryString).then(res => {
					// var userInfo = res.data.user
					// common.sessionset('userName', userInfo)
					this.$router.push({
						path: '/'
					})




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
