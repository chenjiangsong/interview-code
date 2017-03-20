/*
	扩展Date类，实现getChineseTime函数，满足以下功能。
	var now=new Date();
	alert(now.getChineseTime());	//输出 “十一点五十一分”
	提示：可能会用到Date类的方法getHours()     getMinutes()
	注意中文时间的文字输出符合口语习惯
*/

'use strict'
const map = '一二三四五六七八九'.split('')
map.unshift('')

Date.prototype.getChineseTime = function() {
	const hours = this.getHours()
	const minutes = this.getMinutes()
	return convertHour(hours) + convertMinutes(minutes)
}

function convertHour(hours) {
	let ret = num2Ch(hours)
	if (hours === 0) {
		ret =  addZero(ret)
	}
	return ret + '点'
}

function convertMinutes(minutes) {
	let ret = num2Ch(minutes)
	if (minutes === 0) {
		ret = '整'
	} else if (minutes < 10) {
		ret =  addZero(ret) + '分'
	} else {
		ret = ret + '分'
	}
	return ret
}
/*
	前置加零
*/
function addZero(num) {
	return '零' + num
}
/*
	数字转中文	
 */
function num2Ch(num) {
	const tens = Math.floor(num/10)
	const singles = num % 10
	const TEN = '十'

	const tenCh = map[tens]
	let singleCh = map[singles]

	if (tens === 1) {
		return TEN + singleCh
	} else if (tens > 1) {
		return tenCh + TEN + singleCh
	} 
	return tenCh + singleCh
}


var now = new Date()
const chTime = now.getChineseTime()
console.log(chTime)
