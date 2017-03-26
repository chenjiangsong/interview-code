/*
    js一些排序算法
 */
'use strict'

const test = [9,3,4,6,1,10,2,5,8,7]

function swap(array, i, j) {
    let x = array[i]
    array[i] = array[j]
    array[j] = x
}

function jsSort() {
    return test.sort((a, b) => {
        return a - b
    })
}
// console.log('jsSort:  ', jsSort())

function popSort(array) {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1)
            }
        }
    }
    return array
}

console.log(popSort(test))

function selectSort(array) {
    const len = array.length
    for (let i = 0; i < len - 1; i++) {
        let min = i
        for (let j = i; j < len; j++) {
            if(array[j] < array[min]) {
                min = j
            }
        }
        swap(array, i, min)
    }
    return array
}

// console.log(selectSort(test))

function InsertSort(array) {
    const len = array.length
    for (let i = 1; i < len; i++) {
        let preIndex = i - 1
        let current = array[i]
        while (preIndex >= 0 && current < array[preIndex]) {
            array[preIndex+1] = array[preIndex]
            preIndex--
        }
        array[preIndex+1] = current
    }
    return array
}

console.log(InsertSort(test))

function quickSort(array) {
    const len = array.length
    let left = 0, right = len - 1
    if (left < right) {

    }
}

function patten(array, left, right) {
    
}
