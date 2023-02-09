/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
let closest = inputs[0];

console.error(n);

if (n!==0){
    for (let i = 1; i < n; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
        if (Math.abs(t,0)<Math.abs(closest,0)){
            closest = t;
        }else if(Math.abs(t,0)===Math.abs(closest,0)){
            if(t>closest){
            closest = t;
            }
        } 
    }
}else{
    console.log(0);
}

console.log(closest)

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


