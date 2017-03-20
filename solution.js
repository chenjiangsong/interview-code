/*
    指定一个输入字符串，输出一个数组列出该字符串的所有排列，没有顺序要求，需要去掉重复的。
    function solution(string) {
    // 请在这里根据要求补充函数体代码
    }
    需要通过下面的测试用例：
    solution("a") => ["a"]
    solution("ab") => ["ab", "ba"]
    solution("aabb") => ["aabb", "abab", "abba", "baab", "baba", "bbaa"]
*/
'use strict'

function solution(string) {
    const reqArr = string.split('')
    const retArr = []
    const everyItem = []

    return arrange(reqArr)

    function arrange(array) {
        const len = array.length
        for (var i = 0; i < len; i++) {
            const first = array.splice(i, 1)[0]
            everyItem.push(first)
            if (array.length === 0) {
                retArr.push(everyItem.join(''))
            }
            arrange(array)
            array.splice(i, 0, first)
            everyItem.pop()
        }
        //用ES6的set去重
        return Array.from(new Set(retArr))
    }
}

const ret = solution('abad')
console.log(ret)