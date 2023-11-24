// let video= document.querySelector(".botonVideo")

// video.addEventListener('play',function(){
//     console.log("Di play al video");
//     setTimeout(function(){
//         ponerColorBody()
//     }, 3000);
    
// })

// video.addEventListener('seeking',function(){
//     console.log("Se está viendo el video", this.currentTime);
// })

// video.addEventListener('ended',function(){
//     console.log("Terminó video");
//     // alert('Se terminó el video');
//     let decision = confirm('¿Deseas ver de nuevo el video?');
//     console.log(decision);
//     if (decision){
//         video.play();
//         }else{
//         window.location = "http://www.google.com"
//         }
// })
// video.addEventListener('pause',function(){
//     console.log("Di pausa al video")
// })



// Temporizadores o timers

// setInterval
// setTimeout

// let temporizador = setInterval(function(){
//     ponerColorBody();
// }, 2000);

// function ponerColorBody (){
//     let pantalla = document.body;
//     pantalla.style.background = pantalla.style.background == "blue" ? "green": "blue";
// }




// // arreglos, vectores, arrays

let array=['uno','dos','tres'];

let array2=['cuatro','cinco','seis'];

let multidimensional=[array, array2];

multidimensional [0][1]; //= 'dos';

