//如何创建cookie
function setCookie(key, value, expires, path='/', domain, secure) {
	//取出键值对
	var cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookie += ";expires=" + expires;
	}
	if (path) {
		cookie += ";path=" + path;
	}
	if (domain) {
		cookie += ";domain=" + domain;
	}
	if (secure) {
		cookie += ";secure";
	}
	document.cookie = cookie;
}

//创建一个cookie的失效时间
function setCookieDate(day) {
	var date = null;
	if (typeof day == 'number' && day > 0) {
		date = new Date();
		date.setDate(date.getDate() + day);
	}
	return date;
}

//获取指定键的cookie值
function getCookie(key) {
	//将用户查找的key进行编码并连接一个=
	var cookieName = encodeURIComponent(key) + '=';
	var cookieValue = "";
	//查找到要截取的起始位置
	var cookieStart = document.cookie.indexOf(cookieName);
	if (cookieStart > -1) {
		//查找到要截取的结束位置
		var cookieEnd = document.cookie.indexOf(";", cookieStart);
		//如果没有查找到;，则结束位置就是整个字符串的长度
		if (cookieEnd == -1) {
			cookieEnd = document.cookie.length;
		}
		//将需要的cookieValue截取出来并解码
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	}
	return cookieValue;
}
/*function getCookie(Name) 
{ 
    var search = Name + "=" 
    if(document.cookie.length > 0) 
    { 
        offset = document.cookie.indexOf(search) 
        if(offset != -1) 
        { 
            offset += search.length 
            end = document.cookie.indexOf(";", offset) 
            if(end == -1) end = document.cookie.length 
            return unescape(document.cookie.substring(offset, end)) 
        } 
        else return "" 
    } 
} */

//删除cookie
function removeCookie(key) {
	document.cookie = key + "=;expires=" + new Date(0);
}


function deleteCookie(name) 
{ 
	 var expdate = new Date(); 
	 expdate.setTime(expdate.getTime() - (86400 * 1000 * 1)); 
	 setCookie(name, "", expdate); 
} 