/*

Given an array of integers, where all elements but one occur twice, find the unique element.

Example: [1,2,3,4,3,2,1]

The unique element is 4

*/


function lonelyinteger(a) {
    for(const i of a){
        if((a.filter((e)=>e===i)).length===1){
            return i;
        }
    }
}
