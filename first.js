

// Write a function to generate the first n numbers in the Fibonacci sequence.


function Fibonaccinum(n){
    let f=[0,1];
    for(let i=2;i<n;i++){
        f[i]=f[i-1] + f[i-2];
    }
    return f.slice(0,n);
}
let n=10;
let result=Fibonaccinum(n);
console.log(result);