/*
	实现一个LazyMan，可以按照以下方式调用:
	LazyMan(“Hank”)输出:
	Hi! This is Hank!

	LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
	Hi! This is Hank!
	//等待10秒..
	Wake up after 10
	Eat dinner~

	LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
	Hi This is Hank!
	Eat dinner~
	Eat supper~

	LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
	//等待5秒
	Wake up after 5
	Hi This is Hank!
	Eat supper
 */

/*
	涉及无new构建，即构造函数返回一个new 实例，或者模仿jq的init写法
	涉及链式调用，即返回this
	涉及到事件顺序，所以设计一个方法队列，在init之后异步循环队列
	涉及异步事件，参考promise思路，在异步之后执行队列里的事件
 */
function LazyMan(msg) {
	return new LazyMan.fn.init(msg)
}

LazyMan.fn = LazyMan.prototype

LazyMan.fn.tasks = []

LazyMan.fn.eat = function(msg) {
	const self = this
	this.tasks.push(function() {
		console.log('Eat:', msg)
		self._next()
	})
	return this
}

LazyMan.fn.sleep = function(time) {
	const self = this
	this.tasks.push(function() {
		setTimeout(function() {
			self._next()
		}, time * 1000)
	})
	return self
}

LazyMan.fn.sleepFirst = function(time) {
	const self = this
	this.tasks.unshift(function() {
		setTimeout(function() {
			self._next()
		}, time * 1000)
	})
	return self 
}

LazyMan.fn._next = function() {
	const fn = this.tasks.shift()
	fn && fn()
}

const init = LazyMan.fn.init = function(msg) {
	const self = this
	self.tasks.push(function() {
		console.log(msg)
		self._next()
	})
	setTimeout(self._next.bind(self))
	return self
}

init.prototype = LazyMan.fn

LazyMan('Hank').sleepFirst(5).eat('dinner')

//LazyMan('Hank').sleep(5).eat('dinner')
