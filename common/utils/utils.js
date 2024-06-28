//将时间戳格式转换成年月日
function formatData(date) {
	var date = new Date(date)
	console.log(date);
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()

	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	//2018-05-18
	return [year, month, day].map(formatNumber).join('-')
}
function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
}
module.exports = {
	formatData: formatData,
}