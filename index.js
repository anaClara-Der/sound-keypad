let letras = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
let caja = document.querySelectorAll(".cajas");

const comenzar = () =>{
   pressButton();
   presskeyboard();
}

//Al presionar las key del teclado
const presskeyboard = () =>{
   document.addEventListener("keydown", function(e){
      let codigo = (e.keyCode || e.which);//en esta variable se guardan los valores numericos de las teclas
      codigo = String.fromCharCode(codigo);//esos valores se convierten en la letra correspondiente en el teclado
      let audio = document.querySelector(`.${codigo}`); 
      let botones = document.querySelector(`.box${codigo}`); 
      
      letras.forEach(letra =>{
         if (codigo == letra){
            botones.classList.add("active");
            audio.currentTime = 0; // para que al presionar la tecla vuelva a empezar desde el seg 0 el audio
            audio.play();
         };
      });
      caja.forEach(cajas => cajas.addEventListener("transitionend", removeTransition)); //Para sacar el efecto cuando no se esta clickeando 
   });
}
//Al presionar con el mouse
const pressButton=()=>{
   caja.forEach(e =>{
      e.addEventListener("click", ()=>{
         let letra = e.textContent.trim(); //quita los espacios en blanco que rodee a las letras
         let audio = document.querySelector(`.${letra}`);
         audio.currentTime = 0;
         audio.play();
         e.classList.add("active");
      });
      caja.forEach(cajas => cajas.addEventListener("transitionend", removeTransition));
   });
}

//Se remueve la clase active cuando se clickea para que vuelva a su estado origial
function removeTransition(e){
   if (e.propertyName !== "transform"){
      this.classList.remove("active");
   };
}

comenzar();



