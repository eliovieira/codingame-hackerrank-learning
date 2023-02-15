// Your task is to create a simple React component named Label rendered 
// as a <div> which takes a text value and a foreground color as input 
 
 
 import React from 'react';
 
 // create the label react component here
 
 function Label({value,color}){
   return (
     <div style ={{color:color}}>{value}</div>
   )
 }
 
 // modify this function if you want to change the preview
 
 export function Preview(){
    return <Label value = {'Solution'} color={'blue'}/>;
 }
 
 // do not change
 export default Label;
 
 
