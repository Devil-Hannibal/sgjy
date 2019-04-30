var common={};
common.alertmsg=function(){
	alert('能用')
};
common.sessionset=function(key,value){ //保存到sessionStorage，value可以为复杂对象
	var storage = window.sessionStorage;
	if(typeof(value) == 'object') { 
		var objValue=JSON.stringify(value);
		storage.setItem(key,objValue)
	}
		
};
common.sessionremove = function(key) { //从sessionStorage从删除指定数据
	var storage = window.sessionStorage;
	storageRemove(storage, key);
}
export default common;
