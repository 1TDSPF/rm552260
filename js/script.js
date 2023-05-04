// DIFERENÇA ENTRE LET/VAR/CONST
// var nome = "Kayque";
// if(nome == "Kayque"){
//     let nome = "Denise";
// }
// console.log(nome);

//  Recuperando um elemento button que está no index.html
//  const btn  = document.getElementById("meu-btn");
 
//  //Atrelando um evento de click ao button que foi recuperado.
//  btn.addEventListener("click" , function(){

//     //Função Matemática - Math
//     //randon = gera números aleatórios enre 0 e 1. Ex: 0.232323;
//     //floor  = arredonda o número para baixo.
//     //ceil   = arredonda o número para cima.
//     //round  = arredonda o número aleatóriamente.
//     let r,g,b;

//     r = Math.round(Math.random() *255);
//     g = Math.round(Math.random() *255);
//     b = Math.round(Math.random() *255);

//     //Adicionando um atributo ao elemeno button
//     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
//     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

//  } );


// //DESAFIO
// //Recupere o elemento tit-sec e atrele a ele um evento de mmouse a sua escolha.
// // Altere a cor de fundo e a cor do texto quando o evento ocorer.
// // const h2Element = document.getElementById("meu-tit");
// // // console.log(h2Element);

// // h2Element.addEventListener("click", function(){
// //     this.setAttribute("style", `background-color:#ff0000;color:#fff;`);
// // });

// const h2Element = document.querySelector("h2");
// // console.log(h2Element);

// h2Element.addEventListener("click", function(){
//     this.setAttribute("style", `background-color:#ff0000;color:#fff;`);
// });

//let frutas = ["maçã", "laranja", "banana", "uva", "kiwi", "caqui"];
//console.log(frutas);

// Para verificar o tamanho do array utilizamos a propriedade lenght

//console.log("Tamanho do array" + frutas.length)
//console.log("Pegando um dos itens do array: " + frutas[3])

////Iterando o array com estruturas de repetição
////forEach

//frutas.forEach( (fruta)=>{
//    console.log("Pegando um dos itens do array com forEach: " + fruta);
//} );

////adicionando um elemento no final do array (push)

//frutas.push("melão");
//console.table(frutas);

//Adicionando um elemento no começo do array (unshift)

//frutas.unshift("melancia")
//console.table(frutas);

//// Removendo um item do final do array com o metodo pop()

//frutas.pop();
//console.table(frutas);

//// Removendo um elemento do inicio do array com o metodo shift

//frutas.shift();
//console.table(frutas);

//Localizando um determinado item do array com o metodo indexOf(item)

//let indice = frutas.indexOf("kiwi");
//console.log("Indice onde foi localizado o item: " + indice);
//console.log("Item que foi localizado no array: " + frutas[indice]);


//let indice = frutas.indexOf("banana");
//
//console.log("Item que estava antes da remoção: " + frutas[indice]);
//frutas.splice(indice,1);
//console.log("Item que ficou no local depois da remoção: " + frutas[indice]);