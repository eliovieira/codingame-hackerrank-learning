/*
 	The Goal
Casablanca’s hippodrome is organizing a new type of horse racing: duals. During a dual, only two horses will participate in the race. In order for the race to be interesting, it is necessary to try to select two horses with similar strength.

Write a program which, using a given number of strengths, identifies the two closest strengths and shows their difference with an integer (≥ 0).
/*

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let array =[];

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    array.push(pi);
}

array.sort();
let closest = array[0];

for(let i=0;i<array.length;i++){
    if(Math.abs(array[i+1]-array[i])<closest){
        closest = array[i+1]-array[i];
    }
}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(closest);
