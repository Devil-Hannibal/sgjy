var common={};
common.alertmsg=function(){
	alert('能用')
};
common.sessionset=function(key,value){ //保存到sessionStorage，value可以为复杂对象
	var storage = window.sessionStorage;
	return storageSet(storage, key, value);
		
};
common.sessionget = function(key) { //从sessionStorage获取值，返回值为String、或者为复杂对象
	var storage = window.sessionStorage;
	return storageGet(storage, key);
}

common.sessionremove = function(key) { //从sessionStorage从删除指定数据
	var storage = window.sessionStorage;
	storageRemove(storage, key);
}
common.sessionclear = function() { //清除所有保存数据
	var storage = window.sessionStorage;
	storageclear(storage);
};

function storageSet(storage, key, value) {
	if(typeof(value) != "string") {
		value = JSON.stringify(value);
	}
	storage.setItem(key, value);
}

function storageGet(storage, key) {
	var value = storage.getItem(key);
	if(!!value && value.indexOf("{") > -1) {
		value = JSON.parse(value);
	}
	return value;
}

function storageRemove(storage, key) {
	storage.removeItem(key);
};

function storageclear(storage) {
	storage.clear();
};

/*
 *判断数据类型    和   数据类型转换
 * */

//判断对象和数组是空，返回true
common.ifObjBlank = function(obj) {
	if(obj == undefined) return true;
	for(var i in obj) return false;
	return true;
}
//判断对象和数组不是空,返回true
common.isObjNotBlank = function(obj) {
	return !common.ifObjBlank(obj);
}

//判断str是否为有效字符串
common.ifStrBlank = function(str, len) {
	if(typeof(str) == "undefined" || str == null || str == "") {
		return true;
	}
	str = str.replace(/^\s\s*/, '').replace(/\s\s*$/, '').toLowerCase();
	if(str == "" || str == "null" || str == "undefined") {
		return true;
	}
	if(typeof(len) != "undefined" && str.length != len) {
		return true;
	}
	return false;
}
common.ifStrNotBlank = function(str, len) {
	return !common.ifStrBlank(str, len);
}
/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
common.parseQueryString = function(url) {
	url = url === null || url === undefined ? window.location.href : url;
	var i = url.indexOf("?");
	var search = "",
		kvs = [];
	if(i == -1) {
		search = url;
	} else {
		search = url.substring(i + 1) || "";
		kvs = search.split("&") || [];
	}

	var obj = {};
	for(var j = 0, l = kvs.length; j < l; j++) {
		var kv = kvs[j].split("=");
		obj[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]) || "";
	}
	return obj;
}

common.parseQuerystr = function(url) {
	url = url == null ? window.location.href : url;
	if(url.indexOf('?') == -1) {
		return {}
	}
	var search = window.location.search;
	if(search.indexOf('?') > -1) {
		search = search.replace('?', '');
	}
	if(!search) {
		return {}
	}
	var obj = {};
	try {
		obj = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
	} catch(e) {

	}
	return obj
}
common.objToArr = function(obj) {
	var arr = [];
	obj = obj || {};
	for(var k in obj) {
		arr.push(obj[k]);
	}
	return arr;
};
//对象数组按属性名排序
common.sortByAttr = function(arr, attrName, dir) {
	if(ifArr(arr)) {
		dir = dir || 1;
		return arr.sort(function(a, b) {
			return a[attrName] > b[attrName] ? dir : -dir;
		})
	} else {
		return [];
	}
};

//对象数组去重
common.delRepeat = function(arr, attrName) {
	if(ifArr(arr)) {
		var result = [];
		var valid = {};
		for(var i = 0; i < arr.length; i++) {
			if(!valid.hasOwnProperty(arr[i][attrName])) {
				result.push(arr[i]);
			}
		}
		return result;
	} else {
		return [];
	}
};

//获取当前时间
//参数1  传入时间   strTime时间（new Date()或new Date(2017-08-30)或new Date(2017,08,30)）
//参数2  传入天数  num 当前时间+num天 num为负数 减天数
//返回'obj'对象
//返回值obj.week 返回 当前传入时间的星期 例：‘周三’
//返回值obj.monDay 返回 例 ：08月30日 格式日期
//返回值obj.monDay2 返回 例 ：08-30 格式日期
//返回值obj.hm 返回 例 ：12:22 格式日期
//返回值obj.monDayWeek 例：08月08日（周二）
//返回值obj.dat  年-月-日
//返回值obj.dat2  年，月，日
common.FormatDate = function(strTime, num) {
	var obj = {};
	var dat = new Date(strTime);
	(!num) && (num = 0);
	dat = dat.getTime() + 24 * 60 * 60 * 1000 * num;
	dat = new Date(dat);
	var m = dat.getMonth() + 1;
	var d = dat.getDate();
	var w = dat.getDay();
	var h = dat.getHours();
	var mins = dat.getMinutes();
	var seds = dat.getSeconds();
	var arr = ['日', '一', '二', '三', '四', '五', '六'];
	if(d < 10) {
		d = "0" + d
	}
	if(m < 10) {
		m = "0" + m
	}
	if(mins < 10) {
		mins = '0' + mins
	}
	if(h < 10) {
		h = '0' + h
	}
	obj.dat = dat.getFullYear() + "-" + m + "-" + d;
	if(obj.dat == common.getDateMing(new Date(), 0)) {
		obj.week = '今天';
	} else if(obj.dat == common.getDateMing(new Date(), 1)) {
		obj.week = '明天';
	} else if(obj.dat == common.getDateMing(new Date(), 2)) {
		obj.week = '后天';
	} else {
		obj.week = '周' + arr[w];
	};
	//		 obj.week = '周' + arr[w];
	obj.monDay = m + '月' + d + '日';
	obj.monDay2 = m + '-' + d;
	obj.monDayWeek = obj.monDay + '(' + obj.week + ')';
	obj.hm = h + ':' + mins;
	obj.dat2 = dat.getFullYear() + "," + m + "," + d;
	return obj;
};
// 获取今天   明天   仅处理
common.getDateMing = function(strTime, num) {
	var dat = new Date(strTime);
	(!num) && (num = 0);
	dat = dat.getTime() + 24 * 60 * 60 * 1000 * num;
	dat = new Date(dat);
	var y = dat.getFullYear();
	var m = dat.getMonth() + 1;
	var d = dat.getDate();
	if(d < 10) {
		d = "0" + d
	}
	if(m < 10) {
		m = "0" + m
	};
	return y + "-" + m + "-" + d;

}

//获取天数差,参数为字符串格式的时间,如:2018-08-08,返回值为两个日期相隔的天数
common.getDiffDate = function(dat1, dat2) {
	dat1 = dat1.split('-');
	var year1 = dat1[0] - 0,
		month1 = dat1[1] - 1,
		d1 = dat1[2] - 0;
	dat2 = dat2.split('-');
	var year2 = dat2[0] - 0,
		month2 = dat2[1] - 1,
		d2 = dat2[2] - 0;
	var ymd1 = new Date(year1, month1, d1, 0, 0, 0);
	var ymd2 = new Date(year2, month2, d2, 0, 0, 0);
	return(ymd2 - ymd1) / 1000 / 3600 / 24;
}

//获取预订时间(倒计时用)
common.getBookTime = function(bookDate) {
	var arr = bookDate.split(' ');
	var ymd = arr[0].split('-'),
		hms = arr[1].split(':');
	var year = ymd[0] - 0,
		month = ymd[1] - 0,
		day = ymd[2] - 0;
	var hour = hms[0] - 0,
		minute = hms[1] - 0,
		second = hms[2] - 0;
	var bookTime = new Date(year, month - 1, day, hour, minute, second);
	return bookTime;
}
//开始倒计时
common.startInterval = function(bookTime, param) {
	var now = new Date();
	var s = (bookTime - now + param.timeOut * 60 * 1000) / 1000;

	//未超时
	if(s > 0) {
		s = s | 0;
		var sec = s % 60;
		var secondOut = sec > 9 ? '' + sec : '0' + sec;
		var m = (s / 60) | 0;
		var minutsOut = m > 9 ? '' + m : '0' + m;
		param.onCallback.call(param.target, {
			secondOut,
			minutsOut
		});
	} else {
		//超时
		param.outCallback.call(param.target);
		clearTimeout(this.timer);
		this.timer = null;
		return;
	}

	this.timer = setTimeout(() => {
		this.startInterval(bookTime, param);
	}, 1000);
}
//启用倒计时的入口方法,   
/*
 * bookDate:下单时间,格式如 "2018-08-08 05:05:05",
 * times:距离下单时间多久后停止倒计时,单位为分
 * interval:定时器周期,默认为1s
 * outCallback:超时后的回调
 * onCallback:定时器进行中的回调
 */
common.countdown = function(param) {
	var noop = function() {};
	if(!param.bookDate) { //下单时间必传
		return;
	}
	param.outCallback = param.outCallback || noop;
	param.onCallback = param.onCallback || noop;
	param.timeOut = param.timeOut || 30;
	param.interval = param.interval || 1;
	var bookTime = this.getBookTime(param.bookDate);
	common.startInterval(bookTime, param);

}

// 计算前后时间  返回 分钟数
common.getDiffMinute = function(prev, next) {
	var prevTime = common.getSecondByDateStr(prev, 0);
	var time1 = prevTime.getTime();
	var nextTime = common.getSecondByDateStr(next, 0);
	var time2 = nextTime.getTime();

	var minute = (time2 - time1) / 1000 / 60;

	return minute;
}

// 将2018-01-02 05:15  转换为 格林尼治 :
common.getSecondByDateStr = function(dat, num) {
		if(!num) num = 0;
		var arr = dat && dat.split(' ');
		var ymd = arr[0].split('-');
		var y = parseInt(ymd[0]);
		var m = ymd[1] - 0;
		var d = parseInt(ymd[2]);
		var sfm = arr[1].split(':');
		var s = parseInt(sfm[0]),
			f = parseInt(sfm[1]),
			miao = sfm.length == 3 ? parseInt(sfm[2]) : 0;

		var date = new Date(y, m, d, s, f, miao);
		var time = date.getTime() + (num - 0) * 3600000;
		date = new Date(time);
		return date;
	},

	// 前后几小时   传入    2018-01-02 05:15
	common.getTimeByNum = function(dat, num) {
		//	if(!num) num = 0;
		//	var arr = dat && dat.split(' ');
		//	var ymd = arr[0].split('-');
		//	var y = parseInt(ymd[0]);
		//	var m = ymd[1] - 0;
		//	var d = parseInt(ymd[2]);
		//	var sfm = arr[1].split(':');
		//	var s = parseInt(sfm[0]),
		//		f = parseInt(sfm[1]),
		//		miao = sfm.length == 3 ? parseInt(sfm[2]) : 0;
		//
		//	var date = new Date(y, m, d, s, f, miao);
		//	var time = date.getTime() + (num - 0) * 3600000;
		//	date = new Date(time);

		var date = common.getSecondByDateStr(dat, num);

		return trimStrDate(date) + " " + trimStrTime(date);

	};
//date ->  yyyy-mm-dd
function trimStrDate(date) {
	var y = date.getFullYear(),
		m = date.getMonth(),
		d = date.getDate();
	return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
}
//date -> hh:mi:ss
function trimStrTime(date) {
	var h = date.getHours(),
		mi = date.getMinutes(),
		s = date.getSeconds();
	return(h < 10 ? "0" + h : h) + ":" + (mi < 10 ? "0" + mi : mi) + ":" + (s < 10 ? "0" + s : s);
}

common.mon = function(da1, da2) {
	var da3 = new Date(da1).getMonth() + 1;
	var da4 = new Date(da2).getMonth() + 1;
	var da5 = new Date(da1).getFullYear();
	var da6 = new Date(da2).getFullYear();
	return(da6 - da5) * 12 - da3 + da4 + 1;
};

//获取日期天数差值
//参数一 prev  前一天的日期  /next后一天的日期     / num = 0纯粹的差值,不传这两天包含在内 （用于火车票）
common.dateDiff = function(prev, next, num) {
	if(!prev || !next) {
		return;
	}
	Date.prototype.diff = function(date) {
		return(this.getTime() - date.getTime()) / (24 * 60 * 60 * 1000);
	}
	// 构造两个日期，分别是系统时间和2013/04/08 12:43:45
	var now = new Date(next);
	var date = new Date(prev); //'2013/04/08 12:43:45'
	// 调用日期差方法，求得参数日期与系统时间相差的天数
	var diff = now.diff(date);
	if(num == 0) {
		return diff;
	} else {
		return diff + 1;
	}

};

export default common;
