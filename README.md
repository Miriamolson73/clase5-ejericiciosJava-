# clase5-ejericiciosJava-
¿En qué parte del código se genera un closure? ¿Por qué?
<!-- return function() { 
        document.body.style.fontSize = size + 'px';
        }; -->

¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se cambie el tamaño de las fuentes de la página?
<!-- function setClicks(){ -->
    <!-- document.getElementById('fuente-8').onclick = size8; -->

Supone que eliminamos la función setClicks y dejamos su código “libre” dentro de las etiquetas <script> … </script>. ¿Qué mensaje de error te muestra la consola de depuración? (Activa la consola si no la tienes activada) ¿Por qué aparece ese mensaje de error?

<!-- El mnsaje de error informa que no escuentra en el codigo js la  funcion setClick llamada dentro del codigo html en el tag body <body onload="setClicks()"> -->

¿Debemos escribir document.getElementById('fuente-8').onclick = size8; ó document.getElementById('fuente-8').onclick = size8(); ?¿Por qué?
<!-- Por que a la variable size8 tenemos asignada una funcion que se va a ejecutar al ser llamada con el onclick , no es necesario ejecutarla con los parentesis () -->

Supón que al cargar la página queremos que el tamaño inicial de fuente sea 8 y para ello nos valemos de la función setClicks. ¿Debemos escribir dentro de esta función size8; ó size8();? ¿Por qué?
 <!-- En este caso si queremos que se ejecute sin esperar ningun evento debemos poner size8() -->

Las closures no siempre son necesarias, incluso a veces se generan involuntariamente o innecesariamente consumiendo recursos del sistema que podrían ahorrarse. ¿Qué ventajas le ves al uso de closures en este código? ¿Y qué inconvenientes?

<!-- Todavia me falta aprender mucho de  js , pero la ventaja es la reutilizacion de codigo,
Inconvenientes que por cada medida se deba generar una variable. -->

Reescribí el código (hacelo como mejor creas cambiando todo aquello que consideres necesario) de forma que obtengas el mismo resultado pero sin hacer uso de closures.

 <!-- document.getElementById('fuente-8').addEventListener("click",function(){
  document.body.style.fontSize = 8 + 'px';
 
  
});   
document.getElementById('fuente-16').addEventListener("click",function(){
  document.body.style.fontSize = 16 + 'px';
 
  
}); 
document.getElementById('fuente-24').addEventListener("click",function(){
  document.body.style.fontSize = 24 + 'px' ;
 
  
});    -->