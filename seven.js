

// Find the kth largest element in an unsorted array.

function largest(num,k){
    num.sort((a,b)=>b-a);
    return num[k-1]
}
let num=[3,2,1,5,4]
k=1
let result=largest(num,k)
console.log(result)