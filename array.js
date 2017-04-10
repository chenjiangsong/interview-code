/*
  获取页面中多少种元素
 */

new Set([...document.all].map( e => e.nodeName)).size
/*
  获取页面中每种元素各多少个
 */

[...document.all].reduce((pre, val) => {
  var node = val.nodeName
  if (pre[node]) {
    pre[node]++
  } else {
    pre[node] = 1
  }
  return pre
},{})

/*
  多维数组扁平化
 */
const arr = [1,[2,3],[4,[5],[[6,],7]]]

function flatten(arr) {
  return arr.reduce(function(prev, curr) {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr)
  },[])
}

console.log(flatten(arr))
