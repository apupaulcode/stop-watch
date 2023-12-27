let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timer=null;
let displayTime = document.getElementById('displayTime')


function stopwatch(){
   milliseconds++;
   if(milliseconds==1000){
      milliseconds=0;
      seconds++;
      if(seconds==60){
         seconds=0;
         minutes++;
         if(minutes==60){
            minutes=0;
            hours++;
         }
      }
   }

   let ms = milliseconds<100? (milliseconds<10?"00"+milliseconds:"0"+milliseconds):milliseconds;
   let h =hours<10?"0"+hours:hours;
   let m =minutes<10?"0"+minutes:minutes;
   let s =seconds<10?"0"+seconds:seconds;




   displayTime.innerHTML = h +':'+ m +':'+ s +':'+ ms;
}


function startWatch(){
   if(timer!==null){
      clearInterval(timer);
   }
   timer = setInterval(stopwatch ,1);
}
function stopWatch(){
   clearInterval(timer);
}
function resetWatch(){
   clearInterval(timer);
   [milliseconds,seconds,minutes,hours] = [0,0,0,0];
   displayTime.innerHTML = "00:00:00:000"
}
