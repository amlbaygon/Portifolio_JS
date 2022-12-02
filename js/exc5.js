function calcular(){
    var la=parseInt(document.getElementById('la').value);
    var c=parseInt(document.getElementById('c').value);
    var p= 36.00;
    var res= document.getElementById('res');
    var a= (la*c); 
    var t= (a*p);
   
    document.getElementById('res').innerHTML=("O valor total sera de: R$ " + t + ".");
}

