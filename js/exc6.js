function PI() {
    var h = parseFloat(document.getElementById("altura").value);

    if(document.getElementById("Masculino").selected){
        document.getElementById('PI').innerHTML= ("O seu peso ideal é de aproximadamente: " + ((72.7*h) - 58) ) + " kg.";
    }else{
        document.getElementById('PI').innerHTML= ("O seu peso ideal é de aproximadamente: " + ((62.1*h) - 44.7) + " kg." );
    }

}