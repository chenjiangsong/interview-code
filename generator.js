/*
	Generator是ES6中的新特性，例如：
	function* fibonacci() {
		let [prev, curr] = [0, 1];
		for (;;) {
			[prev, curr] = [curr, prev + curr];
			yield curr;
		}
	}
	使用方式如下：
	let seq = fibonacci();
	console.log(seq.next()); // 1
	console.log(seq.next()); // 2
	console.log(seq.next()); // 3
	console.log(seq.next()); // 5
	console.log(seq.next()); // 8

	上面是在ES6中的情况， 如果没有了解过Generator也没有关系，可以无视上面的内容直接往下看，这里我们是希望通过ES5去实现一个伪Generator。
	首先，我们需要实现一个名字叫做‘generator’的函数，
	定义为：generator(sequencer[, arg1, arg2, ...])
	这个函数第一个参数是一个序列函数‘sequencer’，第二个参数开始是可选的，是传给‘sequencer ’函数使用的。同时，‘generator ’函数需要返回一个包含‘next’方法的对象。

	题目一：
	function generator(sequencer) {
	// 请在这里根据要求补充函数体代码
	}
	这里提供一个‘sequencer’函数的例子，用于测试你实现的‘generator’ 函数：
	function dummySeq() {
		return function() {
			return "dummy";
		};
	}
	var seq = generator(dummySeq);
	console.log(seq.next()); // 'dummy'
	console.log(seq.next()); // 'dummy'
	console.log(seq.next()); // 'dummy'
	...
	当你实现完‘generator ’函数后，请再实现一个根据指定起止值和间隔递增的一个‘sequencer’函数。简单的说明：
	function rangeSeq(start, step) {…} // rangeSeq(1, 2) -> 1, 3, 5, 7, …

	题目二：
	function rangeSeq(start, step) {
	// 请在这里根据要求补充函数体代码
	}

	实现的‘rangeSeq’函数需要通过下面的测试用例：
	var seq = generator(rangeSeq, 1, 2);
	console.log(seq.next()); // 1
	console.log(seq.next()); // 3
	console.log(seq.next()); // 5
	console.log(seq.next()); // 7
	…
 */
'use strict'

function generator(sequencer) {
	const args = [...arguments]
	args.shift()
	const func = sequencer(...args)
	return {
		next: function() {
			return func()
		}
	}
}

function dummySeq() {
	return function() {
		return "dummy"
	}
}

function rangeSeq(start, step) {
	return function() {
		let result = start
		start = start + step
		return result
	}
}
var seq = generator(rangeSeq, 1, 2)
console.log(seq.next())  // 1
console.log(seq.next())  // 3
console.log(seq.next())  // 5
console.log(seq.next())  // 7