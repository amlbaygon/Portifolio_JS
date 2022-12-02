//Ex 1
function exibir(){
    let v1=parseInt(document.getElementById('v1').value);
    let res= document.getElementById('res');
    for(let i=0; i<=v1; i++){
        if(i%2  == 0){
            res.innerHTML += i + " - ";
        }
    }
}
//Ex 2
function converterF(){
    var t = parseInt(document.getElementById('temp').value);
    document.getElementById('resp').innerHTML=( t + "°F corresponde a " +  (t * 1.8 + 32) + " °F");
 }
 function converterC(){
    var t = parseInt(document.getElementById('temp').value);
    document.getElementById('resp').innerHTML=( t + "°F corresponde a " +  ((t - 32)/1.8) + " °C");
 }
//Ex 3
///Produto 1
function exibir1(){
    var n1 = document.getElementById('n1').value;
     var vl1 = parseFloat(document.getElementById('vl1').value);
     var qtd1= parseInt(document.getElementById('qtd1').value);
     var res=document.getElementById('mostrar1');
     res.innerHTML=(n1 + " <br> " + "R$ " + vl1 + " <br> " + "Vendeu: "+ qtd1);
   }
   
   function calcular1(){
  var qtd1= parseInt(document.getElementById('qtd1').value);
  var v1=parseFloat(document.getElementById('vl1').value);
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
//Ex 4
function calcular(){
    var km = parseInt(document.getElementById('km').value);
    var comb = parseFloat(document.getElementById('combustível').value);

   document.getElementById('gasto').innerHTML=("O seu gasto é de R$ " + (km/8) * comb );

} 
//Ex 5
function vt(){
    var la=parseInt(document.getElementById('lg').value);
    var c=parseInt(document.getElementById('ct').value);
    var p= 36.00;
    var a = (la*c); 
    var tl= (a*p);
   
    document.getElementById('r').innerHTML=("O valor total sera de: R$ " + tl + ".");
}


//Ex 6
function PI() {
    var h = parseFloat(document.getElementById("altura").value);

    if(document.getElementById("Masculino").selected){
        document.getElementById('PI').innerHTML= ("O seu peso ideal é de aproximadamente: " + ((72.7*h) - 58) ) + " kg.";
    }else{
        document.getElementById('PI').innerHTML= ("O seu peso ideal é de aproximadamente: " + ((62.1*h) - 44.7) + " kg." );
    }

}
//Ex 7
var lista = [];
function inserirMM() {
       var valorMM = document.getElementById('valorMM').value;
       //push no método de inserir
       document.getElementById('valorMM').value ="";
       document.getElementById('valorMM').focus();
       lista.push(valorMM);
    }

    function exibirMM(){
        var resMM = document.getElementById('res4MM');
        //limpa antes do exibir
        var resMM = document.getElementById('res4MM');
        for (let i = 0; i< lista.length; i++){
            resMM.innerHTML += lista[i] + "-";
        }
        document.getElementById('valorMM').focus();
    
    }
        document.getElementById('valorMM').value ="";
        document.getElementById('valorMM').focus();
        
  
        //Maior e Menor
        function mm(){
    
    const arr = lista;
    const menor = Math.min(...arr);
    const maior = Math.max(...arr);
    
    var res5MM =document.getElementById('res5MM');
    document.getElementById('res5MM').innerHTML=("O menor valor é: " + menor + "<br>" + "O maior valor é: "+  maior);
    
      }
    
