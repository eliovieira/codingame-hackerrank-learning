/*

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.


*/


function miniMaxSum(arr) {
    const maxNumber = Math.max(...arr);
    const minNumber = Math.min(...arr);
    let miniSum=0;
    let maxSum=0;
    
    if(maxNumber !== minNumber){
        const arrMiniSum = arr.filter(number => number !== maxNumber)
        const arrMaxSum = arr.filter(number => number !== minNumber) 
        
        miniSum = arrMiniSum.reduce(function(prev,cur){return prev+cur;});
        maxSum = arrMaxSum.reduce(function(prev,cur){return prev+cur;});
    }
    else{
        miniSum = maxNumber*(arr.length-1);
        maxSum = maxNumber*(arr.length-1);
    }
    
    console.log(miniSum,maxSum)
}
