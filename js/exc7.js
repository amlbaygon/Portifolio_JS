var lista = [];
function inserir() {
   var valor = document.getElementById('valor').value;
    //push no método de inserir
    lista.push(valor);
    document.getElementById('valor').value ="";
    document.getElementById('valor').focus();
}
function exibir(){
    var res = document.getElementById('res4');
    //limpa antes do exibir
    var res = document.getElementById('res4');
    for (let i = 0; i< lista.length; i++){
        res.innerHTML += lista[i] + "-";
    }
    document.getElementById('valor').focus();


    

}
document.getElementById('valor').value ="";
    document.getElementById('valor').focus();
    
//Maior e Menor
function mm(){
    const arr = lista;
const min = Math.min(...arr);
const max = Math.max(...arr);

var res5=document.getElementById('res5');
res5.innerHTML=("O menor valor é: " + min +"<br> "+ "O maior valor é: "+  max);

  }
