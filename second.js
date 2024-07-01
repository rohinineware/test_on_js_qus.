

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

function ary(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
    
}
let arr=[1,2,3,4,5,6]
let target=4
let result=ary(arr,target)
console.log(result)