
function pushToGetDate(){
  
//  document.getElementById("showDate").innerHTML = Date();  <<--- this works
//                                                           so do the next 2 lines:   --->>
var date = new Date();
document.getElementById("showDate").innerHTML = date;
return;
}


