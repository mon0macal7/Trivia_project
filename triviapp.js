/* Componente principal de Trivia
Author: Mónica Macal 
Project 1
15/septiembre/2021


alert("estoy conectado")

var app="Trivia"
var UserName= prompt ("Bienvenido, ingresa tu nombre")
console.log (UserName)  //muestrame el username

alert
//acceder a html desde javaSrcipt document
document.getElementById ("title").innerHTML=("proyecto de:"+app)
document.body.style.background= "purple"
document.getElementById("user_Name").innerHTML= ("Bienvenido amigo"+UserName )

var question1 = prompt ("¿Quieres hacer esta trivia?")

console.log(question1)

document.getElementById("receivedAnswer1").innerHTML=
("Tu respuesta 1:"+question1)

var correctAnswer1= 29
document.getElementById("correctAnswer1").innerHTML=
("La respuesta correcta era:" + correctAnswer1)

if (question1 ==correctAnswer1){
     alert("correcto!")
}
else{
     alert ("incorrecto")} 
*/

const aceptacion = confirm("¿Quieres resolver esta trivia?");
var i = 0;
//condicional de bienvenida y trae el nombre del user
//var userName= prompt ("Bienvenido, ingresa tu nombre")
//console.log (userName)  //muestrame el username
if (aceptacion ) {
     alert(":) vientos");
     let UserName= prompt("¿Cómo te llamas?");
   alert ("Bienvenido(a) "+ UserName); 
   //primera pregunta:
   let question1 =prompt("Birome es un término que se usa en Argentina y Uruguay para hablar de: \n a.Platillo tipico \n b.Juguete  \n c.Bolígrafo");
if (question1== "c") {
     alert ("correcto");
     i = i+1;
} else {
    alert ("incorrecto");
    document.getElementById("wa1").innerHTML="la respuesta correcta es c"
}
//pregunta 2
   let question2 =prompt("En Cuba le llaman fanguito a: \n a. El lodo  \n b. La cajeta \n c. El atole");
   if (question2=="b") {
       alert ("correcto");
       i = i+1;
   } else {
      alert ("incorrecto"); 
      document.getElementById("wa2").innerHTML="la respuesta correcta es b"
   }
   //pregunta 3
   let question3= prompt("En este país le llaman remera a lo que en México conocemos como playera : \n a.Argentina  \n b.Chile  \n c.Bolivia");
   if (question3=="a") {
      alert ("correcto");
      i = i+1;
   } else {
     alert ("incorrecto");
     document.getElementById("wa3").innerHTML="la respuesta correcta es a"
   }
   //pregunta 4
   let question4= prompt("Tinieblo es una palabra utilizada en Colombia  que se utiliza para referirse a: \n a.El jefe \n b.El profesor \n c.El amante");
   if (question4=="c"){
        alert ("correcto");
        i = i+1;
   }else {
        alert ("incorrecto");
        document.getElementById("wa4").innerHTML="la respuesta correcta es c"
   }
   //pregunta 5
   let question5= prompt ("En República Dominicana chambear significa: \n a. Suicidarse \n b.Estudiar \n c.Inhalar cocaína");
   if (question5=="c") {
      alert("correcto"); 
      i = i+1;
   } else {
      alert("incorrecto");
      document.getElementById("wa5").innerHTML="la respuesta correcta es c"
   }
   //pregunta 6
   let question6= prompt("En Chile llaman machete a:  \n a.Alguien a quien le huelen mal las axilas \n b.La acción de pedir dinero sin realmente necesitarlo. \n c.	Una pila de documentos");
   if (question6=="c") {
       alert("correcto");
       i = i+1;
   } else {
      alert ("incorrecto");
      document.getElementById("wa6").innerHTML="la respuesta correcta es b"
   }
   //pregunta 7
   let question7= prompt("Championes es una palabra Uruguaya que significa: \n a. Champiñones \n b. Tenis \n c.Cayos en los pies");
   if (question7=="b") {
       alert ("correcto");
       i = i+1;
   } else {
       alert ("incorrecto");
       document.getElementById("wa7").innerHTML="la respuesta correcta es b"
   }
   //pregunta 8 
   let question8= prompt("En Puerto Rico y Guatemala charro es un sinónimo de… \n a.Gracioso  \n b.Enojon  \n c.Ladrón");
   if (question8=="c") {
        alert("correcto");
        i = i+1;
   } else {
        alert("incorrecto");
        document.getElementById("wa8").innerHTML="la respuesta correcta es c"
   }
   //pregunta 9
   let question9= prompt("Palabra Venezolana para decir que algo ó alguien es agradable: \n a.Cool \n b.Chingón \n c.Chévere");
   if (question9=="c") {
        alert ("corecto");
        i = i+1;
   } else {
        alert ("incorrecto");
        document.getElementById("wa9").innerHTML="la respuesta correcta es c"
   }
   //pregunta 10
   let question10= prompt("¿En que país se utiliza la expresión ¡Que piña! para referirse a la mala suerte? \n a.Honduras \n b. Perú  \n c.Guatemala");
   if (question10=="b") {
        alert ("correcto");
        i = i+1;
   } else {
        alert ("incorrecto");
        document.getElementById("wa10").innerHTML="la respuesta correcta es b"
   }
     
} else {
   alert(":( ahi nos vidrios"); 
   
}
document.getElementById("resultadosA").innerHTML =  "Tus respuestas correctas son: " + i + " de 10";

switch (i) {
     case 0:
     case 1:
     case 2:
     case 3:
     case 4:
     document.getElementById("resultadosB").innerHTML =  "Juguito de chale ;( Talvez deberias socializar más";
       break ;
     case 5:
     case 6:
     case 7:
     document.getElementById("resultadosB").innerHTML =  "Dos trenzas... puedes mejorar";
       break;
     case 8:
     case 9:
     case 10:
     document.getElementById("resultadosB").innerHTML =  "Seguro tenes muchos panas";
     default:
       break;
   }