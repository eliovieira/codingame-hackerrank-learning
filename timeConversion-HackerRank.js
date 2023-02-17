// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
  const hour = s.slice(0,2);
  const minute = s.slice(3,5);
  const seconds = s.slice(6,8);
  const timeFormat = s.slice(8,11); 
  let convertedDate = "";
  
  if(timeFormat === "PM"){
      if(hour === "12"){
          convertedDate = "12:"+minute+":"+seconds;
      }else{
          convertedDate = Number(hour)+12+":"+minute+":"+seconds;
      }
  }else{
      if(hour === "12"){
          convertedDate = "00:"+minute+":"+seconds;
      }else{
          convertedDate = hour+":"+minute+":"+seconds;
      }  
  }
  
  return convertedDate;
}
