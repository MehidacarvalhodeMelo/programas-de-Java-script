function exe1(){
    //recupera os dados do usuário
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    //processamento
    //calcula media
    var media= (nota1+nota2+nota3+nota4)/4
    //verifica aprovação
    if (media >= 7) {
        alert("Aprovado com média  " + media)
        console.log("Aprovado com média  " + media)
    }
    else{
        alert("Reprovado com média " + media)
        console.log("Reprovado com média  " + media)
    }

}
function exe2(){ 
    //recupera os dados do usuário
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    //processamento
    //calcula media
    var media= (n1+n2)/2
    //verifica aprovação}
    if (media >= 7) {
        alert("Aprovado com média  " + media)
    }
     else if ((media >= 3) && (media < 7)){
        alert("Exame com média " + media)
     }

    else  {
        alert("Reprovado com média " + media)

    }
    }
    function exe3(){
        //recupera os dados do usuário
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    //processamento
    //verifica o menor
    if (num1 < num2) {
        alert("O primeiro número é o menor " + num1)

    }

    else if (num2<num1){
        alert("O segundo número é o menor " + num2)
    }
    else{
        alert("Os números são iguais " + num2)

    }

    }
    function exe4(){
        //recupera os dados do usuário
    var nro1 = Number(document.getElementById("nro1").value);
    var nro2 = Number(document.getElementById("nro2").value);
    var nro3 = Number(document.getElementById("nro3").value);
    //processamento
    //verifica o maior
    if  ((nro1 >nro2)&&(nro1> nro3)) {
        alert("O primeiro número é o maior " + nro1)
    }
    else if ((nro2>nro1) && (nro2>nro3)) {
        alert("O segundo número é o maior " + nro2)
    }
    else if((nro3>nro1) &&(nro3>nro2)){
        alert("O terceiro número é o maior " + nro3)

    }
    if((nro1==nro2)&&(nro2==nro3)){
         alert("Os números são iguais")

    }
    }
    
    function exe5(){ 
    //recupera os dados do usuário
    var nm1 = Number(document.getElementById("nm1").value);
    var nm2 = Number(document.getElementById("nm2").value);
    var opcao= Number(document.getElementById("opcao").value);
    var resultado
    switch(opcao){
        case 1: resultado = (nm1 + nm2)/2
        break //não entra no case de baixo
        case 2: if (nm1 >= nm2){
            resultado = nm1 - nm2
        }
        else{
        resultado = nm2 - nm1
        }
        break //não entra no case de baixo
        case 3: resultado = nm1 * nm2
        break //não entra no case de baixo
        case 4: if (nm2 != 0){
            resultado = nm1 / nm2
        }
        else {
            resultado = "Divisão por zero"
        }
        break //não entra no case de baixo
        default: resultado = "Opção inválida"

    }
    alert("Resultado " + resultado)
    function exe7(){
        var salario = Number(document.getElementById("salario").value);
        if (salario < 500){
            var novo = salario + salario*30/100
            alert("Novo valor + novo")
        }
        else{
            alert("Não tem direito a aumento")
        }
    
    }
    
    