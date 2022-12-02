function converterF(){
   var temp = parseInt(document.getElementById('temperatura').value);
   document.getElementById('res').innerHTML=( temp + "°C corresponde a " +  (temp * 1.8 + 32) + " °F");
}
function converterC(){
   var temp = parseInt(document.getElementById('temperatura').value);
   document.getElementById('resp').innerHTML=( temp + "°F corresponde a " +  ((temp - 32)/1.8) + " °C");
}