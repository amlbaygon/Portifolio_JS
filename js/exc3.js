///Produto 1
function exibir1(){
  var n1 =document.getElementById('n1').value;
  var v1 =parseFloat(document.getElementById('v1').value);
  var qtd1= parseInt(document.getElementById('qtd1').value);
  var res=document.getElementById('mostrar1');
  res.innerHTML=(n1 + " <br> " + "R$ " + v1 + " <br> " + "Vendeu: "+ qtd1);
  }
 
 function calcular1(){
var qtd1= parseInt(document.getElementById('qtd1').value);
var v1=parseFloat(document.getElementById('v1').value);
document.getElementById('tt1').innerHTML=("R$ "+ qtd1*v1);
}

///Produto 2
function exibir2(){
 var n2 = document.getElementById('n2').value;
  var v2 =parseFloat(document.getElementById('v2').value);
  var qtd2= parseInt(document.getElementById('qtd2').value);
  var res=document.getElementById('mostrar2');
  res.innerHTML=(n2 + " <br> " + "R$ " + v2 + " <br> " + "Vendeu: "+ qtd2);
}

function calcular2(){
var qtd2= parseInt(document.getElementById('qtd2').value);
var v2=parseFloat(document.getElementById('v2').value);
document.getElementById('tt2').innerHTML=("R$ "+ qtd2*v2);
}

///Produto 3
function exibir3(){
 var n3 =document.getElementById('n3').value;
  var v3 =parseFloat(document.getElementById('v3').value);
  var qtd3= parseInt(document.getElementById('qtd3').value);
  var res=document.getElementById('mostrar3');
  res.innerHTML=(n3 + " <br> " + "R$ " + v3 + " <br> " + "Vendeu: "+ qtd3);
}
exibir3();
function calcular3(){
var qtd3= parseInt(document.getElementById('qtd3').value);
var v3=parseFloat(document.getElementById('v3').value);
document.getElementById('tt3').innerHTML=("R$ "+ qtd3*v3);
}
calcular3();