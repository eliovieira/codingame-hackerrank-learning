/*

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  

*/


function diagonalDifference(arr) {
    let sumRightDiagonal = 0;
    let sumLeftDiagonal = 0;
    
    for(let i = 0; i<arr.length; i++){
        sumRightDiagonal+= arr[i][i];
        console.log("RIGHT DIAGONAL "+sumRightDiagonal)
    }
    
    for(let i = 0; i <arr.length; i++){
        sumLeftDiagonal+= arr[i][arr.length-(i+1)];
        console.log("LEFT DIAGONAL "+sumLeftDiagonal)
       
    }
    return Math.abs(sumRightDiagonal-sumLeftDiagonal);
}
