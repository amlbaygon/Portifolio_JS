function calcular(){
    var km = parseInt(document.getElementById('km').value);
    var comb = parseFloat(document.getElementById('combustível').value);

   document.getElementById('gasto').innerHTML=("O seu gasto é de R$ " + (km/8) * comb );

} 